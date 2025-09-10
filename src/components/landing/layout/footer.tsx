"use client"
import Link from "next/link";
import { useCallback } from "react";

const allowedCharacters = ['ア', 'イ', 'ウ', 'エ', 'オ', 'カ', 'キ', 'ク', 'ケ', 'コ', 'サ', 'シ', 'ス', 'セ', 'ソ'];

function getRandomCharacter() {
  const randomIndex = Math.floor(Math.random() * allowedCharacters.length);
  return allowedCharacters[randomIndex];
}

function createEventHandler() {
  let isInProgress = false;
  return function handleHoverEvent(e: React.MouseEvent<HTMLAnchorElement>) {
    if (isInProgress) {
      return;
    }

    const target = e.currentTarget;
    const originalText = target.textContent || '';
    const randomizedText = originalText.split('').map(() => getRandomCharacter()).join('');

    // Сохраняем оригинальный текст как data-атрибут
    target.setAttribute('data-original-text', originalText);
    
    // Устанавливаем начальное состояние - полностью рандомные символы
    target.textContent = randomizedText;

    for (let i = 0; i < originalText.length; i++) {
      isInProgress = true;

      setTimeout(() => {
        const nextIndex = i + 1;
        target.textContent = `${originalText.substring(0, nextIndex)}${randomizedText.substring(nextIndex)}`;

        if (nextIndex === originalText.length) {
          isInProgress = false;
        }
      }, i * 80);
    }
  };
}

const getInTouchLeft = [
  { href: "/form", label: "Contact Sales" },
  { href: "/form", label: "Enterprises" },
  { href: "https://twitter.com/junzitech", label: "Twitter" },
];

const getInTouchRight = [
  { href: "https://www.linkedin.com/company/junzitechsolutions", label: "LinkedIn" },
];

const navigationLeft = [
  // { href: "#pricing", label: "Pricing" },
  { href: "#about", label: "About" },
  { href: "/cases", label: "Case Studies" },
];

const navigationRight = [
  { href: "#we-deliver", label: "Blog" },
  { href: "#we-deliver", label: "Careers" },
  { href: "/form", label: "Already bought from us?" },
];

const policyLinks = [
  { href: "/privacy", label: "Privacy Policy" },
  { href: "/terms", label: "Terms of Services" },
];

export default function Footer() {
  const getHandler = useCallback(() => createEventHandler(), []);
  
  return (
    <footer className="w-full pt-[50px] pb-[50px] px-4 select-none relative overflow-hidden">
      {/* Эффект распыления в левом нижнем углу - Desktop */}
      <div 
        className="absolute bottom-0 left-0 w-[800px] h-[1000px] pointer-events-none hidden md:block"
        style={{
          background: `
            radial-gradient(ellipse 600px 400px at 0% 100%, rgba(150, 202, 230, 0.9) 0%, rgba(150, 202, 230, 0.6) 20%, rgba(150, 202, 230, 0.3) 40%, transparent 70%),
            radial-gradient(ellipse 400px 300px at 10% 90%, rgba(150, 202, 230, 0.8) 0%, rgba(150, 202, 230, 0.4) 30%, rgba(150, 202, 230, 0.1) 50%, transparent 70%),
            radial-gradient(ellipse 300px 200px at 5% 95%, rgba(150, 202, 230, 0.7) 0%, rgba(150, 202, 230, 0.3) 40%, transparent 60%)
          `,
          filter: 'blur(4px)',
          zIndex: 0
        }}
      />
      
      {/* Эффект распыления в левом нижнем углу - Mobile */}
      <div 
        className="absolute bottom-0 left-0 w-[400px] h-[500px] pointer-events-none md:hidden"
        style={{
          background: `
            radial-gradient(ellipse 300px 200px at 0% 100%, rgba(150, 202, 230, 0.8) 0%, rgba(150, 202, 230, 0.5) 25%, rgba(150, 202, 230, 0.2) 45%, transparent 70%),
            radial-gradient(ellipse 200px 150px at 10% 90%, rgba(150, 202, 230, 0.6) 0%, rgba(150, 202, 230, 0.3) 35%, transparent 60%),
            radial-gradient(ellipse 150px 100px at 5% 95%, rgba(150, 202, 230, 0.5) 0%, rgba(150, 202, 230, 0.2) 40%, transparent 65%)
          `,
          filter: 'blur(3px)',
          zIndex: 0
        }}
      />
  
      <div className="max-w-7xl mx-auto w-full flex flex-col gap-0 relative z-10">
        {/* Верхний блок: Get In touch и Navigation */}
        <div className="flex flex-col lg:flex-row justify-between w-full gap-8">
          {/* Get In touch секция */}
          <div className="flex flex-col min-w-[260px] sm:min-w-[260px] min-w-0 mb-8 lg:mb-0">
            <span 
              className="font-bold mb-6 text-xl"
              style={{ 
                fontFamily: 'Space Grotesk',
                fontWeight: 700,
                fontSize: '20px',
                lineHeight: '130%',
                letterSpacing: '-2%',
                color: '#111827'
              }}
            >
              Get In touch
            </span>
            {/* Desktop версия - две колонки */}
            <div className="hidden lg:flex gap-6">
              <div className="flex flex-col gap-6">
                {getInTouchLeft.map((link) => {
                  const handler = getHandler();
                  return (
                    <Link
                      key={link.label}
                      href={link.href}
                      className="transition-colors hover:text-gray-800"
                      style={{ 
                        fontFamily: 'Manrope',
                        fontWeight: 400,
                        fontSize: '18px',
                        lineHeight: '130%',
                        letterSpacing: '-2%',
                        color: '#666666',
                        width: `${link.label.length * 10}px`,
                        textAlign: 'left',
                        minWidth: `${link.label.length * 10}px`,
                        maxWidth: `${link.label.length * 10}px`,
                        overflow: 'hidden',
                        whiteSpace: 'nowrap'
                      }}
                      onMouseOver={handler}
                    >
                      {link.label}
                    </Link>
                  );
                })}
              </div>
              <div className="flex flex-col gap-6 ml-6">
                {getInTouchRight.map((link) => {
                  const handler = getHandler();
                  return (
                    <Link
                      key={link.label}
                      href={link.href}
                      className="transition-colors hover:text-gray-800"
                      style={{ 
                        fontFamily: 'Manrope',
                        fontWeight: 400,
                        fontSize: '18px',
                        lineHeight: '130%',
                        letterSpacing: '-2%',
                        color: '#666666',
                        width: `${link.label.length * 10}px`,
                        textAlign: 'left',
                        minWidth: `${link.label.length * 10}px`,
                        maxWidth: `${link.label.length * 10}px`,
                        overflow: 'hidden',
                        whiteSpace: 'nowrap'
                      }}
                      onMouseOver={handler}
                    >
                      {link.label}
                    </Link>
                  );
                })}
              </div>
            </div>
            {/* Mobile версия - одна колонка */}
            <div className="flex lg:hidden flex-col gap-6">
              {[...getInTouchLeft, ...getInTouchRight].map((link) => {
                const handler = getHandler();
                return (
                  <Link
                    key={link.label}
                    href={link.href}
                    className="transition-colors hover:text-gray-800"
                    style={{ 
                      fontFamily: 'Manrope',
                      fontWeight: 400,
                      fontSize: '18px',
                      lineHeight: '130%',
                      letterSpacing: '-2%',
                      color: '#666666',
                      width: 'fit-content',
                      textAlign: 'left'
                    }}
                    onMouseOver={handler}
                  >
                    {link.label}
                  </Link>
                );
              })}
            </div>
          </div>
          
          {/* Navigation секция */}
          <div className="flex flex-col min-w-[340px] sm:min-w-[340px] min-w-0">
            <span 
              className="font-bold mb-6 text-xl"
              style={{ 
                fontFamily: 'Space Grotesk',
                fontWeight: 700,
                fontSize: '20px',
                lineHeight: '130%',
                letterSpacing: '-2%',
                color: '#111827'
              }}
            >
              Navigation
            </span>
            {/* Desktop версия - две колонки */}
            <div className="hidden lg:flex gap-6">
              <div className="flex flex-col gap-6">
                {navigationLeft.map((link) => {
                  const handler = getHandler();
                  return (
                    <Link
                      key={link.label}
                      href={link.href}
                      className="transition-colors hover:text-gray-800"
                      style={{ 
                        fontFamily: 'Manrope',
                        fontWeight: 400,
                        fontSize: '18px',
                        lineHeight: '130%',
                        letterSpacing: '-2%',
                        color: '#666666',
                        width: `${link.label.length * 10}px`,
                        textAlign: 'left',
                        minWidth: `${link.label.length * 10}px`,
                        maxWidth: `${link.label.length * 10}px`,
                        overflow: 'hidden',
                        whiteSpace: 'nowrap'
                      }}
                      onMouseOver={handler}
                    >
                      {link.label}
                    </Link>
                  );
                })}
              </div>
              <div className="flex flex-col gap-6 ml-6">
                {navigationRight.map((link) => {
                  const handler = getHandler();
                  return (
                    <Link
                      key={link.label}
                      href={link.href}
                      className="transition-colors hover:text-gray-800"
                      style={{ 
                        fontFamily: 'Manrope',
                        fontWeight: 400,
                        fontSize: '18px',
                        lineHeight: '130%',
                        letterSpacing: '-2%',
                        color: '#666666',
                        width: `${link.label.length * 10}px`,
                        textAlign: 'left',
                        minWidth: `${link.label.length * 10}px`,
                        maxWidth: `${link.label.length * 10}px`,
                        overflow: 'hidden',
                        whiteSpace: 'nowrap'
                      }}
                      onMouseOver={handler}
                    >
                      {link.label}
                    </Link>
                  );
                })}
              </div>
            </div>
            {/* Mobile версия - одна колонка */}
            <div className="flex lg:hidden flex-col gap-6">
              {[...navigationLeft, ...navigationRight].map((link) => {
                const handler = getHandler();
                return (
                  <Link
                    key={link.label}
                    href={link.href}
                    className="transition-colors hover:text-gray-800"
                    style={{ 
                      fontFamily: 'Manrope',
                      fontWeight: 400,
                      fontSize: '18px',
                      lineHeight: '130%',
                      letterSpacing: '-2%',
                      color: '#666666',
                      width: 'fit-content',
                      textAlign: 'left'
                    }}
                    onMouseOver={handler}
                  >
                    {link.label}
                  </Link>
                );
              })}
            </div>
          </div>
        </div>
        
        {/* Нижний блок: Privacy Policy и Terms of Services */}
        <div className="flex justify-between md:justify-end w-full mt-8 md:mt-44">
          <div className="flex gap-4 md:gap-9">
            {policyLinks.map((link) => {
              const handler = getHandler();
              return (
                <Link
                  key={link.label}
                  href={link.href}
                  className="transition-colors hover:text-gray-800"
                  style={{ 
                    fontFamily: 'Space Grotesk',
                    fontWeight: 400,
                    fontSize: 'clamp(18px, 2.5vw, 20px)',
                    lineHeight: '130%',
                    letterSpacing: '-2%',
                    color: '#666666',
                    width: `${link.label.length * 10}px`,
                    textAlign: 'left',
                    minWidth: `${link.label.length * 10}px`,
                    maxWidth: `${link.label.length * 10}px`,
                    overflow: 'hidden',
                    whiteSpace: 'nowrap'
                  }}
                  onMouseOver={handler}
                >
                  {link.label}
                </Link>
              );
            })}
          </div>
        </div>
      </div>
    </footer>
  );
}