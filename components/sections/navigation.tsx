"use client";

import Image from "next/image";
import { useState, useEffect } from "react";
import { Menu, X, Home, Info, Users, Calendar, Map, Award, Sparkles } from "lucide-react";

const navItems = [
  { label: "Главная", href: "#hero", icon: Home },
  { label: "О проекте", href: "#about", icon: Info },
  { label: "Аудитории", href: "#audiences", icon: Users },
  { label: "Роли", href: "#roles", icon: Award },
  { label: "Таймлайны", href: "#timelines", icon: Map },
  { label: "Мероприятия", href: "#events", icon: Calendar },
  { label: "Результаты", href: "#results", icon: Sparkles },
];

export function Navigation() {
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Lock body scroll when menu is open
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }
    return () => {
      document.body.style.overflow = "";
    };
  }, [isOpen]);

  const scrollToSection = (href: string) => {
    const element = document.querySelector(href);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
    setIsOpen(false);
  };

  return (
    <>
      <nav 
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
          isScrolled ? "glass-card-strong py-3" : "py-4"
        }`}
      >
        <div className="max-w-lg mx-auto px-5">
          <div className="flex items-center justify-between">
            {/* Logo */}
            <button 
              onClick={() => {
                window.scrollTo({ top: 0, behavior: "smooth" });
                setIsOpen(false);
              }}
              className="flex items-center gap-3 cursor-pointer active:opacity-80 transition-opacity"
            >
              <div className="w-11 h-11 rounded-2xl bg-white/20 flex items-center justify-center p-1">
                <div className="relative w-full h-full">
                  <Image 
                    src="/косатка.png"
                    alt="Логотип"
                    fill
                    className="object-contain"
                    sizes="44px"
                  />
                </div>
              </div>
              <span className="text-white font-bold text-base">Балдежный Четвертый</span>
            </button>

            {/* Mobile menu button */}
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="glass-button rounded-2xl p-3 text-white h-11 w-11 flex items-center justify-center active:scale-95 transition-transform"
              aria-label={isOpen ? "Закрыть меню" : "Открыть меню"}
            >
              {isOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
            </button>
          </div>
        </div>
      </nav>

      {/* Full-screen mobile menu */}
      {isOpen && (
        <div className="fixed inset-0 z-40 pt-20">
          <div 
            className="absolute inset-0 bg-black/30 backdrop-blur-sm"
            onClick={() => setIsOpen(false)}
          />
          <div className="relative h-full overflow-auto px-5 py-6">
            <div className="max-w-lg mx-auto">
              <div className="glass-card-strong rounded-3xl p-4">
                <div className="flex flex-col gap-2">
                  {navItems.map((item) => (
                    <button
                      key={item.href}
                      onClick={() => scrollToSection(item.href)}
                      className="flex items-center gap-4 text-white px-5 py-4 rounded-2xl active:bg-white/15 transition-all text-left"
                    >
                      <div className="w-10 h-10 rounded-xl bg-white/15 flex items-center justify-center shrink-0">
                        <item.icon className="w-5 h-5 text-white/80" />
                      </div>
                      <span className="text-base font-medium">{item.label}</span>
                    </button>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  );
}