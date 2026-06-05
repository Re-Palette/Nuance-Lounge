import { HeroData } from "../types";
import heroImageFile from "../assets/images/nuance_lounge_hero_1780616129536.png";

export const heroData: HeroData = {
  catchphraseLines: [
    "美容が好きな人も、はじめたい人も。",
    "美容でつながる、学生のための交流ラウンジ。"
  ],
  mainTitleSerifLetterColors: [
    { letter: "N", colorClass: "text-[#2C2C2C] font-normal" },
    { letter: "u", colorClass: "text-[#2C2C2C] font-normal" },
    { letter: "a", colorClass: "text-[#E79E3C] font-normal" },
    { letter: "n", colorClass: "text-[#88BBA4] font-normal" },
    { letter: "c", colorClass: "text-[#61AADE] font-normal" },
    { letter: "e", colorClass: "text-[#A989E7] font-normal" }
  ],
  cursiveTitle: "Lounge",
  subtitleJa: "— ニュアンスラウンジ —",
  circularMessage: {
    prefix: "美容の",
    highlights: [
      { text: "悩み", colorClass: "text-[#53B18F]" },
      { text: "も、", colorClass: "text-zinc-600" },
      { text: "興味", colorClass: "text-[#9873E4]" },
      { text: "も、", colorClass: "text-zinc-600" },
      { text: "アイデア", colorClass: "text-[#B39343]" },
      { text: "も。", colorClass: "text-zinc-600" }
    ],
    postfix: "ここでシェアして、もっと自分らしく。"
  },
  heroImage: heroImageFile,
  event: {
    date: "2026. 7.5",
    dayOfWeek: "日",
    time: "15:30 - 18:30",
    venueName: "株式会社TOMAP オフィス",
    venueAddress: "東京都渋谷区神宮前\n3丁目1-25 3F",
    features: ["お菓子・ドリンク付き！"]
  }
};
