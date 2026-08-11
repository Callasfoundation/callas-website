import { Outlet, useRouterState } from "@tanstack/react-router";
import { AnimatePresence, motion } from "framer-motion";
import { Navbar } from "./Navbar";
import { Footer } from "./Footer";
import { Chatbot } from "./Chatbot";
import { NewsPopup } from "./NewsPopup";
import { CookieBanner } from "./CookieBanner";
import logo from "@/assets/images/logo/callas-logo.png";

export function PublicLayout() {
  const key = useRouterState({ select: (s) => s.location.pathname });
  return (
    <div className="min-h-screen flex flex-col bg-white">
      <img
        src={logo}
        alt=""
        aria-hidden="true"
        className="fixed bottom-4 right-4 h-20 w-20 sm:h-28 sm:w-28 opacity-[0.06] pointer-events-none select-none z-0"
      />
      <Navbar />
      <main className="flex-1 relative z-10">
        <AnimatePresence mode="wait">
          <motion.div
            key={key}
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -8 }}
            transition={{ duration: 0.5, ease: [0.16, 1, 0.3, 1] }}
          >
            <Outlet />
          </motion.div>
        </AnimatePresence>
      </main>
      <Footer />
      <Chatbot />
      <NewsPopup />
      <CookieBanner />
    </div>
  );
}
