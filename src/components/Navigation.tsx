"use client";
import Link from "next/link";
import { usePathname } from "next/navigation";

export default function Navigation() {
  const pathname = usePathname();

  return (
    <nav className="fixed top-4 left-4 z-50 bg-white/80 backdrop-blur-sm rounded-lg shadow-lg p-4">
      <div className="flex gap-4">
        <Link 
          href="/" 
          className={`px-3 py-2 rounded-md text-sm font-medium transition-colors ${
            pathname === "/" 
              ? "bg-blue-100 text-blue-700" 
              : "text-gray-700 hover:bg-gray-100"
          }`}
        >
          Главная (Site)
        </Link>
        <Link 
          href="/landing" 
          className={`px-3 py-2 rounded-md text-sm font-medium transition-colors ${
            pathname === "/landing" 
              ? "bg-blue-100 text-blue-700" 
              : "text-gray-700 hover:bg-gray-100"
          }`}
        >
          Landing
        </Link>
        <Link 
          href="/site" 
          className={`px-3 py-2 rounded-md text-sm font-medium transition-colors ${
            pathname === "/site" 
              ? "bg-blue-100 text-blue-700" 
              : "text-gray-700 hover:bg-gray-100"
          }`}
        >
          Site
        </Link>
        <Link 
          href="/cases" 
          className={`px-3 py-2 rounded-md text-sm font-medium transition-colors ${
            pathname.startsWith("/cases") 
              ? "bg-blue-100 text-blue-700" 
              : "text-gray-700 hover:bg-gray-100"
          }`}
        >
          Cases
        </Link>
      </div>
    </nav>
  );
} 