import HeroSlider from "@/components/HeroSlider";
import AboutSection from "@/components/AboutSection";
import ProductsSection from "@/components/ProductsSection";
import WhyUsSection from "@/components/WhyUsSection";
import StatsCounter from "@/components/StatsCounter";
import AnimatedSection from "@/components/AnimatedSection";
import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";
import { Link } from "react-router-dom";

const Index = () => (
  <div>
    <HeroSlider />
    <AboutSection />
    <StatsCounter />
    <ProductsSection />
    <WhyUsSection />

    {/* CTA Banner */}
    <section className="section-padding relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-r from-crimson/10 via-background to-crimson/5" />
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-[10%] right-[10%] w-40 h-40 rounded-full border-[10px] border-crimson/5 animate-spin-slow" />
        <div className="absolute bottom-[10%] left-[5%] w-28 h-28 rounded-full border-[8px] border-crimson/8 animate-float" />
      </div>
      <div className="container-custom relative z-10">
        <AnimatedSection className="text-center">
          <h2 className="font-heading text-3xl md:text-4xl font-bold text-foreground">
            Safety Even During <span className="text-gradient-red">Longer Distance</span>
          </h2>
          <p className="text-muted-foreground mt-4 max-w-xl mx-auto">
            With heavy loads on any terrain — our premium butyl tubes deliver reliability you can trust.
          </p>
          <div className="flex gap-4 justify-center mt-8">
            <Link to="/products" className="btn-primary inline-flex items-center gap-2">
              View Products <ArrowRight className="w-4 h-4" />
            </Link>
            <Link to="/contact" className="btn-outline-red inline-flex items-center gap-2">
              Contact Us
            </Link>
          </div>
        </AnimatedSection>

        <div className="mt-12 flex justify-center gap-2">
          {Array.from({ length: 20 }).map((_, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.05 }}
              className="w-1.5 h-6 bg-crimson/15 rounded-full"
            />
          ))}
        </div>
      </div>
    </section>
  </div>
);

export default Index;
