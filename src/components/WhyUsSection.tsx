import AnimatedSection from "./AnimatedSection";
import { motion } from "framer-motion";
import { Gauge, Target, Award, ShieldCheck, FlaskConical, Gem } from "lucide-react";

const features = [
  { icon: Gauge, title: "High Mileage & Resistance", desc: "Our tubes deliver exceptional mileage and superior resistance to wear, ensuring long-lasting performance." },
  { icon: Target, title: "High Precision", desc: "Manufactured with precise engineering for dimensional accuracy and consistent quality." },
  { icon: Award, title: "High Quality Rubber", desc: "We use only premium-grade butyl and natural rubber for superior air retention." },
  { icon: ShieldCheck, title: "Certified", desc: "All products meet stringent quality standards and international certifications." },
  { icon: FlaskConical, title: "Rigorously Tested", desc: "Every batch undergoes comprehensive testing for safety and durability." },
  { icon: Gem, title: "Fine Finished Products", desc: "Attention to detail in manufacturing delivers flawless, polished final products." },
];

const WhyUsSection = () => (
  <section className="section-padding bg-secondary/30 relative">
    <div className="container-custom">
      <AnimatedSection className="text-center mb-12">
        <span className="text-gradient-crimson text-sm font-semibold uppercase tracking-widest">Why Choose Us</span>
        <h2 className="font-heading text-3xl md:text-4xl font-bold mt-3 text-foreground">
          What Makes Us <span className="text-gradient-red">Different?</span>
        </h2>
      </AnimatedSection>

      <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8">
        {features.map((f, i) => (
          <motion.div
            key={f.title}
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ delay: i * 0.1 }}
            className="glass-card rounded-xl p-8 text-center group hover:shadow-[0_10px_40px_-10px_hsla(350,72%,45%,0.2)] transition-all duration-300"
          >
            <div className="w-16 h-16 mx-auto rounded-full bg-crimson/10 flex items-center justify-center group-hover:bg-crimson/20 transition-colors">
              <f.icon className="w-8 h-8 text-crimson" />
            </div>
            <h3 className="font-heading text-lg font-semibold mt-5 text-foreground">{f.title}</h3>
            <p className="text-sm text-muted-foreground mt-2">{f.desc}</p>
          </motion.div>
        ))}
      </div>
    </div>
  </section>
);

export default WhyUsSection;
