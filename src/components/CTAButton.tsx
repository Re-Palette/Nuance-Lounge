import React from "react";
import { motion } from "motion/react";
import { ChevronRight } from "lucide-react";

interface CTAButtonProps {
  label: string;
  onClick: () => void;
  className?: string;
}

export default function CTAButton({ label, onClick, className = "" }: CTAButtonProps) {
  return (
    <motion.button
      whileHover={{ y: -3, boxShadow: "0 12px 30px rgba(156, 124, 191, 0.4)" }}
      whileTap={{ scale: 0.98 }}
      onClick={onClick}
      className={`relative select-none flex items-center justify-between gap-6 px-8 py-4.5 rounded-full text-white font-bold text-[15px] md:text-[16px] tracking-widest bg-gradient-to-r from-[#9C7CBF] via-[#8196DD] to-[#6A97D9] shadow-[0_8px_24px_rgba(156,124,191,0.25)] group transition-all duration-300 cursor-pointer overflow-hidden ${className}`}
    >
      {/* Background flare effect */}
      <div className="absolute inset-0 bg-gradient-to-r from-[#AC8CD1] via-[#91A5E9] to-[#7DA9E8] opacity-0 group-hover:opacity-100 transition-opacity duration-300 -z-1" />

      {/* Button text */}
      <span className="relative z-10">{label}</span>

      {/* Circle Icon Badge */}
      <span className="relative z-10 w-7 h-7 bg-white/20 backdrop-blur-sm rounded-full flex items-center justify-center group-hover:bg-white group-hover:scale-105 transition-all duration-300">
        <ChevronRight className="w-4 h-4 text-white group-hover:text-[#6A97D9] transition-colors duration-300 stroke-[3]" />
      </span>
    </motion.button>
  );
}
