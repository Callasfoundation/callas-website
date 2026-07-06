import { useEffect, useState } from "react";
import { X } from "lucide-react";
import { Link } from "@tanstack/react-router";

const KEY = "callas_cookie_consent";

export function CookieBanner() {
  const [show, setShow] = useState(false);
  useEffect(() => {
    if (typeof document === "undefined") return;
    const cookieSet = document.cookie.split("; ").some((c) => c.startsWith(`${KEY}=`));
    if (!cookieSet) setShow(true);
  }, []);
  function save(choice: "accept" | "decline") {
    const oneYear = 60 * 60 * 24 * 365;
    document.cookie = `${KEY}=${choice}; max-age=${oneYear}; path=/; SameSite=Lax`;
    setShow(false);
  }
  if (!show) return null;
  return (
    <div className="fixed bottom-4 inset-x-4 md:inset-x-auto md:right-4 md:max-w-md z-[60] rounded-xl bg-ink text-white shadow-2xl border border-white/10 p-4 flex items-start gap-3">
      <div className="flex-1 text-sm">
        <div className="font-display font-bold">We use cookies</div>
        <p className="text-white/75 mt-1 text-xs leading-relaxed">
          Callas Foundation uses only strictly-necessary cookies to keep the site working and to secure staff sign-in. We do not use advertising, profiling or third-party tracking cookies.{" "}
          <Link to="/cookies" className="underline hover:text-white">Read our cookie policy</Link>.
        </p>
        <div className="mt-3 flex gap-2">
          <button onClick={() => save("accept")} className="rounded-full bg-brand-red hover:bg-brand-red-dark px-4 py-1.5 text-xs font-semibold">Accept</button>
          <button onClick={() => save("decline")} className="rounded-full bg-white/10 hover:bg-white/20 px-4 py-1.5 text-xs font-semibold">Decline</button>
        </div>
      </div>
      <button aria-label="Dismiss" onClick={() => setShow(false)} className="text-white/60 hover:text-white"><X className="h-4 w-4" /></button>
    </div>
  );
}