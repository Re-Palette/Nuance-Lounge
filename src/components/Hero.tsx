import React from "react";
import { motion } from "motion/react";
import { Sparkles, HelpCircle, Info, Calendar } from "lucide-react";
import EventCard from "./EventCard";
import CTAButton from "./CTAButton";
import { heroData } from "../data/heroData";

interface HeroProps {
  onCtaClick: () => void;
}

export default function Hero({ onCtaClick }: HeroProps) {
  const { event } = heroData;

  return (
    <>
      {/* =========================================================================
          1. PC HERO SECTION (lg:以上) - ABSOLUTE ALIGNED OVERLAY ON THE PHOTO
          ========================================================================= */}
      <section className="hidden lg:block relative w-full h-[66.67vw] aspect-[1.5] bg-[#FAF9F5] overflow-hidden -mt-24 pt-24 z-10">
        {/* Background blobs for desktop */}
        <div className="absolute top-[-10%] left-[-10%] w-[40%] h-[40%] rounded-full bg-gradient-to-tr from-[#9C7CBF] to-transparent opacity-[0.22] blur-[100px] pointer-events-none" />
        <div className="absolute top-[2%] left-[45%] translate-x-[-50%] w-[320px] h-[320px] rounded-full bg-[#E5D7FA]/40 blur-[80px] animate-float-slow pointer-events-none" />
        <div className="absolute top-[-5%] right-[0%] w-[400px] h-[400px] rounded-full bg-gradient-to-bl from-[#FFDEC3]/45 to-transparent opacity-80 blur-[90px] pointer-events-none" />
        <div className="absolute top-[35%] left-[-5%] w-[350px] h-[550px] rounded-full bg-gradient-to-r from-[#DDCDF0]/40 to-[#CBDCF5]/20 blur-[100px] pointer-events-none" />
        <div className="absolute bottom-[-10%] right-[-10%] w-[50%] h-[50%] rounded-full bg-gradient-to-tl from-[#C0ECE7]/45 via-[#D3E5FA]/40 to-transparent blur-[120px] pointer-events-none" />
        <div className="absolute bottom-[2%] left-[4%] w-[300px] h-[300px] rounded-full bg-gradient-to-tr from-[#E1F3F5]/60 to-[#EBF3FE]/40 blur-[70px] pointer-events-none" />
        <div className="absolute bottom-[-5%] left-[45%] w-[250px] h-[250px] bg-[#F1E4FA]/50 rounded-full blur-[60px] animate-float-medium pointer-events-none" />
        <div className="absolute top-[8%] left-[3%] w-24 h-24 bg-dot-pattern opacity-80 pointer-events-none" />
        <div className="absolute bottom-[14%] right-[32%] w-28 h-28 bg-dot-pattern opacity-70 pointer-events-none" />
        <div className="absolute top-[48%] left-[43%] w-20 h-20 bg-dot-pattern opacity-60 pointer-events-none" />

        {/* Desktop Image */}
        <div className="absolute inset-x-0 top-16 bottom-0 z-0 pointer-events-none select-none overflow-hidden">
          <img
            src="/src/assets/images/hero_design_mock.png"
            alt="User supplied design mockup background"
            className="w-full h-full object-fill object-top opacity-100"
            onError={(e) => {
              const img = e.currentTarget;
              if (img.src.endsWith('.png')) {
                img.src = '/src/assets/images/hero_design_mock.jpg';
              } else if (img.src.endsWith('.jpg')) {
                img.src = '/src/assets/images/hero_design_mock.jpeg';
              } else {
                img.style.display = 'none';
              }
            }}
          />
        </div>

        {/* Desktop Overlays with Interactive Cards */}
        <div className="absolute inset-0 z-10 w-full h-full">
          {/* Dynamic Interactive Event Card */}
          <div 
            className="absolute"
            style={{
              left: "8.33%",
              top: "69.0%",
              width: "37.5%",
              height: "19.5%"
            }}
          >
            <div className="w-full h-full flex items-center pr-4">
              <EventCard event={event} compact />
            </div>
          </div>

          {/* Dynamic CTA button */}
          <div 
            className="absolute"
            style={{
              left: "8.33%",
              top: "89.5%",
              width: "23.5%",
              height: "7.5%"
            }}
          >
            <div className="w-full h-full flex items-center">
              <CTAButton
                label="参加申し込みはこちら"
                onClick={onCtaClick}
                className="w-full h-full !py-0 !px-5 flex items-center justify-between text-[13px] xl:text-[14px]"
              />
            </div>
          </div>
        </div>
      </section>

      {/* =========================================================================
          2. MOBILE HERO SECTION (lg:hidden) - STACKED & NON-OVERLAPPING
          ========================================================================= */}
      <section className="block lg:hidden relative w-full bg-[#FAF9F5] overflow-hidden pt-[65px] pb-16 z-10">
        {/* Background blobs for mobile */}
        <div className="absolute top-[-10%] left-[-15%] w-[50%] h-[40%] rounded-full bg-[#9C7CBF]/15 blur-[80px] pointer-events-none" />
        <div className="absolute top-[25%] right-[-10%] w-[300px] h-[300px] rounded-full bg-[#FFDEC3]/40 blur-[70px] pointer-events-none" />
        <div className="absolute bottom-[-5%] left-[-5%] w-[350px] h-[350px] rounded-full bg-[#CBDCF5]/30 blur-[95px] pointer-events-none" />
        <div className="absolute top-[10%] left-[5%] w-16 h-16 bg-dot-pattern opacity-50 pointer-events-none" />
        <div className="absolute bottom-[20%] right-[5%] w-20 h-20 bg-dot-pattern opacity-40 pointer-events-none" />

        {/* Mobile Mockup Design Image (Full screen width, edge-to-edge, beautifully aligned below header) */}
        <div className="w-full select-none pointer-events-none mb-8">
          <img
            src="/src/assets/images/hero_design_mock_mobile.png"
            alt="Nuance Lounge Concept"
            className="w-full h-auto block"
            onError={(e) => {
              const img = e.currentTarget;
              if (img.src.endsWith('.png')) {
                img.src = '/src/assets/images/hero_design_mock_mobile.jpg';
              } else if (img.src.endsWith('.jpg')) {
                img.src = '/src/assets/images/hero_design_mock_mobile.jpeg';
              }
            }}
          />
        </div>

        <div className="max-w-[540px] mx-auto px-4 md:px-8 flex flex-col gap-6 relative z-10">
          {/* Event Details Card (Middle of the Stack) */}
          <div className="w-full">
            <EventCard event={event} />
          </div>

          {/* Main Call To Action Button (Bottom of the Stack) */}
          <div className="w-full">
            <CTAButton
              label="参加申し込みはこちら"
              onClick={onCtaClick}
              className="w-full !py-4 text-[15px] tracking-widest shadow-lg"
            />
          </div>
        </div>
      </section>
    </>
  );
}
