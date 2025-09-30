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
    <div className="flex flex-col items-center w-8 sm:w-10">
      <div
        className="text-[16px] font-medium tabular-nums leading-normal text-white"
        style={{
          fontFamily: "Space Grotesk, sans-serif",
          lineHeight: "normal",
        }}
      >
        {String(value).padStart(2, "0")}
      </div>
      <div
        className="text-[12px] font-light text-white leading-normal mt-0"
        style={{ fontFamily: "Inter, sans-serif" }}
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
      className="w-full text-white h-20 sm:h-16  flex items-center"
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
            className="inline-flex items-start rounded-[8px] h-[42px] justify-center items-start px-2 gap-1"
            style={{
              borderWidth: "0.3px",
              borderStyle: "solid",
              borderColor: "var(--Colors-Neutral-100, #FFFFFF)",
              paddingTop: "4px",
            }}
          >
            <TimeSegment value={timeLeft.days} label="Days" />
            <span
              aria-hidden="true"
              className="text-[16px] font-medium text-white leading-normal  "
              style={{ fontFamily: "Space Grotesk, sans-serif" }}
            >
              :
            </span>
            <TimeSegment value={timeLeft.hours} label="Hours" />
            <span
              aria-hidden="true"
              className="text-[16px] font-medium text-white leading-normal  "
              style={{ fontFamily: "Space Grotesk, sans-serif" }}
            >
              :
            </span>
            <TimeSegment value={timeLeft.minutes} label="Min" />
            <span
              aria-hidden="true"
              className="text-[16px] font-medium text-white leading-normal  "
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
