#!/usr/bin/env bash
# Bulk-imports real historical news articles from the old WordPress site
# into the new site's News database via the API.
#
# Usage: ./seed-historical-news.sh [API_BASE_URL]
# Defaults to http://localhost:5296 (local dev). For production, pass your
# Railway API URL, e.g. ./seed-historical-news.sh https://api.callasfoundation.org.za

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

echo "Logged in. Importing articles..."

post_article() {
  local title="$1" excerpt="$2" body="$3" date="$4" category="$5" author="$6" image="$7"
  RESPONSE=$(curl -s -o /dev/null -w "%{http_code}" -X POST "$API/api/news" \
    -H "Content-Type: application/json" \
    -H "Authorization: Bearer $TOKEN" \
    -d "{\"title\":\"$title\",\"excerpt\":\"$excerpt\",\"body\":\"$body\",\"publishedDate\":\"$date\",\"category\":\"$category\",\"author\":\"$author\",\"imageUrl\":\"$image\"}")
  if [ "$RESPONSE" = "201" ]; then
    echo "  ✓ $title"
  else
    echo "  ✗ FAILED ($RESPONSE): $title"
  fi
}

post_article \
  "Allen donates bicycles to Flats anti-GBV group" \
  "Community Safety MEC Reagen Allen donated bicycles to support the Triple B (BBB) boys' programme's mentor home visits in Bridgetown." \
  "A Bridgetown community project aimed at helping young boys resist gender-based violence received a boost this week thanks to a donation of bicycles from Community Safety MEC Reagen Allen. The Triple B project, started by Callas Foundation, sees 35 boys aged 10 to 16 from Bridgetown and surrounding communities attend weekly workshops on violence, abuse and consent. The programme is endorsed by the Women Judges Association, represented by Magistrate Raees Khan, in partnership with the Saartjie Baartman Centre. Allen explained that the bicycles will help mentors conduct home visits, since transport had been a concern for the project. A camp for the boys was also being planned at Zandvliet Nature Reserve, with the City of Cape Town donating the camping space." \
  "2024-06-12T00:00:00Z" \
  "BBB Programme" \
  "Callas Team" \
  "https://images.unsplash.com/photo-1503676260728-1c00da094a0b?auto=format&fit=crop&w=1600&q=80"

post_article \
  "Men learn about gender-based violence" \
  "Farouk Hansen of the Heideveld Neighbourhood Watch reflects on a three-day GBV workshop, and why men have to be part of ending the violence." \
  "The only people who can put a stop to gender-based violence are men — the same people who are, more often than not, the perpetrators. That was the reflection of Farouk Hansen, a member of the Heideveld Neighbourhood Watch, after attending a three-day GBV training workshop hosted through Callas Foundation's training programmes. Community-based training like this aims to turn frontline volunteers into informed allies who can recognise, respond to and help prevent gender-based violence in their own neighbourhoods." \
  "2023-06-22T00:00:00Z" \
  "Training" \
  "Callas Team" \
  "https://images.unsplash.com/photo-1552664730-d307ca884978?auto=format&fit=crop&w=1600&q=80"

post_article \
  "Challenging the laws which serve to silence victims of sexual violence" \
  "The Women's Legal Centre challenges provisions of the Criminal Procedure Act that restrict publication of information about people accused of sexual offences before they've pleaded." \
  "During 16 Days of Activism, the Women's Legal Centre issued a media statement challenging the constitutionality of certain provisions in the Criminal Procedure Act, which prohibit the publication of any information relating to people accused of sexual offences before they have pleaded to the charges. Campaigners argue that these provisions can end up protecting the identity of the accused at the expense of survivors and their supporters being able to speak openly about what happened to them. Callas Foundation shared the statement in solidarity, under the banners #SilenceHidesViolence, #EndGBV and #MakeYourVoiceHeard." \
  "2022-12-06T00:00:00Z" \
  "Advocacy" \
  "Women's Legal Centre" \
  "https://images.unsplash.com/photo-1450101499163-c8848c66ca85?auto=format&fit=crop&w=1600&q=80"

post_article \
  "GBV Ambassadors First Responder Training — Piketberg" \
  "Congratulations to everyone in Piketberg and the greater Bergrivier area who completed the GBV Ambassadors First Responders Training." \
  "Congratulations to everyone in Piketberg and the greater Bergrivier area for participating in and successfully completing the GBV Ambassadors First Responders Training, hosted across two sessions from 19 to 21 September and 4 to 5 October 2022. A huge thank you to everyone involved in coordinating and hosting the training, and to every participant now equipped to be a trusted first point of contact for survivors in their own community." \
  "2022-10-05T00:00:00Z" \
  "Training" \
  "Callas Team" \
  "https://images.unsplash.com/photo-1521737604893-d14cc237f11d?auto=format&fit=crop&w=1600&q=80"

post_article \
  "GBV Ambassador and First Responders Training Programme" \
  "Callas Foundation runs a GBV Ambassador and First Responders Training Programme across South Africa, built on community mobilisation and capacity-building." \
  "Callas Foundation runs a GBV Ambassador and First Responders Training programme throughout South Africa. The success of this project relies on key principles such as community mobilisation, activism, dialogue, lobbying, advocacy, empowerment and capacity-building — equipping everyday community members with the skills to respond to gender-based violence the moment it's disclosed to them." \
  "2022-07-22T00:00:00Z" \
  "Training" \
  "Callas Team" \
  "https://images.unsplash.com/photo-1521737604893-d14cc237f11d?auto=format&fit=crop&w=1600&q=80"

post_article \
  "Happy Birthday, Caroline Peters — Founder of Callas Foundation" \
  "Callas Foundation wishes founder Caroline Peters a very happy birthday." \
  "Today Callas Foundation wishes Caroline Peters, our Founder, a very happy birthday. May you continue to see the beauty in this world and continue to be the goal-driven, powerhouse of light you are for everyone around you. You illuminate every space you enter." \
  "2022-10-23T00:00:00Z" \
  "Community" \
  "Callas Team" \
  "https://images.unsplash.com/photo-1521737604893-d14cc237f11d?auto=format&fit=crop&w=1600&q=80"

post_article \
  "South Africa's feminist revolution, one office at a time" \
  "Despite high levels of violence against women, South Africa is undergoing what activists describe as a feminist revolution." \
  "Despite the high levels of violence against women in South Africa, activists say the country is in the midst of a feminist revolution. On any given day at the Callas Foundation office in Athlone, that revolution looks like two young women standing at the door, waiting for help — not with a crisis, but simply to register their children at a local school. It's this quieter, everyday work alongside the crisis response that keeps community-based organisations like Callas rooted in the neighbourhoods they serve." \
  "2021-07-21T00:00:00Z" \
  "Advocacy" \
  "Callas Team" \
  "https://images.unsplash.com/photo-1552664730-d307ca884978?auto=format&fit=crop&w=1600&q=80"

post_article \
  "Caroline Peters speaks at Irish Embassy Women's Month panel" \
  "The Irish Embassy to South Africa invited Caroline Peters to speak on a Women's Month panel about women's agency during Covid-19." \
  "As part of Women's Month celebrations, the Irish Embassy to South Africa hosted a panel discussion on women's agency and lived experience during the Covid-19 pandemic. Caroline Peters was invited to speak on the second panel, joining a moderated discussion on how the pandemic reshaped — and in many cases worsened — the everyday realities facing women across South Africa." \
  "2020-07-16T00:00:00Z" \
  "Advocacy" \
  "Callas Team" \
  "https://images.unsplash.com/photo-1519671482749-fd09be7ccebf?auto=format&fit=crop&w=1600&q=80"

post_article \
  "National GBVF Council welcomed, but questions remain over its effectiveness" \
  "The National Council on Gender-Based Violence and Femicide is a step forward, but civil society groups are asking how it will be held accountable." \
  "The National Council on Gender-Based Violence and Femicide Bill was gazetted as a step toward establishing a multi-sectoral, independent council to coordinate implementation of South Africa's National Strategic Plan on GBVF. The Bill traces back to the Presidential Summit against GBVF held in November 2018, the first of its kind, which brought together more than 1,000 people from across the country. While Callas Foundation and fellow civil society organisations welcomed the council as a positive step, questions remain about how its effectiveness will be measured and how it will stay accountable to the communities it's meant to serve." \
  "2022-11-01T00:00:00Z" \
  "Advocacy" \
  "Callas Team" \
  "https://images.unsplash.com/photo-1450101499163-c8848c66ca85?auto=format&fit=crop&w=1600&q=80"

post_article \
  "Latest crime statistics in South Africa" \
  "South Africa's quarterly crime statistics, presented to Parliament's police portfolio committee, revealed several alarming trends." \
  "South Africa's quarterly crime statistics, presented to Parliament's portfolio committee on police, revealed a number of alarming trends for the reporting period. Gender-based violence and femicide remained a significant concern within the broader crime picture, reinforcing the need for continued frontline response work and prevention programmes at community level." \
  "2023-05-01T00:00:00Z" \
  "Advocacy" \
  "Callas Team" \
  "https://images.unsplash.com/photo-1450101499163-c8848c66ca85?auto=format&fit=crop&w=1600&q=80"

post_article \
  "Our Christmas Wishlist" \
  "This festive season, Callas Foundation is raising funds to treat community elders to a meal and deliver 100 grocery hampers to families in need." \
  "Callas Foundation's annual Christmas Charity Campaign helps raise funds to treat the elders of our community to a hearty meal and deliver 100 grocery hampers to families facing food insecurity. Christmas is a season for giving, and this campaign is our way of making sure everyone we serve gets a Merry Christmas too." \
  "2023-12-01T00:00:00Z" \
  "Community Kitchen" \
  "Callas Team" \
  "https://images.unsplash.com/photo-1547573854-74d2a71d0826?auto=format&fit=crop&w=1600&q=80"

post_article \
  "Caroline Peters introduces guest speaker at Presidential Summit on GBVF (ENCA)" \
  "Caroline Peters featured in ENCA's coverage of the Presidential Summit on Gender-Based Violence and Femicide." \
  "Caroline Peters was given the honour of introducing the guest speaker at the Presidential Summit on Gender-Based Violence and Femicide, in coverage that aired on ENCA. Beyond her traditional roles as wife, mother, grandmother, aunt and friend, Caroline is also an athlete, counsellor, public speaker and social justice advocate — and it's that full range of lived experience she brought to the introduction." \
  "2022-06-01T00:00:00Z" \
  "Advocacy" \
  "Callas Team" \
  "https://images.unsplash.com/photo-1552664730-d307ca884978?auto=format&fit=crop&w=1600&q=80"

echo ""
echo "Done. Check /admin/posts to review, then /news on the live site."