import { motion } from "framer-motion";
import AnimatedSection from "./AnimatedSection";
import { Link } from "react-router-dom";
import { Truck, Tractor, Bike, Car, Package, Wrench } from "lucide-react";
import tubeOtr from "@/assets/tube-otr-dark.jpg";
import tubeTractor from "@/assets/tube-tractor-dark.jpg";
import tubeTruck from "@/assets/tube-truck-dark.jpg";
import tubePassenger from "@/assets/tube-passenger-dark.jpg";
import tubeMotorcycle from "@/assets/tube-motorcycle-dark.jpg";
import tubeErickshaw from "@/assets/tube-erickshaw-dark.jpg";
import tubeScooter from "@/assets/tube-scooter-dark.jpg";
import curingBags from "@/assets/curing-bags-dark.jpg";
import flaps from "@/assets/flaps-dark.jpg";
import rubberCompound from "@/assets/rubber-compound-dark.jpg";

const products = [
  { icon: Truck, name: "OTR Tubes", desc: "Heavy Truck & Off-the-Road tubes ensuring stability and robustness.", path: "/products/otr-tubes", image: tubeErickshaw },
  { icon: Tractor, name: "Tractor Tubes", desc: "Agricultural vehicle tubes made with utmost precision and care.", path: "/products/tractor-rear", image: tubeErickshaw },
  { icon: Truck, name: "Truck / Bus Tubes", desc: "Wide range of truck tubes with dimensional precision and resilience.", path: "/products/truck-bus", image: tubeErickshaw },
  { icon: Car, name: "Passenger Radial", desc: "Dimensionally efficient and functionally effective tubes.", path: "/products/passenger", image: tubeErickshaw },
  { icon: Bike, name: "Motor Cycle Tubes", desc: "Motor Cycle tubes for reliable performance.", path: "/products/motorcycle", image: tubeMotorcycle },
  { icon: Bike, name: "Scooter Tubes", desc: "Scooter tubes built for daily commute reliability.", path: "/products/scooter", image: tubeScooter },
  { icon: Car, name: "E-Rickshaw Tubes", desc: "E-Rickshaw tubes for electric three-wheelers.", path: "/products/erickshaw", image: tubeErickshaw },
  { icon: Wrench, name: "Curing Bags", desc: "Butyl rubber curing bags for tyre retreading with long life.", path: "/products/curing-bags", image: curingBags },
  { icon: Package, name: "Flaps", desc: "Highly durable tyre flaps that bear extreme conditions.", path: "/products/flaps", image: flaps },
  { icon: Package, name: "Rubber Compound", desc: "High quality compounds meeting international standards.", path: "/products/rubber-compound", image: rubberCompound },
];

const ProductsSection = () => (
  <section id="products" className="section-padding relative overflow-hidden">
    <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-transparent via-crimson/30 to-transparent" />
    
    <div className="container-custom">
      <AnimatedSection className="text-center mb-12">
        <span className="text-gradient-crimson text-sm font-semibold uppercase tracking-widest">Our Products</span>
        <h2 className="font-heading text-3xl md:text-4xl font-bold mt-3 text-foreground">
          Premium Quality <span className="text-gradient-red">Butyl Tubes</span>
        </h2>
        <p className="text-muted-foreground mt-3 max-w-2xl mx-auto">
          From heavy-duty trucks to two-wheelers, we provide premium butyl tubes, curing bags, flaps, and rubber compounds.
        </p>
      </AnimatedSection>

      <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
        {products.map((product, i) => (
          <motion.div
            key={product.name}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: i * 0.06 }}
          >
            <Link to={product.path} className="block glass-card rounded-xl overflow-hidden h-full group transition-all duration-500 hover:-translate-y-3 hover:shadow-[0_20px_60px_-15px_hsla(350,72%,45%,0.4)] hover:border-crimson/40">
              <div className="h-48 overflow-hidden">
                <img src={product.image} alt={product.name} className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500" loading="lazy" width={800} height={800} />
              </div>
              <div className="p-5">
                <div className="flex items-center gap-2 mb-2">
                  <product.icon className="w-4 h-4 text-crimson" />
                  <h3 className="font-heading text-base font-semibold text-foreground group-hover:text-crimson transition-colors">{product.name}</h3>
                </div>
                <p className="text-sm text-muted-foreground">{product.desc}</p>
              </div>
            </Link>
          </motion.div>
        ))}
      </div>

      {/* Moving vehicle animation at bottom */}
      <div className="mt-16 relative h-12 overflow-hidden">
        <div className="absolute bottom-0 left-0 right-0 h-px bg-crimson/20" />
        <motion.div
          animate={{ x: ["calc(-100px)", "calc(100vw + 100px)"] }}
          transition={{ duration: 8, repeat: Infinity, ease: "linear" }}
          className="absolute bottom-1"
        >
          <Truck className="w-10 h-10 text-crimson/40" />
        </motion.div>
        <motion.div
          animate={{ x: ["calc(-200px)", "calc(100vw + 200px)"] }}
          transition={{ duration: 12, repeat: Infinity, ease: "linear", delay: 3 }}
          className="absolute bottom-1"
        >
          <Tractor className="w-8 h-8 text-crimson/30" />
        </motion.div>
      </div>
    </div>
  </section>
);

export default ProductsSection;
