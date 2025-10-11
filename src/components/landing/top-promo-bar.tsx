"use client";
import React, { useEffect, useState } from "react";

function TimeSegment({
  value,
  label,
}: {
  value: number | string;
  label: string;
}) {
  return (
    <div className="flex flex-col items-center w-6 sm:w-8">
      <div
        className=" font-medium tabular-nums leading-normal text-white"
        style={{ fontFamily: "Inter, sans-serif", fontSize: "10px", lineHeight: '14px' }}
      >
        {String(value).padStart(2, "0")}
      </div>
      <div
        className="font-light text-white leading-normal mt-0"
        style={{ fontFamily: "Inter, sans-serif", fontSize: "7px" }}
      >
        {label}
      </div>
    </div>
  );
}

export default function TopPromoBar() {
  const [timeLeft, setTimeLeft] = useState({
    days: 0,
    hours: 0,
    minutes: 0,
    seconds: 0,
  });

  useEffect(() => {
    // Calculate a deadline that resets every week
    const getWeeklyDeadline = () => {
      const now = Date.now();
      // Use a fixed starting point (e.g., Jan 1, 2024 00:00:00 UTC)
      const baseDate = Date.UTC(2024, 0, 1, 0, 0, 0, 0);
      const weekInMs = 7 * 24 * 60 * 60 * 1000;
      
      // Calculate how many complete weeks have passed since base date
      const timeSinceBase = now - baseDate;
      const weeksElapsed = Math.floor(timeSinceBase / weekInMs);
      
      // Next deadline is at the end of the current week
      return baseDate + (weeksElapsed + 1) * weekInMs;
    };

    const tick = () => {
      const endsAt = getWeeklyDeadline();
      const diff = endsAt - Date.now();
      const ms = Math.max(diff, 0);
      const days = Math.floor(ms / (24 * 60 * 60 * 1000));
      const hours = Math.floor((ms % (24 * 60 * 60 * 1000)) / (60 * 60 * 1000));
      const minutes = Math.floor((ms % (60 * 60 * 1000)) / (60 * 1000));
      const seconds = Math.floor((ms % (60 * 1000)) / 1000);
      setTimeLeft({ days, hours, minutes, seconds });
    };

    tick();
    const id = setInterval(tick, 1000);
    return () => clearInterval(id);
  }, []);

  return (
    <div
      className="w-screen text-white h-16 sm:h-10 flex items-center fixed top-0 left-0 z-40"
      style={{
        background:
          "radial-gradient(60.58% 725.59% at 43.14% 120.14%, #3652A3 0%, #4FABFF 100%)",
        width: "100vw",
        marginLeft: "calc(-50vw + 50%)",
        marginRight: "calc(-50vw + 50%)",
      }}
    >
      <div className="mx-auto max-w-screen-2xl px-3 sm:px-4 lg:px-6 h-full">
        <div className="h-full flex flex-col md:flex-row items-center justify-center gap-1.5 md:gap-4 text-center">
          <span
            className="text-xs font-medium text-white flex items-center gap-1"
            style={{ fontFamily: "Space Grotesk, sans-serif" }}
          >
            🚀
            Free Prototype — This Week Only!
          </span>
          <span
            className="hidden sm:inline text-white text-xs"
            style={{ fontFamily: "Space Grotesk, sans-serif" }}
          >
            Offer ends in:
          </span>
          <div
            className="inline-flex items-start justify-center   rounded-[8px] h-[32px] w-[140px] p-1 "
             style={{
               background:
                 "linear-gradient(132.03deg, #0A061F 0%, #1A0F3A 85.38%)",
               borderWidth: "0.3px",
               borderStyle: "solid",
               borderColor: "var(--Colors-Neutral-100, #FFFFFF)",
               mixBlendMode: "screen",
               boxShadow:
                 "inset 0px -8px 5px 0px rgba(21, 17, 49, 0.8), inset 0px 2px 10px 0px #9D95FF, 0px 0px 3.56px 0px rgba(205, 198, 247, 0.32)",
             }}
          >
            <TimeSegment value={timeLeft.days} label="Days" />
            <span
              aria-hidden="true"
              className="text-[16px] font-medium text-white leading-normal"
              style={{ fontFamily: "Space Grotesk, sans-serif" }}
            >
              :
            </span>
            <TimeSegment value={timeLeft.hours} label="Hours" />
            <span
              aria-hidden="true"
              className="text-[16px] font-medium text-white leading-normal"
              style={{ fontFamily: "Space Grotesk, sans-serif" }}
            >
              :
            </span>
            <TimeSegment value={timeLeft.minutes} label="Min" />
            <span
              aria-hidden="true"
              className="text-[16px] font-medium text-white leading-normal"
              style={{ fontFamily: "Space Grotesk, sans-serif" }}
            >
              :
            </span>
            <TimeSegment value={timeLeft.seconds} label="Sec" />
          </div>
        </div>
      </div>
    </div>
  );
}
