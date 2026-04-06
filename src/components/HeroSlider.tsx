import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ChevronLeft, ChevronRight } from "lucide-react";
import heroTubesBanner from "@/assets/hero-tubes-banner.jpg";
import heroSlideOtr from "@/assets/hero-slide-otr.jpg";
import heroSlideCuring from "@/assets/hero-slide-curing.jpg";
import heroSlideFlaps from "@/assets/hero-slide-flaps.jpg";
import heroSlideRubber from "@/assets/hero-slide-rubber.jpg";
import FloatingTubes from "./FloatingTubes";

const slides = [
  {
    image: heroTubesBanner,
    title: "Premium Butyl Tubes",
    subtitle: "Safety Even During Longer Distance",
    description: "Superior air retention that ensures longer life with heavy loads on any terrain.",
  },
  {
    image: heroSlideOtr,
    title: "Built for Heavy Loads",
    subtitle: "With Heavy Loads On Any Terrain",
    description: "OTR Tubes ensuring stability, resilience, robustness and easy maintenance for all vehicles.",
  },
  {
    image: heroSlideCuring,
    title: "Curing Bags",
    subtitle: "For Tyre Retreading Excellence",
    description: "High-quality butyl rubber curing bags ensuring long life and superior performance.",
  },
  {
    image: heroSlideFlaps,
    title: "Premium Tyre Flaps",
    subtitle: "Protection Against Extreme Conditions",
    description: "Highly durable tyre flaps that bear extreme road and weather conditions.",
  },
  {
    image: heroSlideRubber,
    title: "Rubber Compound",
    subtitle: "Meeting International Standards",
    description: "High quality rubber compounds produced from natural rubber, butyl rubber, and EPDM rubber.",
  },
];

const HeroSlider = () => {
  const [current, setCurrent] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => setCurrent((p) => (p + 1) % slides.length), 5000);
    return () => clearInterval(timer);
  }, []);

  const slide = slides[current];

  return (
    <section className="relative h-screen min-h-[600px] overflow-hidden">
      <FloatingTubes />
      
      <AnimatePresence mode="wait">
        <motion.div
          key={current}
          initial={{ opacity: 0, scale: 1.1 }}
          animate={{ opacity: 1, scale: 1 }}
          exit={{ opacity: 0, scale: 0.95 }}
          transition={{ duration: 0.8 }}
          className="absolute inset-0"
        >
          <img src={slide.image} alt={slide.title} className="w-full h-full object-cover" width={1920} height={1080} />
          <div className="absolute inset-0 bg-gradient-to-r from-background/95 via-background/70 to-background/30" />
        </motion.div>
      </AnimatePresence>

      <div className="relative z-10 h-full flex items-center">
        <div className="container-custom px-4 lg:px-8">
          <AnimatePresence mode="wait">
            <motion.div
              key={current}
              initial={{ opacity: 0, y: 40 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -30 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="max-w-2xl"
            >
              <motion.span
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: 0.3 }}
                className="text-gradient-crimson text-sm font-semibold uppercase tracking-widest"
              >
                Since 1985
              </motion.span>
              <h1 className="font-heading text-4xl md:text-6xl lg:text-7xl font-bold mt-4 leading-tight text-foreground">
                {slide.title}
              </h1>
              <p className="text-xl md:text-2xl text-crimson mt-3 font-heading italic">
                {slide.subtitle}
              </p>
              <p className="text-muted-foreground mt-4 text-lg max-w-lg">
                {slide.description}
              </p>
              <div className="flex gap-4 mt-8">
                <a href="/products" className="btn-primary">Our Products</a>
                <a href="/enquiry" className="btn-outline-red">Get a Quote</a>
              </div>
            </motion.div>
          </AnimatePresence>
        </div>
      </div>

      {/* Navigation */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 z-20 flex items-center gap-4">
        <button onClick={() => setCurrent((p) => (p - 1 + slides.length) % slides.length)} className="w-10 h-10 rounded-full glass-card flex items-center justify-center text-foreground hover:text-crimson transition-colors">
          <ChevronLeft className="w-5 h-5" />
        </button>
        <div className="flex gap-2">
          {slides.map((_, i) => (
            <button
              key={i}
              onClick={() => setCurrent(i)}
              className={`h-2 rounded-full transition-all duration-300 ${i === current ? "w-8 bg-crimson" : "w-2 bg-foreground/30"}`}
            />
          ))}
        </div>
        <button onClick={() => setCurrent((p) => (p + 1) % slides.length)} className="w-10 h-10 rounded-full glass-card flex items-center justify-center text-foreground hover:text-crimson transition-colors">
          <ChevronRight className="w-5 h-5" />
        </button>
      </div>

      {/* Rolling wheels at bottom */}
      <div className="absolute bottom-0 left-0 right-0 h-16 overflow-hidden z-10">
        <div className="flex animate-scroll" style={{ width: "200%" }}>
          {Array.from({ length: 14 }).map((_, i) => (
            <div key={i} className="w-16 h-16 mx-4 rounded-full border-4 border-crimson/20 animate-spin-slow flex-shrink-0 flex items-center justify-center">
              <div className="w-3 h-3 rounded-full bg-crimson/30" />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default HeroSlider;
