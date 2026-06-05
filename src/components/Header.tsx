import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "motion/react";
import { Menu, X, ArrowRight } from "lucide-react";

interface HeaderProps {
  onCtaClick: () => void;
  onScrollToElement: (id: string) => void;
}

export default function Header({ onCtaClick, onScrollToElement }: HeaderProps) {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 20) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navItems = [
    { label: "イベントについて", id: "about" },
    { label: "開催概要", id: "summary" },
    { label: "よくある質問", id: "faq" },
    { label: "Contact", url: "https://www.instagram.com/repalette_official/?hl=ja" }
  ];

  const handleNavItemClick = (id: string) => {
    setIsMobileMenuOpen(false);
    onScrollToElement(id);
  };

  return (
    <>
      <header
        id="app-header"
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
          isScrolled
            ? "bg-white/85 backdrop-blur-lg shadow-[0_4px_24px_rgba(0,0,0,0.04)] border-b border-zinc-100/50 py-2"
            : "bg-white/30 backdrop-blur-md border-b border-white/20 py-3"
        }`}
      >
        <div className="max-w-7xl mx-auto px-6 md:px-12 flex items-center justify-between">
          {/* Logo Section */}
          <div className="flex flex-col items-start select-none">
            <span className="font-serif text-[22px] font-bold tracking-wider text-zinc-900 leading-tight">
              Re-Palette
            </span>
            <span className="text-[10px] md:text-[11px] text-zinc-500 font-light tracking-widest mt-0.5 whitespace-nowrap">
              学生の「好き」をカタチにするコミュニティ。
            </span>
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden lg:flex items-center gap-10">
            <ul className="flex items-center gap-8">
              {navItems.map((item) => (
                <li key={item.label}>
                  {item.url ? (
                    <a
                      href={item.url}
                      target="_blank"
                      rel="noreferrer"
                      className="text-[14px] text-zinc-650 hover:text-[#9C7CBF] font-bold tracking-wider transition-colors duration-200 cursor-pointer relative py-1 after:content-[''] after:absolute after:bottom-0 after:left-1/2 after:w-0 after:h-[1px] after:bg-[#9C7CBF] after:transition-all after:duration-300 hover:after:w-full hover:after:left-0"
                    >
                      {item.label}
                    </a>
                  ) : (
                    <button
                      onClick={() => handleNavItemClick(item.id!)}
                      className="text-[14px] text-zinc-650 hover:text-zinc-900 font-medium tracking-wider transition-colors duration-200 cursor-pointer relative py-1 after:content-[''] after:absolute after:bottom-0 after:left-1/2 after:w-0 after:h-[1px] after:bg-zinc-800 after:transition-all after:duration-300 hover:after:w-full hover:after:left-0"
                    >
                      {item.label}
                    </button>
                  )}
                </li>
              ))}
            </ul>

            <motion.button
              whileHover={{ scale: 1.03 }}
              whileTap={{ scale: 0.98 }}
              onClick={onCtaClick}
              className="px-6 py-2.5 rounded-full text-[14px] font-bold tracking-wider text-white bg-gradient-to-r from-[#9C7CBF] to-[#7FA1E5] hover:opacity-95 shadow-[0_4px_12px_rgba(156,124,191,0.25)] transition-shadow duration-200 cursor-pointer flex items-center gap-1.5"
            >
              参加申し込み
              <ArrowRight className="w-3.5 h-3.5" />
            </motion.button>
          </nav>

          {/* Mobile Menu Button */}
          <div className="lg:hidden flex items-center">
            <button
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              className="p-2 text-zinc-700 hover:text-zinc-950 focus:outline-none cursor-pointer"
              aria-label="Toggle Menu"
            >
              {isMobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>
      </header>

      {/* Mobile Drawer Overlay */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            className="fixed inset-x-0 top-0 pt-20 pb-8 bg-white/95 backdrop-blur-lg shadow-xl border-b border-zinc-100 z-40 lg:hidden"
          >
            <div className="px-6 flex flex-col gap-6">
              <ul className="flex flex-col gap-4">
                {navItems.map((item) => (
                  <li key={item.label} className="border-b border-zinc-50 pb-2">
                    {item.url ? (
                      <a
                        href={item.url}
                        target="_blank"
                        rel="noreferrer"
                        onClick={() => setIsMobileMenuOpen(false)}
                        className="text-[15px] font-bold tracking-wide text-[#9C7CBF] hover:text-[#7FA1E5] block w-full text-left py-1 cursor-pointer"
                      >
                        {item.label}
                      </a>
                    ) : (
                      <button
                        onClick={() => handleNavItemClick(item.id!)}
                        className="text-[15px] font-medium tracking-wide text-zinc-700 hover:text-zinc-950 block w-full text-left py-1 cursor-pointer"
                      >
                        {item.label}
                      </button>
                    )}
                  </li>
                ))}
              </ul>
              <motion.button
                whileTap={{ scale: 0.98 }}
                onClick={() => {
                  setIsMobileMenuOpen(false);
                  onCtaClick();
                }}
                className="w-full py-3.5 rounded-full text-[15px] font-bold tracking-wider text-white text-center bg-gradient-to-r from-[#9C7CBF] to-[#7FA1E5] flex items-center justify-center gap-2 shadow-[0_4px_12px_rgba(156,124,191,0.25)] cursor-pointer"
              >
                参加申し込みはこちら
                <ArrowRight className="w-4 h-4" />
              </motion.button>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
