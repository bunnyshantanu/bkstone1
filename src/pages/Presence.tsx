import AnimatedSection from "@/components/AnimatedSection";
import PageBreadcrumb from "@/components/PageBreadcrumb";
import companyBanner from "@/assets/company-name-banner.png";
import indiaMap from "@/assets/india-presence-map.png";
import worldMap from "@/assets/world-map.jpg";
import { motion } from "framer-motion";
import { Truck } from "lucide-react";

const Presence = () => (
  <div>
    <PageBreadcrumb
      title="Our Presence"
      subtitle="Delivering premium butyl tubes across India and the world"
      breadcrumbs={[{ label: "Presence" }]}
    />

    <section className="section-padding">
      <div className="container-custom">
        <AnimatedSection className="text-center mb-12">
          <img src={companyBanner} alt="B. K. Rubber Industries Private Limited" className="mx-auto max-w-2xl w-full" loading="lazy" width={800} height={200} />
        </AnimatedSection>

        <AnimatedSection className="mb-16">
          <h2 className="font-heading text-2xl md:text-3xl font-bold text-foreground text-center mb-8">
            Our Presence In <span className="text-gradient-red">India</span>
          </h2>
          <div className="flex justify-center">
            <img src={indiaMap} alt="BK Rubber presence in India" className="max-w-2xl w-full" loading="lazy" width={800} height={1000} />
          </div>
        </AnimatedSection>

        <AnimatedSection>
          <h2 className="font-heading text-2xl md:text-3xl font-bold text-foreground text-center mb-8">
            <span className="text-gradient-red">World</span> Map
          </h2>
          <div className="flex justify-center">
            <img src={worldMap} alt="BK Rubber world presence" className="max-w-4xl w-full rounded-xl shadow-lg" loading="lazy" width={1200} height={600} />
          </div>
        </AnimatedSection>

        {/* Animated delivery truck */}
        <div className="mt-12 relative h-12 overflow-hidden">
          <div className="absolute bottom-0 left-0 right-0 h-px bg-crimson/20" />
          <motion.div
            animate={{ x: ["-50px", "calc(100% + 50px)"] }}
            transition={{ duration: 6, repeat: Infinity, ease: "linear" }}
            className="absolute bottom-1"
          >
            <Truck className="w-10 h-10 text-crimson/50" />
          </motion.div>
        </div>
      </div>
    </section>
  </div>
);

export default Presence;
