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
    <div className="flex flex-col items-center px-2 sm:px-3">
      <div
        className="text-base sm:text-xl md:text-2xl font-thin tabular-nums leading-none"
        style={{ fontFamily: "Space Grotesk, sans-serif" }}
      >
        {String(value).padStart(2, "0")}
      </div>
      <div
        className="text-[10px] sm:text-xs text-white/90 tracking-wide leading-none font-thin mt-0"
        style={{ fontFamily: "Space Grotesk, sans-serif" }}
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
    // Fixed deadline: 7 Oct 2025 00:00:00 UTC
    const endsAt = Date.UTC(2025, 9, 7, 0, 0, 0, 0);

    const tick = () => {
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
      className="w-full text-white h-20"
      style={{
        background:
          "radial-gradient(60.58% 725.59% at 43.14% 120.14%, #3652A3 0%, #4FABFF 100%)",
      }}
    >
      <div className="mx-auto max-w-screen-2xl px-3 sm:px-4 lg:px-6 h-full">
        <div className="h-full flex flex-col md:flex-row items-center justify-center gap-1.5 md:gap-4 text-center">
          <span
            className="text-xs sm:text-sm md:text-base font-medium text-white"
            style={{ fontFamily: "Space Grotesk, sans-serif" }}
          >
            Get your free prototype today! Limited time offer 🚀
          </span>
          <span
            className="hidden sm:inline text-white/90 text-xs md:text-sm"
            style={{ fontFamily: "Space Grotesk, sans-serif" }}
          >
            Offer ends in:
          </span>
          <div
            className="inline-flex items-center rounded-[8px]  sm:gap-[10px] min-w-[140px] sm:min-w-[167px] h-[38px] sm:h-[54px]  sm:px-[10px] py-[7px]"
            style={{
              background:
                "linear-gradient(132.03deg, #170F49 0%, #4A3AFF 85.38%)",
              borderWidth: "0.3px",
              borderStyle: "solid",
              borderColor: "var(--Colors-Neutral-100, #FFFFFF)",
              mixBlendMode: "plus-lighter",
            }}
          >
            <TimeSegment value={timeLeft.days} label="Days" />
            <div className="self-stretch w-px bg-white/40 mx-1" />
            <TimeSegment value={timeLeft.hours} label="Hours" />
            <div className="self-stretch w-px bg-white/40 mx-1" />
            <TimeSegment value={timeLeft.minutes} label="Min" />
            <div className="self-stretch w-px bg-white/40 mx-1" />
            <TimeSegment value={timeLeft.seconds} label="Sec" />
          </div>
        </div>
      </div>
    </div>
  );
}
