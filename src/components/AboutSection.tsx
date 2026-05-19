import { motion, AnimatePresence } from 'framer-motion';
import { useState, useEffect } from 'react';
import { ChevronLeft, ChevronRight } from 'lucide-react';

export default function AboutSection() {
  const [index, setIndex] = useState(0);

  const slides = [
    {
      title: "Siapa Saya",
      content:
        "Saya adalah seorang pelajar dari MAN 1 Banda Aceh yang memiliki minat besar dalam dunia teknologi dan pengembangan web modern.",
      emoji: "👨‍💻",
      quote: "Bukan tentang seberapa cepat kamu mulai, tapi seberapa konsisten kamu bertahan.",
      sub: "Semua orang bisa mulai, tapi tidak semua bisa bertahan di prosesnya.",
      birth: "1 September 2010",
      place: "Banda Aceh"
    },
    {
      title: "Perjalanan",
      content:
        "Saya mulai tertarik dengan coding sejak dini dan terus belajar membuat website serta mengeksplorasi teknologi baru.",
      emoji: "🚀",
      quote: "Progress kecil yang dilakukan setiap hari akan mengalahkan bakat tanpa usaha.",
      sub: "Yang membedakan hanyalah siapa yang tidak berhenti."
    },
    {
      title: "Passion",
      content:
        "Selain coding, saya juga memiliki passion besar di dunia sepak bola dan bercita-cita menjadi atlet profesional.",
      emoji: "⚽",
      quote: "Jika kamu mencintai apa yang kamu lakukan, lelah pun terasa seperti bagian dari mimpi.",
      sub: "Passion bukan hanya hobi, tapi arah hidup."
    },
    {
      title: "Goals",
      content:
        "Saya ingin menjadi developer yang hebat dan juga sukses di bidang yang saya cintai.",
      emoji: "🔥",
      quote: "Masa depan tidak menunggu — ia diciptakan oleh mereka yang berani melangkah.",
      sub: "Dan saya memilih untuk menjadi salah satunya."
    },
  ];

  // AUTO SLIDE
  useEffect(() => {
    const interval = setInterval(() => {
      setIndex((prev) => (prev + 1) % slides.length);
    }, 5000);
    return () => clearInterval(interval);
  }, []);

  const next = () => setIndex((prev) => (prev + 1) % slides.length);
  const prev = () => setIndex((prev) => (prev - 1 + slides.length) % slides.length);

  return (
    <section id="about" className="py-20 md:py-32 relative overflow-hidden">

      {/* BACKGROUND */}
      <div className="absolute w-[400px] h-[400px] bg-blue-400/20 blur-[120px] top-[-100px] left-[-100px]" />
      <div className="absolute w-[400px] h-[400px] bg-cyan-300/20 blur-[120px] bottom-[-100px] right-[-100px]" />

      <div className="container mx-auto px-4 relative z-10">

        {/* TITLE */}
        <div className="text-center mb-16">
          <span className="text-primary font-medium mb-2 block">
            Tentang Saya
          </span>
          <h2 className="text-3xl md:text-5xl font-bold mb-4">
            My Story
          </h2>
          <div className="w-20 h-1 bg-primary mx-auto rounded-full" />
        </div>

        {/* GRID */}
        <div className="grid md:grid-cols-2 gap-12 items-center max-w-6xl mx-auto">

          {/* ================= MOTIVASI ================= */}
          <AnimatePresence mode="wait">
            <motion.div
              key={index}
              initial={{ opacity: 0, x: -60 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: 60 }}
              transition={{ duration: 0.6 }}
              className="text-center md:text-left"
            >
              <h3 className="text-3xl md:text-5xl font-bold leading-tight mb-4">
                <span className="text-gradient">
                  {slides[index].quote}
                </span>
              </h3>

              <p className="text-muted-foreground text-lg max-w-md">
                {slides[index].sub}
              </p>

              <div className="mt-6 w-20 h-1 bg-gradient-to-r from-blue-400 to-cyan-300 rounded-full"></div>
            </motion.div>
          </AnimatePresence>

          {/* ================= CARD ================= */}
          <div className="relative max-w-md mx-auto w-full">

            <AnimatePresence mode="wait">
              <motion.div
                key={index}
                initial={{ opacity: 0, scale: 0.9, y: 50 }}
                animate={{ opacity: 1, scale: 1, y: 0 }}
                exit={{ opacity: 0, scale: 0.9, y: -50 }}
                transition={{ duration: 0.5 }}
                className="p-8 rounded-2xl glass text-center shadow-card backdrop-blur-xl border border-white/20"
              >
                {/* EMOJI */}
                <div className="text-6xl mb-4">{slides[index].emoji}</div>

                {/* TITLE */}
                <h3 className="text-2xl font-bold mb-1 text-gradient">
                  {slides[index].title}
                </h3>

                {/* BIRTH INFO */}
                {slides[index].birth && (
                  <div className="flex flex-col items-center mb-3 text-sm">
                    <span className="px-3 py-1 rounded-full bg-blue-500/20 text-blue-300">
                      🎂 {slides[index].birth}
                    </span>
                    <span className="text-muted-foreground text-xs mt-1">
                      📍 {slides[index].place}
                    </span>
                  </div>
                )}

                {/* CONTENT */}
                <p className="text-muted-foreground leading-relaxed">
                  {slides[index].content}
                </p>
              </motion.div>
            </AnimatePresence>

            {/* BUTTON */}
            <button
              onClick={prev}
              className="absolute left-[-50px] top-1/2 -translate-y-1/2 p-3 rounded-full glass hover:scale-110 transition"
            >
              <ChevronLeft />
            </button>

            <button
              onClick={next}
              className="absolute right-[-50px] top-1/2 -translate-y-1/2 p-3 rounded-full glass hover:scale-110 transition"
            >
              <ChevronRight />
            </button>

            {/* DOTS */}
            <div className="flex justify-center gap-3 mt-6">
              {slides.map((_, i) => (
                <div
                  key={i}
                  className={`h-3 w-3 rounded-full transition-all ${
                    i === index ? 'bg-primary w-6' : 'bg-gray-400'
                  }`}
                />
              ))}
            </div>

          </div>
        </div>
      </div>
    </section>
  );
}