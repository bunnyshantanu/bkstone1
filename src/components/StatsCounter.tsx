import { useEffect, useRef, useState } from "react";
import { motion, useInView } from "framer-motion";
import { Factory, Globe, Users, Calendar } from "lucide-react";

const stats = [
  { icon: Calendar, value: 40, suffix: "+", label: "Years Experience" },
  { icon: Factory, value: 500, suffix: "+", label: "Products Range" },
  { icon: Globe, value: 25, suffix: "+", label: "Countries Export" },
  { icon: Users, value: 1000, suffix: "+", label: "Happy Clients" },
];

const Counter = ({ target, suffix }: { target: number; suffix: string }) => {
  const [count, setCount] = useState(0);
  const ref = useRef<HTMLSpanElement>(null);
  const inView = useInView(ref, { once: true });

  useEffect(() => {
    if (!inView) return;
    let start = 0;
    const duration = 2000;
    const step = Math.ceil(target / (duration / 16));
    const timer = setInterval(() => {
      start += step;
      if (start >= target) {
        setCount(target);
        clearInterval(timer);
      } else {
        setCount(start);
      }
    }, 16);
    return () => clearInterval(timer);
  }, [inView, target]);

  return (
    <span ref={ref} className="text-4xl md:text-5xl font-bold font-heading text-crimson">
      {count}{suffix}
    </span>
  );
};

const StatsCounter = () => (
  <section className="section-padding relative overflow-hidden">
    {/* Animated background */}
    <div className="absolute inset-0 pointer-events-none">
      <div className="absolute top-[20%] left-[10%] w-32 h-32 rounded-full border-[6px] border-crimson/5 animate-spin-slow" />
      <div className="absolute bottom-[15%] right-[15%] w-24 h-24 rounded-full border-[4px] border-crimson/8 animate-float" />
      <div className="absolute top-[50%] right-[5%] w-40 h-40 rounded-full bg-crimson/3 animate-pulse" />
    </div>

    <div className="container-custom relative z-10">
      <div className="grid grid-cols-2 lg:grid-cols-4 gap-8">
        {stats.map((stat, i) => (
          <motion.div
            key={stat.label}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: i * 0.15 }}
            className="glass-card rounded-xl p-8 text-center group hover:shadow-[0_10px_40px_-10px_hsla(350,72%,45%,0.25)] hover:-translate-y-2 transition-all duration-500"
          >
            <div className="w-14 h-14 mx-auto rounded-full bg-crimson/10 flex items-center justify-center mb-4 group-hover:bg-crimson/20 transition-colors">
              <stat.icon className="w-7 h-7 text-crimson" />
            </div>
            <Counter target={stat.value} suffix={stat.suffix} />
            <p className="text-muted-foreground mt-2 text-sm font-medium">{stat.label}</p>
          </motion.div>
        ))}
      </div>
    </div>
  </section>
);

export default StatsCounter;
