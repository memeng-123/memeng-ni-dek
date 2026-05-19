import { motion } from 'framer-motion';
import { ArrowDown, Github, Youtube } from 'lucide-react';
import { Button } from '@/components/ui/button';
import ThreeScene from './ThreeScene';

export default function HeroSection() {
  const scrollToAbout = () => {
    const element = document.querySelector('#about');
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden bg-gradient-hero">
      <ThreeScene />

      <div className="container mx-auto px-4 relative z-10">
        <div className="grid md:grid-cols-2 gap-10 items-center">

          {/* ================= FOTO PROFILE ================= */}
          <motion.div
            initial={{ opacity: 0, x: -80 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            className="flex justify-center relative"
          >
            {/* BLUR BACKGROUND EFFECT */}
            <div className="absolute w-72 h-72 bg-primary/30 rounded-full blur-3xl animate-pulse"></div>

            {/* FOTO */}
            <motion.img
              src="/fotomemeng.jpg"
              alt="Profile"
              className="w-64 h-64 object-cover rounded-full border-4 border-white shadow-2xl relative z-10"
              whileHover={{ scale: 1.05 }}
              animate={{ y: [0, -10, 0] }}
              transition={{ duration: 4, repeat: Infinity }}
            />
          </motion.div>

          {/* ================= TEXT ================= */}
          <div className="text-center md:text-left">

            <motion.span
              className="inline-block px-4 py-2 rounded-full glass text-sm font-medium text-primary mb-6"
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: 0.2 }}
            >
              🚀 Welcome To My Portfolio
            </motion.span>

            <motion.h1
              initial={{ opacity: 0, y: 40 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3 }}
              className="text-4xl md:text-6xl font-bold mb-6 leading-tight"
            >
              Hello, I'm <br />
              <span className="bg-gradient-to-r from-primary to-purple-400 text-transparent bg-clip-text">
                Cut Sultan Varel
              </span>
            </motion.h1>

            <motion.p
              initial={{ opacity: 0, y: 40 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.5 }}
              className="text-lg text-muted-foreground mb-8 max-w-lg"
            >
              Seorang pelajar MAN 1 Banda Aceh 
              yang memiliki minat besar dalam dunia teknologi, 
              khususnya dalam bidang pemrograman dan pengembangan web. 
            </motion.p>
            {/* BUTTON */}
            <motion.div
              initial={{ opacity: 0, y: 40 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.7 }}
              className="flex flex-col sm:flex-row gap-4 mb-8"
            >
              <Button
                size="lg"
                className="rounded-full px-8 shadow-glow hover:scale-105 transition"
                onClick={() => {
                  const el = document.querySelector('#projects');
                  if (el) el.scrollIntoView({ behavior: 'smooth' });
                }}
              >
                🚀 Lihat Project
              </Button>

              <Button
                variant="outline"
                size="lg"
                className="rounded-full px-8 hover:scale-105 transition"
                onClick={() => {
                  const el = document.querySelector('#contact');
                  if (el) el.scrollIntoView({ behavior: 'smooth' });
                }}
              >
                📩 Hubungi Saya
              </Button>
            </motion.div>

            {/* SOCIAL */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.9 }}
              className="flex gap-4 justify-center md:justify-start"
            >
              <a
                href="https://github.com/memeng-123/memeng-ni-dek.git"
                target="_blank"
                className="p-3 rounded-full glass hover:shadow-glow hover:-translate-y-1 transition"
              >
                <Github />
              </a>

              <a
                href="https://www.youtube.com/"
                target="_blank"
                className="p-3 rounded-full glass hover:shadow-glow hover:-translate-y-1 transition"
              >
                <Youtube />
              </a>
            </motion.div>
          </div>
        </div>
      </div>

      {/* SCROLL */}
      <motion.button
        onClick={scrollToAbout}
        className="absolute bottom-8 left-1/2 -translate-x-1/2 p-3 rounded-full glass animate-bounce"
        whileHover={{ scale: 1.2 }}
      >
        <ArrowDown className="h-5 w-5 text-primary" />
      </motion.button>
    </section>
  );
}