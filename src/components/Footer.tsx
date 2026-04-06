import { Link } from "react-router-dom";
import { Mail, Phone, MapPin, Facebook, Linkedin, Twitter, ArrowRight, ChevronRight } from "lucide-react";
import logo from "@/assets/bkstone-logo.jpg";
import VehicleMarquee from "./VehicleMarquee";

const Footer = () => (
  <>
    <VehicleMarquee />
    <footer className="relative overflow-hidden">
      {/* Background animated elements */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-[10%] right-[5%] w-64 h-64 rounded-full border-[12px] border-crimson/5 animate-spin-slow" />
        <div className="absolute bottom-[15%] left-[3%] w-40 h-40 rounded-full border-[8px] border-crimson/5 animate-spin-slow" style={{ animationDirection: "reverse" }} />
        <div className="absolute top-[50%] left-[50%] w-80 h-80 rounded-full bg-crimson/3 blur-3xl animate-pulse-glow" />
      </div>

      {/* Top gradient line */}
      <div className="h-1 bg-gradient-to-r from-transparent via-crimson to-transparent" />

      {/* Main footer */}
      <div className="bg-gradient-to-b from-secondary/80 to-background relative z-10">
        <div className="container-custom px-4 lg:px-8 py-16">
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-10">
            {/* Brand */}
            <div>
              <Link to="/" className="block mb-5">
                <img src={logo} alt="BK Stone" className="h-16 w-auto rounded-md" width={200} height={64} style={{ borderRadius: "6px" }} />
              </Link>
              <p className="text-sm text-muted-foreground leading-relaxed">
                Leading manufacturer of Premium Butyl Tubes, Curing Bags, Flaps and Rubber Compound since 1985.
              </p>
              <div className="flex gap-3 mt-5">
                {[
                  { icon: Facebook, href: "#" },
                  { icon: Linkedin, href: "#" },
                  { icon: Twitter, href: "#" },
                ].map(({ icon: Icon, href }, i) => (
                  <a key={i} href={href} className="w-10 h-10 rounded-xl glass-card flex items-center justify-center text-muted-foreground hover:text-crimson hover:border-crimson/40 transition-all duration-300 hover:-translate-y-1">
                    <Icon className="w-4 h-4" />
                  </a>
                ))}
              </div>
            </div>

            {/* Quick Links */}
            <div>
              <h4 className="font-heading text-foreground font-semibold mb-5 flex items-center gap-2">
                <ArrowRight className="w-4 h-4 text-crimson" />
                Quick Links
              </h4>
              <div className="space-y-2.5">
                {[
                  { label: "Home", path: "/" },
                  { label: "About Us", path: "/about" },
                  { label: "Products", path: "/products" },
                  { label: "Downloads", path: "/downloads" },
                  { label: "Presence", path: "/presence" },
                  { label: "Contact Us", path: "/contact" },
                ].map((l) => (
                  <Link key={l.label} to={l.path} className="group flex items-center gap-2 text-sm text-muted-foreground hover:text-crimson transition-all duration-300">
                    <ChevronRight className="w-3 h-3 text-crimson/40 group-hover:text-crimson group-hover:translate-x-1 transition-transform" />
                    {l.label}
                  </Link>
                ))}
              </div>
            </div>

            {/* Products */}
            <div>
              <h4 className="font-heading text-foreground font-semibold mb-5 flex items-center gap-2">
                <ArrowRight className="w-4 h-4 text-crimson" />
                Products
              </h4>
              <div className="space-y-2.5">
                {[
                  { label: "Butyl Tubes", path: "/products/butyl-tubes" },
                  { label: "Curing Bags", path: "/products/curing-bags" },
                  { label: "Flaps", path: "/products/flaps" },
                  { label: "Rubber Compound", path: "/products/rubber-compound" },
                  { label: "Packaging", path: "/products/packaging" },
                ].map((l) => (
                  <Link key={l.label} to={l.path} className="group flex items-center gap-2 text-sm text-muted-foreground hover:text-crimson transition-all duration-300">
                    <ChevronRight className="w-3 h-3 text-crimson/40 group-hover:text-crimson group-hover:translate-x-1 transition-transform" />
                    {l.label}
                  </Link>
                ))}
              </div>
            </div>

            {/* Contact */}
            <div>
              <h4 className="font-heading text-foreground font-semibold mb-5 flex items-center gap-2">
                <ArrowRight className="w-4 h-4 text-crimson" />
                Contact
              </h4>
              <div className="space-y-4">
                {[
                  { icon: MapPin, text: "No. 1/6, Chhoti Gwaltoli, Indore - 452 001, M.P., India" },
                  { icon: Phone, text: "+91-731-4216135" },
                  { icon: Mail, text: "bkrubber1@gmail.com" },
                ].map(({ icon: Icon, text }, i) => (
                  <div key={i} className="flex gap-3 text-sm group">
                    <div className="w-9 h-9 rounded-lg glass-card flex items-center justify-center flex-shrink-0 group-hover:border-crimson/30 transition-colors">
                      <Icon className="w-4 h-4 text-crimson" />
                    </div>
                    <span className="text-muted-foreground mt-1.5">{text}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="border-t border-border/50">
          <div className="container-custom px-4 lg:px-8 py-5 flex flex-col md:flex-row items-center justify-between gap-3">
            <p className="text-xs text-muted-foreground">
              © {new Date().getFullYear()} B. K. Rubber Industries Pvt. Ltd. All rights reserved.
            </p>
            <div className="flex gap-4">
              {["Privacy Policy", "Terms of Service"].map((t) => (
                <span key={t} className="text-xs text-muted-foreground hover:text-crimson transition-colors cursor-pointer">{t}</span>
              ))}
            </div>
          </div>
        </div>
      </div>
    </footer>
  </>
);

export default Footer;
