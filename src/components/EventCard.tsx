import React from "react";
import { motion } from "motion/react";
import { Calendar, MapPin } from "lucide-react";
import { EventDetails } from "../types";

interface EventCardProps {
  event: EventDetails;
  compact?: boolean;
}

export default function EventCard({ event, compact = false }: EventCardProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 15 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8, delay: 0.3 }}
      className={`glass-panel w-full shadow-[0_12px_40px_rgba(0,0,0,0.03)] border border-white/50 relative overflow-hidden ${
        compact ? "rounded-[20px] p-4 md:p-5" : "rounded-[28px] p-6 md:p-8"
      }`}
    >
      {/* Sparkle background accent inside card */}
      <div className="absolute top-0 right-0 w-24 h-24 bg-gradient-to-bl from-[#F4ECFC] to-transparent opacity-60 rounded-bl-3xl pointer-events-none" />

      <div className={`flex flex-col ${compact ? "gap-3 md:gap-4" : "gap-6 md:gap-7"}`}>
        {/* Core details row */}
        <div className={`grid grid-cols-1 md:grid-cols-[auto_auto_1fr] items-center ${compact ? "gap-4 md:gap-5" : "gap-6 md:gap-8"}`}>
          
          {/* Calendar Detail */}
          <div className="flex items-center gap-3 md:gap-4">
            <div className={`rounded-full bg-[#9C7CBF] flex items-center justify-center shrink-0 shadow-[0_4px_10px_rgba(156,124,191,0.15)] ${
              compact ? "w-9 h-9" : "w-12 h-12"
            }`}>
              <Calendar className={compact ? "w-4.5 h-4.5 text-white" : "w-5.5 h-5.5 text-white"} />
            </div>
            <div className="flex flex-col shrink-0">
              <div className="flex items-baseline gap-1">
                <span className={`font-bold text-zinc-800 tracking-tight leading-none whitespace-nowrap ${
                  compact ? "text-[16px] md:text-[18px]" : "text-[20px] md:text-[23px]"
                }`}>
                  {event.date}
                </span>
                <span className={`font-bold text-[#9C7CBF] whitespace-nowrap ${
                  compact ? "text-[11px] md:text-[12px]" : "text-[13px] md:text-[15px]"
                }`}>
                  ({event.dayOfWeek})
                </span>
              </div>
              <span className={`text-zinc-500 font-medium tracking-wider whitespace-nowrap ${
                compact ? "text-[12px] md:text-[13px] mt-1" : "text-[13px] md:text-[15px] mt-1.5"
              }`}>
                {event.time}
              </span>
            </div>
          </div>

          {/* Separator line on Desktop, hidden on mobile */}
          <div className="hidden md:block w-[1px] h-10 bg-zinc-200/60 shrink-0" />

          {/* Map Pin Detail */}
          <div className="flex items-center gap-3 md:gap-4 min-w-0">
            <div className={`rounded-full bg-[#F3EFFB] flex items-center justify-center shrink-0 ${
              compact ? "w-9 h-9" : "w-12 h-12"
            }`}>
              <MapPin className={compact ? "w-4.5 h-4.5 text-[#9C7CBF]" : "w-5.5 h-5.5 text-[#9C7CBF]"} />
            </div>
            <div className="flex flex-col min-w-0">
              <span className={`font-bold text-zinc-800 tracking-tight leading-tight whitespace-nowrap ${
                compact ? "text-[13px] md:text-[14px]" : "text-[15px] md:text-[16px]"
              }`}>
                {event.venueName}
              </span>
              <span className={`text-zinc-500 font-medium tracking-wide leading-relaxed whitespace-pre-line ${
                compact ? "text-[10px] md:text-[11px] mt-1" : "text-[12px] md:text-[13px] mt-1.5"
              }`}>
                {event.venueAddress}
              </span>
            </div>
          </div>

        </div>

        {/* Divider line */}
        <div className="w-full h-[1px] bg-zinc-100/85" />

        {/* Features row */}
        <div className="flex items-center gap-2.5">
          <div className={`flex items-center gap-1 filter drop-shadow-sm select-none ${
            compact ? "text-[16px]" : "text-[20px]"
          }`}>
            <span>🍪</span>
            <span>🍹</span>
          </div>
          <p className={`text-zinc-700 font-bold tracking-widest ${
            compact ? "text-[11px] md:text-[12px]" : "text-[13px] md:text-[14px]"
          }`}>
            {event.features.join(" / ")}
          </p>
        </div>
      </div>
    </motion.div>
  );
}
