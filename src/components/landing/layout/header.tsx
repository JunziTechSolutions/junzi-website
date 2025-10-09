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

// 🔡 Characters for effect
const allowedCharacters = [
  "ア",
  "イ",
  "ウ",
  "エ",
  "オ",
  "カ",
  "キ",
  "ク",
  "ケ",
  "コ",
  "サ",
  "シ",
  "ス",
  "セ",
  "ソ",
];

function getRandomCharacter() {
  const randomIndex = Math.floor(Math.random() * allowedCharacters.length);
  return allowedCharacters[randomIndex];
}

// Track scheduled timeouts per element so we can cancel on mouse leave
const hoverTimeouts = new WeakMap<HTMLElement, number[]>();

function createEventHandler() {
  return function handleHoverEvent(e: React.MouseEvent<HTMLElement>) {
    if (typeof window === "undefined") return;
    const target = e.currentTarget as HTMLElement;

    // Prevent re-trigger while animating
    if (target.getAttribute("data-scrambling") === "1") return;

    const originalText = target.textContent || "";
    const randomizedText = originalText
      .split("")
      .map(() => getRandomCharacter())
      .join("");

    target.setAttribute("data-original-text", originalText);
    target.setAttribute("data-scrambling", "1");
    target.textContent = randomizedText;

    const ids: number[] = [];
    for (let i = 0; i < originalText.length; i++) {
      const id = window.setTimeout(() => {
        const nextIndex = i + 1;
        target.textContent = `${originalText.substring(0, nextIndex)}${randomizedText.substring(nextIndex)}`;
        if (nextIndex === originalText.length) {
          target.removeAttribute("data-scrambling");
        }
      }, i * 80);
      ids.push(id);
    }
    hoverTimeouts.set(target, ids);
  };
}

// Ensure scrambled text resets on mouse leave
function resetHoverText(e: React.MouseEvent<HTMLElement>) {
  const target = e.currentTarget as HTMLElement;
  const ids = hoverTimeouts.get(target);
  if (ids && ids.length) {
    ids.forEach((id) => clearTimeout(id));
    hoverTimeouts.delete(target);
  }
  const originalText = target.getAttribute("data-original-text");
  if (originalText != null) {
    target.textContent = originalText;
  }
  target.removeAttribute("data-scrambling");
  target.removeAttribute("data-original-text");
}

// 👇 Scroll helper
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
  const { isOpen, isClosing, openModal, closeModal } = useModal();
  const [isCompanyOpen, setIsCompanyOpen] = useState(false);

  useEffect(() => {
    setIsMounted(true);
    if (typeof window !== "undefined") {
      const handleScroll = () => setIsScrolled(window.scrollY > 50);
      window.addEventListener("scroll", handleScroll);
      return () => window.removeEventListener("scroll", handleScroll);
    }
  }, []);

  useEffect(() => {
    if (typeof window !== "undefined") {
      const handleResize = () => {
        if (window.innerWidth >= 768) {
          setIsMobileMenuOpen(false);
        }
      };
      window.addEventListener("resize", handleResize);
      return () => window.removeEventListener("resize", handleResize);
    }
  }, []);

  return (
    <>
      <TopPromoBar />

      <header
        className={cn(
          isScrolled ? "fixed top-0 left-0 right-0 z-50" : "fixed top-50 left-0 right-0 z-50"
        )}
      >
        <div
          className={cn(
            "relative flex items-center justify-between transition-all duration-1000 ease-in-out",
            isScrolled
              ? "max-w-xs sm:max-w-md md:max-w-2xl lg:max-w-3xl xl:max-w-4xl mx-auto rounded-full mt-2 py-2.5 px-4 sm:px-6"
              : "container mx-auto rounded-none py-1 md:py-2 px-4 sm:px-6 lg:px-8"
          )}
        >
          {isMounted && (
            <div
              className={cn(
                "absolute inset-0 -z-10 transform-gpu transition-all duration-1000 ease-in-out",
                "bg-slate-100/80 dark:bg-slate-900/80 backdrop-blur-lg shadow-xl rounded-full",
                isScrolled ? "opacity-100 scale-100" : "opacity-0 scale-0"
              )}
              style={{ transformOrigin: "top center" }}
            />
          )}

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
          <nav className="hidden md:flex items-center space-x-2 lg:space-x-3 flex-1 justify-center px-2">
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
                    className="px-2 text-sm font-medium text-slate-700 hover:text-indigo-600 dark:hover:text-indigo-400 transition-colors cursor-pointer whitespace-nowrap inline-block"
                    style={{
                      width: `${(link.label.length + 3) * 8}px`,
                      textAlign: "center",
                      minWidth: `${(link.label.length + 3) * 8}px`,
                      maxWidth: `${(link.label.length + 3) * 8}px`,
                      overflow: "hidden",
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
                    className="px-2 text-sm font-medium text-slate-700 hover:text-indigo-600 dark:hover:text-indigo-400 transition-colors whitespace-nowrap inline-block"
                    onMouseOver={eventHandler as any}
                    onMouseLeave={resetHoverText}
                    style={{
                      width: `${(link.label.length + 3) * 8}px`,
                      textAlign: "center",
                      minWidth: `${(link.label.length + 3) * 8}px`,
                      maxWidth: `${(link.label.length + 3) * 8}px`,
                      overflow: "hidden",
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
                    className="px-2 text-sm font-medium text-slate-700 hover:text-indigo-600 dark:hover:text-indigo-400 transition-colors cursor-pointer whitespace-nowrap"
                    onMouseOver={eventHandler as any}
                    onMouseLeave={resetHoverText}
                    style={{
                      width: `${(link.label.length + 3) * 8}px`,
                      textAlign: "center",
                      minWidth: `${(link.label.length + 3) * 8}px`,
                      maxWidth: `${(link.label.length + 3) * 8}px`,
                      overflow: "hidden",
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
                          className="block px-4 py-2 rounded-xl text-sm text-slate-700 hover:bg-indigo-500/10 dark:hover:bg-indigo-500/20"
                          onMouseOver={createEventHandler() as any}
                          onMouseLeave={resetHoverText}
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
                }}
              >
                Get Started
              </Button>
            </a>
          </div>

          {/* Mobile Menu Toggle */}
          <div className="md:hidden ml-auto">
            <Button
              variant="ghost"
              size="icon"
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              className="text-slate-700 hover:text-indigo-600 dark:hover:text-indigo-400 pt-2 md:pt-5"
              aria-expanded={isMobileMenuOpen}
              aria-controls="mobile-menu-animated-smooth"
            >
              {isMobileMenuOpen ? (
                <X className="h-5 w-5 md:h-6 md:w-6" />
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
            className="md:hidden absolute top-full left-0 right-0 bg-slate-100/95 dark:bg-slate-900/95 backdrop-blur-xl shadow-xl mx-2 rounded-b-lg"
          >
            <nav className="flex flex-col space-y-1 px-4 pt-3 pb-4">
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
                      className="block rounded-md px-3 py-2.5 text-base font-medium text-slate-700 hover:bg-indigo-500/10 dark:hover:bg-indigo-500/20 transition-colors cursor-pointer whitespace-nowrap"
                      style={{
                        width: `${link.label.length * 10}px`,
                        textAlign: "center",
                        minWidth: `${link.label.length * 10}px`,
                        maxWidth: `${link.label.length * 10}px`,
                        overflow: "hidden",
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
                      onClick={() => setIsMobileMenuOpen(false)}
                      className="block rounded-md px-3 py-2.5 text-base font-medium text-slate-700 hover:bg-indigo-500/10 dark:hover:bg-indigo-500/20 whitespace-nowrap"
                      style={{
                        width: `${link.label.length * 10}px`,
                        textAlign: "center",
                        minWidth: `${link.label.length * 10}px`,
                        maxWidth: `${link.label.length * 10}px`,
                        overflow: "hidden",
                      }}
                    >
                      {link.label}
                    </Link>
                  );
                }
                return (
                  <div key={link.label} className="space-y-1">
                    <div className="px-3 pt-2 text-sm font-semibold text-slate-500">{link.label}</div>
                    {link.items.map((item) => (
                      <Link
                        key={item.label}
                        href={item.href}
                        onClick={() => setIsMobileMenuOpen(false)}
                        className="block rounded-md px-3 py-2.5 text-base font-medium text-slate-700 hover:bg-indigo-500/10 dark:hover:bg-indigo-500/20"
                      >
                        {item.label}
                      </Link>
                    ))}
                  </div>
                );
              })}
              <div className="border-t border-slate-300/70 dark:border-slate-700/70 pt-4 mt-3 space-y-3">
                <a href="/form" onClick={() => setIsMobileMenuOpen(false)}>
                  <Button className="w-full bg-indigo-600 hover:bg-indigo-700 text-white text-base font-semibold rounded-lg py-2.5 transition-colors">
                    Get Started
                  </Button>
                </a>
              </div>
            </nav>
          </div>
        )}
      </header>

      <Modal isOpen={isOpen} isClosing={isClosing} onClose={closeModal}>
        <Form />
      </Modal>
    </>
  );
}
