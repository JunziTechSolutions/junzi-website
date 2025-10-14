"use client";

import Link from "next/link";
import { Button } from "@/components/ui/button";
import { X } from "lucide-react";
import { useState, useEffect } from "react";
import { cn } from "@/lib/utils";
import { Modal } from "@/components/ui/modal";
import Form from "../form/Form";
import { useModal } from "../hooks/useModal";
import TopPromoBar from "@/components/landing/top-promo-bar";
import { motion, AnimatePresence } from "framer-motion";

// 🔡 Characters for effect
const allowedCharacters = ["ア","イ","ウ","エ","オ","カ","キ","ク","ケ","コ","サ","シ","ス","セ","ソ"];
const getRandomCharacter = () => allowedCharacters[Math.floor(Math.random() * allowedCharacters.length)];

// Hover scramble utilities
const hoverTimeouts = new WeakMap<HTMLElement, number[]>();
function createEventHandler() {
  return function handleHoverEvent(e: React.MouseEvent<HTMLElement>) {
    if (typeof window === "undefined") return;
    const target = e.currentTarget as HTMLElement;
    if (target.getAttribute("data-scrambling") === "1") return;
    const originalText = target.textContent || "";
    const randomizedText = originalText.split("").map(() => getRandomCharacter()).join("");
    target.setAttribute("data-original-text", originalText);
    target.setAttribute("data-scrambling", "1");
    target.textContent = randomizedText;
    const ids: number[] = [];
    for (let i = 0; i < originalText.length; i++) {
      const id = window.setTimeout(() => {
        const nextIndex = i + 1;
        target.textContent = `${originalText.substring(0, nextIndex)}${randomizedText.substring(nextIndex)}`;
        if (nextIndex === originalText.length) target.removeAttribute("data-scrambling");
      }, i * 80);
      ids.push(id);
    }
    hoverTimeouts.set(target, ids);
  };
}
function resetHoverText(e: React.MouseEvent<HTMLElement>) {
  const target = e.currentTarget as HTMLElement;
  const ids = hoverTimeouts.get(target);
  if (ids && ids.length) ids.forEach((id) => clearTimeout(id));
  hoverTimeouts.delete(target);
  const originalText = target.getAttribute("data-original-text");
  if (originalText != null) target.textContent = originalText;
  target.removeAttribute("data-scrambling");
  target.removeAttribute("data-original-text");
}

// Scroll helper
const scrollToId = (id: string) => {
  if (typeof window !== "undefined") {
    const el = document.getElementById(id);
    if (el) el.scrollIntoView({ behavior: "smooth" });
  }
};

type NavLink =
  | { type: "scroll"; href: string; label: string }
  | { type: "external"; href: string; label: string }
  | { type: "dropdown"; label: string; items: { label: string; href: string }[] };

const navLinks: NavLink[] = [
  // 1) How-We-Do-IT -> link to homepage process section
  { type: "external", href: "/#process", label: "How-We-Do-IT" },
  // 2) Case Studies -> cases page
  { type: "external", href: "/cases", label: "Case Studies" },
  // 3) Services -> link to homepage services section
  { type: "external", href: "/#services", label: "Services" },
  // 4) Company dropdown -> About Us, Careers, Blog
  { type: "dropdown", label: "Company", items: [
    { label: "About Us", href: "/about" },
    { label: "Careers", href: "/careers" },
    { label: "Blog", href: "/blog" },
  ]},
];

type HeaderProps = {
  ctaHrefOverride?: string;
};

export default function Header({ ctaHrefOverride }: HeaderProps) {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMounted, setIsMounted] = useState(false);
  const { isOpen, isClosing, closeModal } = useModal();
  const [isCompanyOpen, setIsCompanyOpen] = useState(false);

  // Detect scroll
  useEffect(() => {
    setIsMounted(true);
    if (typeof window !== "undefined") {
      const handleScroll = () => {
        const scrolled = window.scrollY > 50;
        setIsScrolled(scrolled);
        // Add class to body for CSS targeting
        document.body.classList.toggle('header-scrolled', scrolled);
      };
      window.addEventListener("scroll", handleScroll);
      return () => window.removeEventListener("scroll", handleScroll);
    }
  }, []);

  // Handle resize
  useEffect(() => {
    if (typeof window !== "undefined") {
      const handleResize = () => {
        if (window.innerWidth >= 768) setIsMobileMenuOpen(false);
      };
      window.addEventListener("resize", handleResize);
      return () => window.removeEventListener("resize", handleResize);
    }
  }, []);

  // 🧱 Prevent background scroll when mobile menu open
  useEffect(() => {
    if (typeof document !== "undefined") {
      if (isMobileMenuOpen) {
        document.body.style.overflow = "hidden";
        document.body.style.position = "fixed";
        document.body.style.width = "100%";
        document.body.style.top = `-${window.scrollY}px`;
      } else {
        const scrollY = document.body.style.top;
        document.body.style.overflow = "auto";
        document.body.style.position = "";
        document.body.style.width = "";
        document.body.style.top = "";
        if (scrollY) {
          window.scrollTo(0, parseInt(scrollY || '0') * -1);
        }
      }
    }
    return () => {
      if (typeof document !== "undefined") {
        document.body.style.overflow = "auto";
        document.body.style.position = "";
        document.body.style.width = "";
        document.body.style.top = "";
      }
    };
  }, [isMobileMenuOpen]);

  return (
    <>
      <TopPromoBar />

      <header
        className={cn(
          isScrolled ? "fixed top-16 md:top-10 left-0 right-0 z-50" : "fixed top-0 left-0 right-0 md:top-10 left-0 right-0 z-50"
        )}
      >
        {/* 🌀 Curved / Liquid Animation Behind */}
        <AnimatePresence>
          {isMobileMenuOpen && (
            <motion.div
              key="liquid-bg"
              initial={{ clipPath: "circle(0% at 50% 0%)" }}
              animate={{
                clipPath: "circle(180% at 50% 50%)",
                transition: { duration: 0.9, ease: [0.22, 1, 0.36, 1] },
              }}
              exit={{
                clipPath: "circle(0% at 50% 0%)",
                transition: { duration: 0.6, ease: [0.22, 1, 0.36, 1] },
              }}
              // 🎨 Solid background (no opacity)
              className="absolute top-0 left-0 w-full h-screen bg-slate-100 dark:bg-slate-900 z-0"
              style={{ transformOrigin: "top center" }}
            />
          )}
        </AnimatePresence>

        {/* Header Content */}
        <div
          className={cn(
            "relative z-50 flex items-center justify-between transition-all duration-1000 ease-in-out",
            isScrolled
              ? "max-w-xs sm:max-w-md md:max-w-2xl lg:max-w-3xl xl:max-w-4xl mx-auto rounded-full mt-2 py-1.5 md:py-2.5 px-4 sm:px-6"
              : "container mx-auto rounded-none py-1 md:py-2 px-4 sm:px-6 lg:px-8",
            !isScrolled && "pt-16"
          )}
        >
          {isMounted && (
            <div
              className={cn(
                "absolute inset-0 -z-10 transform-gpu transition-all duration-1000 ease-in-out",
                "bg-slate-100/80 dark:bg-slate-900/80 backdrop-blur-lg shadow-xl rounded-full",
                "md:bg-slate-100/80 md:dark:bg-slate-900/80",
                "bg-slate-100/40 dark:bg-slate-900/40",
                isScrolled ? "opacity-100 scale-100" : "opacity-0 scale-0"
              )}
              style={{ transformOrigin: "top center" }}
            />
          )}

          {/* Logo */}
          <Link href="/" className="flex items-center space-x-2 shrink-0">
            <img
              src="/Artifex_ME_1v_Favicon.png"
              className="w-[32px] h-[32px] md:w-[40px] md:h-[40px]"
              alt="Logo"
              width={40}
              height={40}
            />
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-2 lg:space-x-3 flex-1 justify-center px-2 font-primary">
            {navLinks.map((link) => {
              const eventHandler = createEventHandler();
              if (link.type === "scroll") {
                return (
                  <a
                    key={link.label}
                    href={`#${link.href}`}
                    onClick={(e) => {
                      e.preventDefault();
                      scrollToId(link.href);
                    }}
                    onMouseOver={eventHandler}
                    onMouseLeave={resetHoverText}
                    className="px-2 text-xs font-medium text-slate-700 hover:text-indigo-600 dark:hover:text-indigo-400 transition-colors cursor-pointer whitespace-nowrap inline-block"
                    style={{
                      width: `${(link.label.length + 3) * 8}px`,
                      textAlign: "center",
                      minWidth: `${(link.label.length + 3) * 8}px`,
                      maxWidth: `${(link.label.length + 3) * 8}px`,
                      overflow: "hidden",
                      fontFamily: "Space Grotesk, sans-serif",
                    }}
                  >
                    {link.label}
                  </a>
                );
              }
              if (link.type === "external") {
                return (
                  <Link
                    key={link.label}
                    href={link.href}
                    prefetch={false}
                    className="px-2 text-xs font-medium text-slate-700 hover:text-indigo-600 dark:hover:text-indigo-400 transition-colors whitespace-nowrap inline-block"
                    onMouseOver={eventHandler as any}
                    onMouseLeave={resetHoverText}
                    style={{
                      width: `${(link.label.length + 3) * 8}px`,
                      textAlign: "center",
                      minWidth: `${(link.label.length + 3) * 8}px`,
                      maxWidth: `${(link.label.length + 3) * 8}px`,
                      overflow: "hidden",
                      fontFamily: "Space Grotesk, sans-serif",
                    }}
                  >
                    {link.label}
                  </Link>
                );
              }
              // dropdown (Company)
              return (
                <div
                  key={link.label}
                  className="relative"
                  onMouseEnter={() => setIsCompanyOpen(true)}
                  onMouseLeave={() => setIsCompanyOpen(false)}
                >
                  <button
                    type="button"
                    className="px-2 text-xs font-medium text-slate-700 hover:text-indigo-600 dark:hover:text-indigo-400 transition-colors cursor-pointer whitespace-nowrap"
                    onMouseOver={eventHandler as any}
                    onMouseLeave={resetHoverText}
                    style={{
                      width: `${(link.label.length + 3) * 8}px`,
                      textAlign: "center",
                      minWidth: `${(link.label.length + 3) * 8}px`,
                      maxWidth: `${(link.label.length + 3) * 8}px`,
                      overflow: "hidden",
                      fontFamily: "Space Grotesk, sans-serif",
                    }}
                  >
                    {link.label}
                  </button>
                  {isCompanyOpen && (
                    <div
                      className="absolute left-0 top-full pt-2 z-50 w-48 rounded-2xl bg-white/90 dark:bg-slate-900/90 shadow-xl backdrop-blur p-2"
                      onMouseEnter={() => setIsCompanyOpen(true)}
                      onMouseLeave={() => setIsCompanyOpen(false)}
                    >
                      {link.items.map((item) => (
                        <Link
                          key={item.label}
                          href={item.href}
                          className="block px-4 py-2 rounded-xl text-xs font-medium text-slate-700 hover:bg-indigo-500/10 dark:hover:bg-indigo-500/20"
                          onMouseOver={createEventHandler() as any}
                          onMouseLeave={resetHoverText}
                          style={{ fontFamily: "Space Grotesk, sans-serif" }}
                        >
                          {item.label}
                        </Link>
                      ))}

                    </div>
                  )}
                </div>
              );
            })}
          </nav>

          {/* Right actions */}
          <div className="hidden md:flex items-center space-x-3 lg:space-x-4 shrink-0">
            <a href="/form" aria-label="Get Started">
              <Button
                className="text-white text-xs font-semibold px-4 py-2 rounded-full transition-all whitespace-nowrap hover:opacity-90 shadow-lg"
                style={{
                  background:
                    "linear-gradient(97.94deg, #4461B1 -2.89%, #4FABFF 91.06%)",
                  fontFamily: "Space Grotesk, sans-serif",
                }}
              >
                Get Started
              </Button>
            </a>
          </div>

          {/* Mobile Menu Toggle */}
          <div className="md:hidden ml-auto z-50">
            <Button
              variant="ghost"
              size="icon"
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              className="text-slate-700 hover:text-indigo-600 dark:hover:text-indigo-400 pt-2 md:pt-5"
              aria-expanded={isMobileMenuOpen}
              aria-controls="mobile-menu-animated-smooth"
            >
              {isMobileMenuOpen ? (
                <img
                  src="/icons/close_menu.svg"
                  alt="Close Menu"
                  width={40}
                  height={40}
                  className="w-[40px] h-[40px] md:w-[54px] md:h-[54px]"
                />
              ) : (
                <img
                  src="/icons/menu.svg"
                  alt="Menu"
                  width={40}
                  height={40}
                  className="w-[40px] h-[40px] md:w-[54px] md:h-[54px]"
                />
              )}
              <span className="sr-only">Toggle menu</span>
            </Button>
          </div>
        </div>

{/* Mobile Menu */}
{isMobileMenuOpen && (
  <div
    id="mobile-menu-animated-smooth"
    className="md:hidden fixed inset-0 bg-white/95 dark:bg-slate-900/95 backdrop-blur-lg z-50 flex flex-col"
    style={{ touchAction: 'none' }}
  >
    {/* Header Section */}
    <div className="flex items-center justify-between p-6 border-b border-gray-200/20">
      {/* Logo */}
      <Link href="/" className="flex items-center space-x-2 shrink-0" onClick={() => setIsMobileMenuOpen(false)}>
        <img
          src="/Artifex_ME_1v_Favicon.png"
          className="w-[32px] h-[32px]"
          alt="Logo"
          width={32}
          height={32}
        />
      </Link>
      
      {/* Close Button */}
      <button
        onClick={() => setIsMobileMenuOpen(false)}
        className="w-10 h-10 bg-blue-600 hover:bg-blue-700 rounded-lg flex items-center justify-center transition-colors"
        aria-label="Close menu"
      >
        <svg
          className="w-5 h-5 text-white"
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M6 18L18 6M6 6l12 12"
          />
        </svg>
      </button>
    </div>

    {/* Menu Links */}
    <nav className="flex flex-col px-6 py-8 space-y-4 flex-1 overflow-y-auto font-primary text-lg">
      {navLinks.map((link) => {
        const eventHandler = createEventHandler();
        if (link.type === "scroll") {
          return (
            <a
              key={link.label}
              href={`#${link.href}`}
              onClick={(e) => {
                e.preventDefault();
                setIsMobileMenuOpen(false);
                scrollToId(link.href);
              }}
              onMouseOver={eventHandler}
              onMouseLeave={resetHoverText}
              className="block rounded-md px-3 py-3 font-primary text-lg font-bold text-slate-800 dark:text-slate-100 cursor-pointer whitespace-nowrap"
            >
              {link.label}
            </a>
          );
        }
        if (link.type === "external") {
          return (
            <Link
              key={link.label}
              href={link.href}
              prefetch={false}
              onClick={() => setIsMobileMenuOpen(false)}
              onMouseOver={eventHandler as any}
              onMouseLeave={resetHoverText}
              className="block rounded-md px-3 py-3 font-primary text-lg font-bold text-slate-800 dark:text-slate-100 whitespace-nowrap"
            >
              {link.label}
            </Link>
          );
        }
        // dropdown
        return (
          <div key={link.label} className="space-y-1">
            {link.items.map((item) => (
              <Link
                key={item.label}
                href={item.href}
                onClick={() => setIsMobileMenuOpen(false)}
                onMouseOver={createEventHandler() as any}
                onMouseLeave={resetHoverText}
                className="block rounded-md px-3 py-3 font-primary text-lg font-bold text-slate-800 dark:text-slate-100"
              >
                {item.label}
              </Link>
            ))}
          </div>
        );
      })}
    </nav>

    {/* Get Started Button at Bottom */}
    <div className="p-6 border-t border-gray-200/20 bg-white/95 dark:bg-slate-900/95">
      <a href="/form" onClick={() => setIsMobileMenuOpen(false)}>
        <Button className="w-full bg-indigo-600 hover:bg-indigo-700 text-white text-lg font-primary font-semibold rounded-xl py-3 transition-all shadow-lg">
          Get Started
        </Button>
      </a>
    </div>
  </div>
)}


      </header>

      <Modal isOpen={isOpen} isClosing={isClosing} onClose={closeModal}>
        <Form />
      </Modal>
    </>
  );
}
