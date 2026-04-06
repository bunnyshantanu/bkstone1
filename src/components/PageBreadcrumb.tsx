import { Link } from "react-router-dom";
import { ChevronRight, Home } from "lucide-react";
import { motion } from "framer-motion";
import breadcrumbBg from "@/assets/breadcrumb-tubes.jpg";

interface PageBreadcrumbProps {
  title: string;
  subtitle?: string;
  breadcrumbs: { label: string; path?: string }[];
}

const PageBreadcrumb = ({ title, subtitle, breadcrumbs }: PageBreadcrumbProps) => (
  <section className="relative pt-20 overflow-hidden">
    <div className="absolute inset-0">
      <img src={breadcrumbBg} alt="" className="w-full h-full object-cover" width={1920} height={512} />
      <div className="absolute inset-0 bg-gradient-to-r from-background/95 via-background/85 to-background/70" />
      <div className="absolute inset-0 bg-gradient-to-t from-background via-transparent to-transparent" />
    </div>

    {/* Animated tube rings */}
    <div className="absolute inset-0 pointer-events-none overflow-hidden">
      <div className="absolute top-[20%] right-[10%] w-32 h-32 rounded-full border-[8px] border-crimson/10 animate-spin-slow" />
      <div className="absolute bottom-[10%] left-[5%] w-20 h-20 rounded-full border-[6px] border-crimson/8 animate-float" />
    </div>

    <div className="relative z-10 section-padding pb-12">
      <div className="container-custom">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          <div className="flex items-center gap-2 text-sm text-muted-foreground mb-4">
            <Link to="/" className="hover:text-crimson transition-colors">
              <Home className="w-4 h-4" />
            </Link>
            {breadcrumbs.map((crumb, i) => (
              <span key={i} className="flex items-center gap-2">
                <ChevronRight className="w-3 h-3" />
                {crumb.path ? (
                  <Link to={crumb.path} className="hover:text-crimson transition-colors">{crumb.label}</Link>
                ) : (
                  <span className="text-crimson">{crumb.label}</span>
                )}
              </span>
            ))}
          </div>
          <h1 className="font-heading text-4xl md:text-5xl font-bold text-foreground">
            {title}
          </h1>
          {subtitle && <p className="text-muted-foreground mt-3 max-w-2xl">{subtitle}</p>}
        </motion.div>
      </div>
    </div>
  </section>
);

export default PageBreadcrumb;
