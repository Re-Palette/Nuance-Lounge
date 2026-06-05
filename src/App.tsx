import React, { useState } from "react";
import Header from "./components/Header";
import Hero from "./components/Hero";
import LoadingScreen from "./components/LoadingScreen";
import { heroData } from "./data/heroData";
import { Sparkles, MapPin, Map, Clock, Heart, Users, MessageSquare, ChevronDown, Info, Instagram } from "lucide-react";
import { motion, AnimatePresence } from "motion/react";

export default function App() {
  const [isLoading, setIsLoading] = useState(true);
  const [openFaqIndex, setOpenFaqIndex] = useState<number | null>(null);

  const handleCtaClick = () => {
    window.open(
      "https://docs.google.com/forms/d/e/1FAIpQLSfIRfsYNDZWZ3RIoaUM8oHbYL0Ftg0ypOKWi2KNrH7ykpRcxg/viewform?usp=header",
      "_blank",
      "noopener,noreferrer"
    );
  };

  const handleScrollToElement = (id: string) => {
    const el = document.getElementById(id);
    if (el) {
      const headerOffset = 80;
      const elementPosition = el.getBoundingClientRect().top;
      const offsetPosition = elementPosition + window.pageYOffset - headerOffset;
      window.scrollTo({
        top: offsetPosition,
        behavior: "smooth"
      });
    }
  };

  const bentoFeatures = [
    {
      icon: <MessageSquare className="w-5 h-5 text-[#9C7CBF]" />,
      title: "1. 悩みを気軽にト一ク",
      desc: "「何から始めればいい？」「自分に合うメイクって？」そんなちょっとした疑問や美容の悩みも、同じ学生仲間だから安心してオープンに話せます。",
      bg: "bg-[#F7F4FB]"
    },
    {
      icon: <Heart className="w-5 h-5 text-[#E79E3C]" />,
      title: "2. お気に入りシェア",
      desc: "大好きなコスメ、気になっているスキンケア商品、参考になった美容系SNSアカウントなど、みんなの『推しアイテム』を持ち寄って楽しく共有しましょう。",
      bg: "bg-[#FCF9F3]"
    },
    {
      icon: <Users className="w-5 h-5 text-[#88BBA4]" />,
      title: "3. 新しい自分と出会う",
      desc: "多様なバックグラウンドを持つ参加者同士、新たな情報やアイデアを得ることで、自分の美容スタイルをもっと自由に、もっと自分らしく発掘できます。",
      bg: "bg-[#F3FAF7]"
    }
  ];

  const timetables = [
    { time: "15:15〜", action: "受付スタート" },
    { time: "15:50〜", action: "オープニング＆自己紹介" },
    { time: "16:10〜", action: "美容学生とのテーマトーク" },
    { time: "17:20〜", action: "自由交流＆フォトタイム" },
    { time: "18:10〜", action: "アンケート＆クローズ（18:30終了）" }
  ];

  const faqs = [
    {
      q: "美容についての知識が全くない状態でも参加できますか？",
      a: "もちろん大歓迎です！「メイクを始めてみたい」「いろんな人の話を聞いてみたい」という初心者の方から、「美容が大好きで情報交換をしたい」方まで、それぞれの興味レベルに合わせて楽しめる居心地の良いカジュアルな空間ですので、安心してお気軽にご参加ください。"
    },
    {
      q: "当日の持ち物は何か必要ですか？",
      a: "特に必須な持ち物はございません。もし普段使っている「お気に入りコスメ」や「気になるスキンケアアイテム」がございましたら、ご紹介・シェア用としてお持ちいただくとより楽しく会話が盛り上がります！"
    },
    {
      q: "参加費はかかりますか？また事前に何か支払う必要はありますか？",
      a: "高校生以下・美容学生は500円、大学生以上は1,000円の参加費を当日受付にてお支払いいただきます。お配りするお菓子やドリンク代はすべてこの参加費に含まれております。"
    },
    {
      q: "服装に指定はありますか？",
      a: "ドレスコードはございません。ご自身が最も心地よく、自分らしさを表現できる私服や通学時の服装でお気軽にお越しください。"
    }
  ];

  return (
    <div className="min-h-screen bg-[#FAF9F5] text-zinc-800 font-sans selection:bg-[#E5D7FA] selection:text-[#9C7CBF]">
      
      {/* Elegantly styled Loading Screen */}
      <AnimatePresence mode="wait">
        {isLoading && (
          <LoadingScreen onComplete={() => setIsLoading(false)} />
        )}
      </AnimatePresence>
      
      {/* 1. Header (scrolling dynamics integrated) */}
      <Header
        onCtaClick={handleCtaClick}
        onScrollToElement={handleScrollToElement}
      />

      {/* 2. Brand Hero Section */}
      <main>
        <Hero onCtaClick={handleCtaClick} />

        {/* 3. About Section (イベントについて) */}
        <section id="about" className="py-20 bg-white/70 relative z-20 border-t border-zinc-100">
          <div className="max-w-7xl mx-auto px-6 md:px-12">
            
            {/* Header section */}
            <div className="flex flex-col items-center text-center mb-16">
              <span className="text-[12px] md:text-[13px] font-bold tracking-[0.3em] text-[#9C7CBF] uppercase mb-3 block">
                ABOUT THE LOUNGE
              </span>
              <h2 className="text-[16px] font-serif font-semibold tracking-tight text-zinc-900 leading-tight">
                美容の「もっとこうなりたい」をカタチに。
              </h2>
              <div className="w-12 h-[2px] bg-[#9C7CBF] mt-5 mb-6" />
              <p className="text-[14px] md:text-[15px] leading-relaxed text-zinc-600 max-w-2xl font-light">
                美容への興味は人それぞれ。メイク、スキンケア、メンズ美容。
                <br className="hidden md:inline" />
                一人で悩むのではなく、同じ世代の仲間たちと「ちょっとしたこだわり」を持ち寄り、
                新しいアイデアや自分らしさを見つけるための、全く緊張しないカジュアルな交流空間です。
              </p>
            </div>

            {/* Bento Grid */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 lg:gap-8">
              {bentoFeatures.map((feature, i) => (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, y: 15 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, margin: "-100px" }}
                  transition={{ duration: 0.6, delay: i * 0.1 }}
                  className={`${feature.bg} p-8 rounded-[24px] border border-zinc-150/40 shadow-sm flex flex-col justify-between hover:shadow-md transition-shadow duration-300 relative overflow-hidden group`}
                >
                  <div className="absolute top-0 right-0 w-16 h-16 bg-white/50 rounded-bl-[20px] flex items-center justify-center transition-transform group-hover:scale-105">
                    {feature.icon}
                  </div>
                  <div>
                    <h3 className="text-[17px] font-bold text-zinc-800 tracking-wider mb-4">
                      {feature.title}
                    </h3>
                    <p className="text-[13.5px] leading-relaxed text-zinc-650 font-light">
                      {feature.desc}
                    </p>
                  </div>
                </motion.div>
              ))}
            </div>

          </div>
        </section>

        {/* 4. Event Summary / Timeline Section (開催概要) */}
        <section id="summary" className="py-20 relative z-20 bg-[#FAF9F5] border-t border-zinc-150/50">
          
          {/* Accent decoration in visual background */}
          <div className="absolute bottom-[10%] left-[-5%] w-[320px] h-[320px] bg-[#F1EEFC] rounded-full blur-[90px] opacity-70 pointer-events-none" />
          
          <div className="max-w-7xl mx-auto px-6 md:px-12">
            
            {/* Header and section titles */}
            <div className="flex flex-col items-center text-center mb-16">
              <span className="text-[12px] md:text-[13px] font-bold tracking-[0.3em] text-[#9C7CBF] uppercase mb-3 block">
                OUTLINE & TIME
              </span>
              <h2 className="text-[22px] font-serif font-semibold tracking-tight text-zinc-900 leading-tight">
                開催概要 & タイムスケジュール
              </h2>
              <div className="w-12 h-[2px] bg-[#9C7CBF] mt-5" />
            </div>

            {/* Split row: Information summary & dynamic timetable list */}
            <div className="grid grid-cols-1 lg:grid-cols-[1.1fr_1.3fr] gap-12 lg:gap-16 items-start">
              
              {/* Left detail card block */}
              <div className="flex flex-col gap-8">
                
                <div className="bg-white p-8 rounded-[24px] shadow-[0_8px_30px_rgba(0,0,0,0.02)] border border-zinc-100 flex flex-col gap-6">
                  
                  <h3 className="text-[18px] font-bold text-zinc-800 tracking-wider flex items-center gap-2 mb-2 pb-3 border-b border-zinc-150/40">
                    <Info className="w-5 h-5 text-[#9C7CBF]" />
                    イベント詳細
                  </h3>

                  {/* Fact rows */}
                  {[
                    { label: "日時", text: `${heroData.event.date} (${heroData.event.dayOfWeek})\n${heroData.event.time}` },
                    { label: "会場", text: `${heroData.event.venueName}` },
                    { label: "住所", text: `${heroData.event.venueAddress}` },
                    { label: "対象者", text: "美容に関心がある、またはこれから始めたい大学生・専門学生・高校生" },
                    { label: "参加費", text: "高校生以下・美容学生 500円 / 大学生以上 1,000円 (事前申し込み制、お菓子・ドリンク付き！)" },
                    {
                      label: "Contact",
                      text: "Instagram: @repalette_official\n(DMにてお気軽にお問い合わせください)",
                      link: "https://www.instagram.com/repalette_official/?hl=ja"
                    }
                  ].map((fact, idx) => (
                    <div key={idx} className="grid grid-cols-[80px_1fr] md:grid-cols-[100px_1fr] gap-4 items-baseline">
                      <span className="text-[12.5px] font-bold text-zinc-500 tracking-widest">
                        {fact.label}
                      </span>
                      {fact.link ? (
                        <a
                          href={fact.link}
                          target="_blank"
                          rel="noreferrer"
                          className="text-[14px] text-[#9C7CBF] hover:text-[#7FA1E5] font-semibold underline underline-offset-4 leading-relaxed whitespace-pre-line hover:opacity-85 transition-opacity"
                        >
                          {fact.text}
                        </a>
                      ) : (
                        <span className={`${idx === 1 ? "text-[12px]" : "text-[14px]"} text-zinc-800 font-medium leading-relaxed whitespace-pre-line`}>
                          {fact.text}
                        </span>
                      )}
                    </div>
                  ))}

                </div>

                {/* Stylish Map Container Representation with real embedded Google Map */}
                <div className="bg-white p-4 rounded-[24px] shadow-[0_8px_30px_rgba(0,0,0,0.02)] border border-zinc-100 flex flex-col gap-3">
                  
                  {/* Embedded Google Map */}
                  <div className="w-full h-56 bg-zinc-50 rounded-xl overflow-hidden relative border border-zinc-100/80 shadow-[inset_0_2px_4px_rgba(0,0,0,0.02)]">
                    <iframe
                      src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3241.2808002194565!2d139.71145057578727!3d35.67008727259081!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x60188dd58df071c5%3A0x27f5b0b8a414593c!2z44ixVE9NQVA!5e0!3m2!1sja!2sjp!4v1780624723639!5m2!1sja!2sjp"
                      width="100%"
                      height="100%"
                      style={{ border: 0 }}
                      allowFullScreen={true}
                      loading="lazy"
                      referrerPolicy="no-referrer-when-downgrade"
                      title="Google Map - 株式会社TOMAP オフィス"
                    ></iframe>
                  </div>

                  {/* Outer map directions navigation button */}
                  <a
                    href="https://maps.google.com/?q=東京都渋谷区神宮前3丁目1-25+3F"
                    target="_blank"
                    rel="noreferrer"
                    className="w-full py-3.5 rounded-xl border border-zinc-200 text-[#9C7CBF] bg-[#9C7CBF]/5 hover:bg-[#9C7CBF]/10 font-bold text-[13.5px] tracking-widest transition-all text-center flex items-center justify-center gap-2 cursor-pointer"
                  >
                    <Map className="w-4 h-4 text-[#9C7CBF]" />
                    Googleマップアプリで確認する
                  </a>
                </div>

              </div>

              {/* Right Timetable Outline */}
              <div className="bg-white p-8 rounded-[24px] shadow-[0_8px_30px_rgba(0,0,0,0.02)] border border-zinc-100">
                
                <h3 className="text-[17px] font-bold text-zinc-800 tracking-wider flex items-center gap-2 mb-8 pb-3 border-b border-zinc-150/40">
                  <Clock className="w-5 h-5 text-[#9C7CBF]" />
                  当日のタイムスケジュール
                </h3>

                {/* Timeline flow */}
                <div className="flex flex-col gap-6 relative pl-3 border-l-2 border-[#E5D7FA]">
                  {timetables.map((item, index) => (
                    <div key={index} className="relative group">
                      
                      {/* Timeline dot anchor badge */}
                      <div className="w-3.5 h-3.5 rounded-full bg-white border-2 border-[#9C7CBF] absolute left-[-21px] top-1 group-hover:bg-[#9C7CBF] transition-all bg-white duration-300" />
                      
                      <div className="flex flex-col">
                        <span className="text-[13px] font-bold text-[#9C7CBF] tracking-wide">
                          {item.time}
                        </span>
                        <span className={`${index === 4 ? "text-[13.5px]" : "text-[14.5px]"} font-medium text-zinc-850 mt-1.5 tracking-wider leading-normal`}>
                          {item.action}
                        </span>
                      </div>
                    </div>
                  ))}
                </div>

              </div>

            </div>

          </div>
        </section>

        {/* 5. FAQs Section (よくある質問) */}
        <section id="faq" className="py-20 bg-white relative z-20 border-t border-zinc-150/50">
          <div className="max-w-4xl mx-auto px-6 md:px-12">
            
            {/* Header titles */}
            <div className="flex flex-col items-center text-center mb-16">
              <span className="text-[12px] md:text-[13px] font-bold tracking-[0.3em] text-[#9C7CBF] uppercase mb-3 block">
                FAQ & QUESTIONS
              </span>
              <h2 className="text-[26px] md:text-[34px] font-serif font-semibold tracking-tight text-zinc-900 leading-tight">
                よくあるご質問
              </h2>
              <div className="w-12 h-[2px] bg-[#9C7CBF] mt-5" />
            </div>

            {/* Accordion container */}
            <div className="flex flex-col gap-4">
              {faqs.map((faq, i) => {
                const isOpen = openFaqIndex === i;
                return (
                  <div
                    key={i}
                    className="border border-zinc-150/70 rounded-2xl overflow-hidden transition-all duration-300 hover:border-zinc-300"
                  >
                    <button
                      onClick={() => setOpenFaqIndex(isOpen ? null : i)}
                      className="w-full p-5 flex items-center justify-between text-left cursor-pointer bg-zinc-50/20 hover:bg-zinc-50/50 transition-colors"
                    >
                      <div className="flex items-start gap-3">
                        <span className="text-[#9C7CBF] font-serif font-bold text-[17px] leading-none block pt-0.5 select-none shrink-0">
                          Q
                        </span>
                        <span className="text-[14.5px] md:text-[15.5px] font-bold text-zinc-850 tracking-wider leading-relaxed">
                          {faq.q}
                        </span>
                      </div>
                      <ChevronDown
                        className={`w-5 h-5 text-zinc-400 shrink-0 transition-transform duration-300 ${
                          isOpen ? "transform rotate-180 text-[#9C7CBF]" : ""
                        }`}
                      />
                    </button>

                    <AnimatePresence initial={false}>
                      {isOpen && (
                        <motion.div
                          initial={{ height: 0, opacity: 0 }}
                          animate={{ height: "auto", opacity: 1 }}
                          exit={{ height: 0, opacity: 0 }}
                          transition={{ duration: 0.3 }}
                        >
                          <div className="p-5 border-t border-zinc-150/50 bg-white flex items-start gap-3">
                            <span className="text-[#E79E3C] font-serif font-bold text-[17px] leading-none block select-none shrink-0">
                              A
                            </span>
                            <p className="text-[14px] leading-relaxed text-zinc-600 font-light tracking-wide">
                              {faq.a}
                            </p>
                          </div>
                        </motion.div>
                      )}
                    </AnimatePresence>
                  </div>
                );
              })}
            </div>

          </div>
        </section>

        {/* 6. High-fidelity CTA Card bottom Section */}
        <section className="py-20 bg-gradient-to-tr from-[#9C7CBF]/5 to-[#7FA1E5]/5 relative z-20 border-t border-zinc-100">
          <div className="max-w-4xl mx-auto px-6 text-center flex flex-col items-center">
            <Sparkles className="w-8 h-8 text-[#9C7CBF] mb-4 animate-pulse" />
            <span className="text-[11px] font-bold tracking-[0.4em] text-zinc-500 uppercase mb-2">
              RE-PALETTE SPECIAL LOUNGE
            </span>
            <h2 className="text-[21px] font-serif font-semibold tracking-tight text-zinc-900 leading-tight mb-4">
              美容の話でお菓子を食べながら、
              <br className="md:hidden" />
              少しだけ特別な週末を。
            </h2>
            <p className="text-[13.5px] md:text-[14px] text-zinc-500 max-w-lg font-light leading-relaxed mb-8">
              各回の定員には上限がございます。お席の確保は先着順となりますので、ご興味をお持ちの方はお早めにお申し込みください。
            </p>
            <button
              onClick={handleCtaClick}
              className="px-10 py-4.5 rounded-full text-white font-bold text-[15px] md:text-[16px] tracking-widest bg-gradient-to-r from-[#9C7CBF] via-[#8196DD] to-[#6A97D9] hover:opacity-95 shadow-lg group transition-all duration-300 cursor-pointer"
            >
              参加を申し込む
            </button>
          </div>
        </section>

      </main>

      {/* 7. Footer */}
      <footer className="bg-zinc-900 text-zinc-400 py-12 relative z-20 border-t border-zinc-800">
        <div className="max-w-7xl mx-auto px-6 md:px-12 flex flex-col md:flex-row items-center justify-between gap-6">
          <div className="flex flex-col items-center md:items-start select-none">
            <span className="font-serif text-[18px] font-bold tracking-wider text-white">
              Re-Palette
            </span>
            <span className="text-[10px] text-zinc-500 font-normal tracking-wider mt-1">
              学生の「好き」をカタチにするコミュニティ。
            </span>
            <a
              href="https://www.instagram.com/repalette_official/?hl=ja"
              target="_blank"
              rel="noreferrer"
              className="flex items-center gap-2 text-[12.5px] text-zinc-400 hover:text-[#9C7CBF] transition-colors duration-200 mt-4 font-semibold"
            >
              <Instagram className="w-4.2 h-4.2 text-[#9C7CBF]" />
              <span>@repalette_official</span>
            </a>
          </div>
          <div className="text-[11px] text-zinc-500 tracking-widest text-center md:text-right">
            &copy; 2026 Re-Palette. All Rights Reserved.
          </div>
        </div>
      </footer>

    </div>
  );
}
