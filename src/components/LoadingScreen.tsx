import React, { useEffect, useState } from "react";
import { motion } from "motion/react";
import { Sparkles } from "lucide-react";

interface LoadingScreenProps {
  onComplete: () => void;
}

export default function LoadingScreen({ onComplete }: LoadingScreenProps) {
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    // Natural feeling progress animation
    const timer = setInterval(() => {
      setProgress((prev) => {
        if (prev >= 100) {
          clearInterval(timer);
          setTimeout(() => {
            onComplete();
          }, 300); // Fine-tuned exit delay for clean experience
          return 100;
        }
        // Increment with varying natural speeds
        const increment = Math.floor(Math.random() * 18) + 6;
        return Math.min(prev + increment, 100);
      });
    }, 100);

    return () => clearInterval(timer);
  }, [onComplete]);

  return (
    <motion.div
      initial={{ opacity: 1 }}
      exit={{ opacity: 0, transition: { duration: 0.6, ease: [0.25, 1, 0.5, 1] } }}
      className="fixed inset-0 z-[9999] bg-[#FAF9F5] flex flex-col items-center justify-center overflow-hidden"
    >
      {/* Background elegant gradient blooms and textures */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden">
        <motion.div
          animate={{
            scale: [1, 1.08, 1],
            opacity: [0.15, 0.22, 0.15],
          }}
          transition={{
            duration: 6,
            repeat: Infinity,
            ease: "easeInOut",
          }}
          className="absolute -top-[10%] -left-[10%] w-[60%] h-[65%] rounded-full bg-gradient-to-br from-[#9C7CBF]/20 to-[#8196DD]/10 blur-[90px]"
        />
        <motion.div
          animate={{
            scale: [1, 1.12, 1],
            opacity: [0.12, 0.2, 0.12],
          }}
          transition={{
            duration: 7,
            repeat: Infinity,
            ease: "easeInOut",
            delay: 1,
          }}
          className="absolute -bottom-[12%] -right-[10%] w-[60%] h-[60%] rounded-full bg-gradient-to-br from-[#8196DD]/15 to-[#6A97D9]/10 blur-[90px]"
        />
        {/* Overlay subtle dot pattern */}
        <div className="absolute inset-0 bg-dot-pattern opacity-[0.06]" />
      </div>

      {/* Main Container */}
      <div className="relative z-10 flex flex-col items-center px-6">
        {/* Premium Brand Circle Icon */}
        <motion.div
          initial={{ scale: 0.85, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          transition={{ duration: 0.9, ease: [0.16, 1, 0.3, 1] }}
          className="relative mb-8"
        >
          {/* Subtle slow-rotating brand ring */}
          <motion.div
            animate={{ rotate: 360 }}
            transition={{ duration: 16, repeat: Infinity, ease: "linear" }}
            className="w-20 h-20 rounded-full border border-zinc-200/80 border-t-[#9C7CBF]/80 flex items-center justify-center"
          />
          <div className="absolute inset-0 flex items-center justify-center text-[#9C7CBF]">
            <Sparkles className="w-6 h-6 animate-pulse" />
          </div>
        </motion.div>

        {/* Brand Name Text with masks */}
        <div className="overflow-hidden mb-2">
          <motion.h1
            initial={{ y: 24, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.15, ease: [0.16, 1, 0.3, 1] }}
            className="font-sans text-[26px] md:text-[30px] font-bold tracking-[0.25em] text-zinc-800 text-center select-none"
          >
            Nuance Lounge
          </motion.h1>
        </div>

        {/* Subtitle / Tagline */}
        <div className="overflow-hidden mb-12">
          <motion.p
            initial={{ y: 12, opacity: 0 }}
            animate={{ y: 0, opacity: 0.55 }}
            transition={{ duration: 0.8, delay: 0.35, ease: [0.16, 1, 0.3, 1] }}
            className="text-[11px] md:text-[12px] font-medium tracking-[0.18em] text-zinc-500 uppercase text-center select-none"
          >
            The Personal Style Experience
          </motion.p>
        </div>

        {/* Modern minimalistic loading line */}
        <div className="w-52 h-[1.5px] bg-zinc-200/60 rounded-full overflow-hidden relative">
          <motion.div
            animate={{ width: `${progress}%` }}
            transition={{ ease: "easeOut", duration: 0.1 }}
            className="h-full bg-gradient-to-r from-[#9C7CBF] via-[#8196DD] to-[#6A97D9] rounded-full"
          />
        </div>

        {/* Elegantly styled numeric progress display */}
        <motion.span
          initial={{ opacity: 0 }}
          animate={{ opacity: 0.4 }}
          transition={{ duration: 0.4, delay: 0.3 }}
          className="text-[10px] font-mono tracking-[0.2em] text-[#9C7CBF] mt-3 select-none"
        >
          {String(progress).padStart(3, "0")}%
        </motion.span>
      </div>
    </motion.div>
  );
}
