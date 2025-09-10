/* eslint-disable */
// @ts-nocheck
"use client";

import { useEffect } from "react";
import { usePathname, useSearchParams } from "next/navigation";

const GTMRouteListener = () => {
  const pathname = usePathname();
  const searchParams = useSearchParams();

  useEffect(() => {
    // Reconstruct full URL path with query
    const queryString = searchParams.toString();
    const fullPath = pathname + (queryString ? `?${queryString}` : "");

    // Send to GTM
    if (typeof window !== "undefined" && window.dataLayer) {
      window.dataLayer.push({
        event: "pageview",
        page: fullPath,
      });
      console.log("✅ Sent pageview to GTM:", fullPath);
    }
  }, [pathname, searchParams]);

  return null;
};

export default GTMRouteListener; 