import AnimatedSection from "@/components/AnimatedSection";
import PageBreadcrumb from "@/components/PageBreadcrumb";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { Truck, Tractor, Car, Bike, Package, Wrench, CircleDot } from "lucide-react";
import tubeOtr from "@/assets/tube-otr.jpg";
import tubeTractor from "@/assets/tube-tractor.jpg";
import tubeTruck from "@/assets/tube-truck.jpg";
import tubePassenger from "@/assets/tube-passenger.jpg";
import tubeMotorcycle from "@/assets/tube-motorcycle.jpg";
import tubeThreewheeler from "@/assets/tube-threewheeler.jpg";
import tubeScooter from "@/assets/tube-scooter.jpg";
import tubeErickshaw from "@/assets/tube-erickshaw-dark.jpg";
import curingBagsImg from "@/assets/curing-bags.jpg";
import flapsImg from "@/assets/flaps-dark.jpg";
import rubberCompImg from "@/assets/rubber-compound-dark.jpg";

const butylProducts = [
  { name: "OTR Tubes", desc: "Heavy Truck & Off-the-Road tubes ensuring stability, resilience and robustness.", path: "/products/butyl-tubes#otr", icon: Truck, image: tubeErickshaw },
  { name: "Tractor Rear Tubes", desc: "Agricultural vehicle tubes with consistency, durability and flawless quality.", path: "/products/butyl-tubes#tractor-rear", icon: Tractor, image: tubeErickshaw },
  { name: "Tractor Front Tubes", desc: "Precision-engineered tubes designed with best quality material from certified vendors.", path: "/products/butyl-tubes#tractor-front", icon: Tractor, image: tubeErickshaw },
  { name: "Truck / Bus Tubes", desc: "Dimensional precision, resilience, impeccable performance and durability.", path: "/products/butyl-tubes#truck-bus", icon: Truck, image: tubeErickshaw },
  { name: "Animal Driven Vehicle Tubes", desc: "Dimensionally efficient and functionally effective tubes at competitive prices.", path: "/products/butyl-tubes#adv", icon: Truck, image: tubeErickshaw },
  { name: "Light Commercial Vehicle Tubes", desc: "Durable, reliable and affordable tubes designed for specific LCV requirements.", path: "/products/butyl-tubes#lcv", icon: Truck, image: tubeErickshaw },
  { name: "Passenger Radial Tubes", desc: "Better air retaining capacity and longer tube life made of high quality natural rubber.", path: "/products/butyl-tubes#passenger", icon: Car, image: tubeErickshaw },
  { name: "Three Wheeler Tubes", desc: "Reliable tubes procured from certified vendors at affordable prices.", path: "/products/butyl-tubes#three-wheeler", icon: Bike, image: tubeErickshaw },
  { name: "Motor Cycle Tubes", desc: "High-performance tubes from reliable and certified vendors.", path: "/products/butyl-tubes#motorcycle", icon: Bike, image: tubeErickshaw },
  { name: "Scooter Tubes", desc: "Quality tubes for scooter applications at affordable prices.", path: "/products/butyl-tubes#scooter", icon: Bike, image: tubeScooter },
  { name: "E-Rickshaw Tubes", desc: "Specially designed tubes for electric rickshaws.", path: "/products/butyl-tubes#e-rickshaw", icon: Car, image: tubeErickshaw },
];

const otherProducts = [
  { name: "Curing Bags", desc: "Butyl rubber curing bags for tyre retreading. Resist high heat pressure, have long life and are flexible.", icon: Package, path: "/products/curing-bags", image: curingBagsImg },
  { name: "Flaps", desc: "Highly durable and robust tyre flaps made from high quality rubber for extreme conditions.", icon: Wrench, path: "/products/flaps", image: flapsImg },
  { name: "Rubber Compound", desc: "High quality compounds from natural rubber, butyl rubber, EPDM rubber meeting international standards.", icon: Package, path: "/products/rubber-compound", image: rubberCompImg },
  { name: "Packaging", desc: "Quality packaging solutions for safe delivery of all our products.", icon: Package, path: "/products/packaging" },
];

const Products = () => (
  <div>
rrfdfg
  </div>
);

export default Products;
