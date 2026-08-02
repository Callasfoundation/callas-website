#!/usr/bin/env bash
# Adds the real Callas Foundation board members to the Team database.
# Run this AFTER first checking /admin/team and deleting any placeholder/
# fictional entries you find there (e.g. "Nadia Petersen", "Thabo Mokoena",
# "Aisha Adams", "Sipho Khumalo", "Zanele Dlamini" — none of these are real).
#
# Usage: ./seed-board-members.sh [API_BASE_URL]

set -e

API="${1:-http://localhost:5296}"
echo "Target API: $API"
echo ""
read -rp "Admin username: " ADMIN_USER
read -rsp "Admin password: " ADMIN_PASS
echo ""

LOGIN_RESPONSE=$(curl -s -X POST "$API/api/auth/login" \
  -H "Content-Type: application/json" \
  -d "{\"username\":\"$ADMIN_USER\",\"password\":\"$ADMIN_PASS\"}")

TOKEN=$(echo "$LOGIN_RESPONSE" | grep -o '"token":"[^"]*"' | sed 's/"token":"//;s/"$//')

if [ -z "$TOKEN" ]; then
  echo "Login failed. Response was:"
  echo "$LOGIN_RESPONSE"
  exit 1
fi

echo "Logged in. Adding board members..."
echo "Note: using placeholder initials-avatars (ui-avatars.com) as photos since"
echo "real photos aren't available yet — swap these for real photos in /admin/team"
echo "whenever they're on hand."

post_member() {
  local name="$1" role="$2" bio="$3"
  local initials
  initials=$(echo "$name" | grep -oE '[A-Z]' | head -c 2)
  local image="https://ui-avatars.com/api/?name=${name// /+}&background=1e3a5f&color=fff&size=400&bold=true"
  RESPONSE=$(curl -s -o /dev/null -w "%{http_code}" -X POST "$API/api/team" \
    -H "Content-Type: application/json" \
    -H "Authorization: Bearer $TOKEN" \
    -d "{\"name\":\"$name\",\"role\":\"$role\",\"email\":\"board@callasfoundation.org.za\",\"bio\":\"$bio\",\"imageUrl\":\"$image\"}")
  if [ "$RESPONSE" = "201" ]; then
    echo "  ✓ $name"
  else
    echo "  ✗ FAILED ($RESPONSE): $name"
  fi
}

post_member \
  "Nikki Mosime-Christianson" \
  "Board Member" \
  "Serves on the Callas Foundation Board of Directors."

post_member \
  "Zoliswa Mbekwa" \
  "Board Member" \
  "Serves on the Callas Foundation Board of Directors."

post_member \
  "Zedia Walters" \
  "Board Member" \
  "Serves on the Callas Foundation Board of Directors."

post_member \
  "Roxie A. Hoven" \
  "Board Member" \
  "Serves on the Callas Foundation Board of Directors."

post_member \
  "Dr Nicole Kaniki" \
  "Board Member" \
  "Serves on the Callas Foundation Board of Directors."

echo ""
echo "Done. Check /admin/team, then confirm /about looks right."
echo "Swap in real photos and fuller bios for each board member when you have them."