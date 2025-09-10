import type { Metadata } from "next";
import { Suspense } from "react";
import { Providers } from './providers';
import ExternalScripts from '@/components/analytics/ExternalScripts';
import GoogleTagManagerNoScript from '@/components/analytics/GoogleTagManagerNoScript';
import GTMRouteListener from '@/components/analytics/GTMRouteListener';
import { ClarityScript } from '@/components/ClarityScript';
import Navigation from '@/components/Navigation';
import '@/global.css';
import '@/styles/mobile-fixes.css';

export const metadata: Metadata = {
  title: "Junzi Tech Solutions",
  description: "Take Control of Your Software Journey Plan, Build, and Launch with Confidence",
  icons: {
    icon: "/Artifex_ME_1v_Favicon.png",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
      <html lang="en">
        <head>
          <link rel="icon" href="/Artifex_ME_1v_Favicon.jpg" sizes="any" />
          <link rel="preconnect" href="https://fonts.googleapis.com" />
          <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
          <link href="https://fonts.googleapis.com/css2?family=Space+Grotesk:wght@300;400;500;600;700&family=Manrope:wght@200;300;400;500;600;700;800&display=swap" rel="stylesheet" />
          <ExternalScripts />
          <ClarityScript />
        </head>
        <body className="antialiased">
          <GoogleTagManagerNoScript />
          <Suspense fallback={null}>
            <GTMRouteListener />
          </Suspense>
          <Providers>{children}</Providers>
        </body>
      </html>
  );
}

