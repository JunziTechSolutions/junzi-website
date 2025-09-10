"use client"

import Link from "next/link"
import { Button } from "@/components/ui/button"
import { X } from "lucide-react"
import { useState, useEffect } from "react"
import { cn } from "@/lib/utils"

// 🔡 Characters for effect
const allowedCharacters = ['ア', 'イ', 'ウ', 'エ', 'オ', 'カ', 'キ', 'ク', 'ケ', 'コ', 'サ', 'シ', 'ス', 'セ', 'ソ'];

function getRandomCharacter() {
  const randomIndex = Math.floor(Math.random() * allowedCharacters.length)
  return allowedCharacters[randomIndex]
}

function createEventHandler() {
  let isInProgress = false
  return function handleHoverEvent(e: React.MouseEvent<HTMLAnchorElement>) {
    if (isInProgress || typeof window === 'undefined') return
    const target = e.currentTarget
    const originalText = target.textContent || ''
    const randomizedText = originalText.split('').map(() => getRandomCharacter()).join('')
    target.setAttribute('data-original-text', originalText)
    target.textContent = randomizedText
    for (let i = 0; i < originalText.length; i++) {
      isInProgress = true
      setTimeout(() => {
        const nextIndex = i + 1
        target.textContent = `${originalText.substring(0, nextIndex)}${randomizedText.substring(nextIndex)}`
        if (nextIndex === originalText.length) isInProgress = false
      }, i * 80)
    }
  }
}

// 👇 Scroll helper
const scrollToId = (id: string) => {
  if (typeof window !== 'undefined') {
    const el = document.getElementById(id)
    if (el) el.scrollIntoView({ behavior: "smooth" })
  }
}

const investorNavLinks = [
  { href: "raise", label: "Raise" },
  { href: "providing", label: "Providing" },
  { href: "how-it-works", label: "How It Works" },
  { href: "results", label: "Results" },
  { href: "testimonials", label: "Testimonials" },
  { href: "about", label: "About" },
]

type InvestorHeaderProps = {
  ctaHrefOverride?: string
}

export default function InvestorHeader({ ctaHrefOverride }: InvestorHeaderProps) {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)
  const [isScrolled, setIsScrolled] = useState(false)
  const [isMounted, setIsMounted] = useState(false)

  useEffect(() => {
    setIsMounted(true)
    if (typeof window !== 'undefined') {
      const handleScroll = () => setIsScrolled(window.scrollY > 50)
      window.addEventListener("scroll", handleScroll)
      return () => window.removeEventListener("scroll", handleScroll)
    }
  }, [])

  useEffect(() => {
    if (typeof window !== 'undefined') {
      const handleResize = () => {
        if (window.innerWidth >= 768) {
          setIsMobileMenuOpen(false)
        }
      }
      window.addEventListener("resize", handleResize)
      return () => window.removeEventListener("resize", handleResize)
    }
  }, [])

  return (
    <header className="fixed top-0 left-0 right-0 z-50">
      <div
        className={cn(
          "relative flex items-center justify-between transition-all duration-1000 ease-in-out",
          isScrolled
            ? "max-w-xs sm:max-w-md md:max-w-2xl lg:max-w-3xl xl:max-w-4xl mx-auto rounded-full mt-2 py-2.5 px-4 sm:px-6"
            : "container mx-auto rounded-none py-2 md:py-4 px-4 sm:px-6 lg:px-8",
        )}
      >
        {isMounted && (
          <div
            className={cn(
              "absolute inset-0 -z-10 transform-gpu transition-all duration-1000 ease-in-out",
              "bg-slate-100/80 dark:bg-slate-900/80 backdrop-blur-lg shadow-xl rounded-full",
              isScrolled ? "opacity-100 scale-100" : "opacity-0 scale-0",
            )}
            style={{ transformOrigin: "top center" }}
          />
        )}

        <Link href="/" className="flex items-center space-x-2 shrink-0">
          <img src="/Artifex_ME_1v_Favicon.png" className="w-[40px] h-[40px] md:w-[54px] md:h-[54px]" alt="Logo" width={54} height={54} />
        </Link>

        {/* Desktop Navigation */}
        <nav
          className="hidden md:flex items-center space-x-4 lg:space-x-6 flex-1 justify-center px-4"
        >
          {investorNavLinks.map((link) => {
            const eventHandler = createEventHandler()
            return (
              <a
                key={link.label}
                href={`#${link.href}`}
                onClick={(e) => {
                  e.preventDefault()
                  scrollToId(link.href)
                }}
                onMouseOver={eventHandler}
                className="text-sm font-medium text-slate-700 hover:text-indigo-600 dark:hover:text-indigo-400 transition-colors cursor-pointer whitespace-nowrap inline-block"
                style={{
                  width: `${link.label.length * 8}px`,
                  textAlign: 'center',
                  minWidth: `${link.label.length * 8}px`,
                  maxWidth: `${link.label.length * 8}px`,
                  overflow: 'hidden'
                }}
              >
                {link.label}
              </a>
            )
          })}
        </nav>

        {/* Right actions */}
        <div className="hidden md:flex items-center space-x-3 lg:space-x-4 shrink-0">
          <a href="/form">
            <Button
              className="text-white text-sm font-semibold px-6 py-3 rounded-full transition-all whitespace-nowrap hover:opacity-90 shadow-lg"
              style={{
                background: 'linear-gradient(97.94deg, #4461B1 -2.89%, #4FABFF 91.06%)'
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
          id="mobile-menu-investor"
          className="md:hidden absolute top-full left-0 right-0 bg-slate-100/95 dark:bg-slate-900/95 backdrop-blur-xl shadow-xl mx-2 rounded-b-lg"
        >
          <nav className="flex flex-col space-y-1 px-4 pt-3 pb-4">
            {investorNavLinks.map((link) => {
              const eventHandler = createEventHandler()
              return (
                                  <a
                    key={link.label}
                    href={`#${link.href}`}
                    onClick={(e) => {
                      e.preventDefault()
                      setIsMobileMenuOpen(false)
                      scrollToId(link.href)
                    }}
                    onMouseOver={eventHandler}
                    className="block rounded-md px-3 py-2.5 text-base font-medium text-slate-700 hover:bg-indigo-500/10 dark:hover:bg-indigo-500/20 transition-colors cursor-pointer"
                  >
                    {link.label}
                  </a>
              )
            })}
            <div className="border-t border-slate-300/70 dark:border-slate-700/70 pt-4 mt-3 space-y-3">
              <a
                href={ctaHrefOverride ?? "#get-funded"}
                onClick={(e) => {
                  if (!ctaHrefOverride) {
                    e.preventDefault()
                    setIsMobileMenuOpen(false)
                    scrollToId("get-funded")
                  }
                }}
              >
                <Button
                  className="w-full bg-indigo-600 hover:bg-indigo-700 text-white text-base font-semibold rounded-lg py-2.5 transition-colors"
                >
                  Get Funded
                </Button>
              </a>
            </div>
          </nav>
        </div>
      )}
    </header>
  )
}
