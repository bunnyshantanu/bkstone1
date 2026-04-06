import { motion } from "framer-motion";
import AnimatedSection from "./AnimatedSection";
import factoryImg from "@/assets/factory.jpg";
import { Shield, Award, Cog, Users } from "lucide-react";

const stats = [
  { icon: Shield, label: "Years of Excellence", value: "39+" },
  { icon: Award, label: "Quality Certified", value: "ISO" },
  { icon: Cog, label: "Product Range", value: "500+" },
  { icon: Users, label: "Happy Clients", value: "1000+" },
];

const AboutSection = () => (
  <section id="about" className="section-padding bg-secondary/30 relative overflow-hidden">
    <div className="container-custom">
      <div className="grid lg:grid-cols-2 gap-12 items-center">
        <AnimatedSection>
          <span className="text-gradient-crimson text-sm font-semibold uppercase tracking-widest">About Us</span>
          <h2 className="font-heading text-3xl md:text-4xl font-bold mt-3 text-foreground">
            B. K. Rubber Industries <span className="text-gradient-red">Private Limited</span>
          </h2>
          <p className="text-muted-foreground mt-4 leading-relaxed">
            Established in 1985, B.K. Rubber Industries Private Limited is a leading manufacturer of Butyl Tubes for Tyres, 
            Curing Bags for Retreading of Tyres, Flaps and Rubber Compound. We aim to manufacture and distribute best quality products.
          </p>
          <p className="text-muted-foreground mt-3 leading-relaxed">
            Under the insightful guidance of Mr. Jaswant Kumar Goomber and Mr. Bhupendra Kumar Goomber, 
            our company has become a pioneer in the industry, making continuous improvements in the supply of 
            genuine and trusted quality products.
          </p>
       
        </AnimatedSection>

        <AnimatedSection delay={0.2}>
          <div className="relative">
            <img src={factoryImg} alt="BK Rubber Factory" className="rounded-2xl shadow-2xl w-full" loading="lazy" width={1200} height={800} />
            <div className="absolute -bottom-6 -left-6 glass-card rounded-xl p-6">
              <div className="text-3xl font-bold text-gradient-red font-heading">Since 1985</div>
              <div className="text-sm text-muted-foreground">Manufacturing Excellence</div>
            </div>
          </div>
        </AnimatedSection>
      </div>
    </div>
  </section>
);

export default AboutSection;
