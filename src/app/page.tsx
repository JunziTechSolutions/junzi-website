"use client"
import { ClarityTracker } from "@/components/analytics/ClarityTracker";
import LandingPage from "@/components/landing/sections/home";
import "@/global.css";
import "@/styles/globals.css";
// import SplashCursor from "@/components/landing/ui/SplashCursor";

export default function Page() {
  return (
    <>
      <LandingPage />
      <ClarityTracker
        pageName="Главная страница"
        customEvents={[
          { name: "page_loaded", data: { page: "home" } }
        ]}
      />
    </>
  );
}   