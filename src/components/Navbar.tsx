import { useState } from "react";
import { Link, useLocation } from "react-router-dom";
import { Menu, X, ChevronDown } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import logo from "@/assets/bkstone-logo.jpg";

const productSubCategories = [
  { name: "OTR Tubes", path: "/products/otr-tubes" },
  { name: "Tractor Rear Tubes", path: "/products/tractor-rear" },
  { name: "Tractor Front Tubes", path: "/products/tractor-front" },
  { name: "Truck / Bus Tubes", path: "/products/truck-bus" },
  { name: "Animal Driven Vehicle Tubes", path: "/products/adv" },
  { name: "Light Commercial Vehicle Tubes", path: "/products/lcv" },
  { name: "Passenger Radial Tubes", path: "/products/passenger" },
  { name: "Three Wheeler Tubes", path: "/products/three-wheeler" },
  { name: "Motor Cycle Tubes", path: "/products/motorcycle" },
  { name: "Scooter Tubes", path: "/products/scooter" },
  { name: "E-Rickshaw Tubes", path: "/products/e-rickshaw" },
];

const productCategories = [
  { name: "Butyl Tubes", subItems: productSubCategories },
  { name: "Curing Bags", path: "/products/curing-bags" },
  { name: "Flaps", path: "/products/flaps" },
  { name: "Rubber Compound", path: "/products/rubber-compound" },
  { name: "Packaging", path: "/products/packaging" },
];

const navLinks = [
  { name: "Home", path: "/" },
  { name: "About Us", path: "/about" },
  { name: "Our Products", path: "/products", hasDropdown: true },
  { name: "Downloads", path: "/downloads" },
  { name: "Presence", path: "/presence" },
  { name: "Enquiry", path: "/enquiry" },
  { name: "Career", path: "/career" },
  { name: "Contact Us", path: "/contact" },
];

const Navbar = () => {
  const [mobileOpen, setMobileOpen] = useState(false);
  const [productOpen, setProductOpen] = useState(false);
  const [butylOpen, setButylOpen] = useState(false);
  const location = useLocation();

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-background/90 backdrop-blur-md border-b border-border">
      <div className="container-custom flex items-center justify-between h-16 md:h-20 px-4 lg:px-8">
        <Link to="/" className="flex items-center gap-2">
          <img src={logo} alt="BK Stone - Premium Quality Automotive Butyl Tubes" className="h-12 md:h-16 w-auto" width={200} height={64} style={{ borderRadius: "6px" }} />
        </Link>

        {/* Desktop nav */}
        <div className="hidden lg:flex items-center gap-1">
          {navLinks.map((link) => (
            <div key={link.name} className="relative group">
              <Link
                to={link.path}
                className={`px-3 py-2 text-sm font-medium rounded-md transition-colors flex items-center gap-1 ${
                  location.pathname === link.path ? "text-crimson" : "text-foreground/80 hover:text-foreground"
                }`}
              >
                {link.name}
                {link.hasDropdown && <ChevronDown className="w-3 h-3" />}
              </Link>
              
              {link.hasDropdown && (
                <div className="absolute top-full left-0 pt-2 opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-200">
                  <div className="bg-card border border-border rounded-lg shadow-xl py-2 min-w-[220px]">
                    {productCategories.map((cat) => (
                      <div key={cat.name} className="relative group/sub">
                        {cat.subItems ? (
                          <div className="px-4 py-2.5 text-sm text-foreground/80 hover:text-foreground hover:bg-muted flex items-center justify-between cursor-pointer">
                            {cat.name}
                            <ChevronDown className="w-3 h-3 -rotate-90" />
                          </div>
                        ) : (
                          <Link to={cat.path!} className="block px-4 py-2.5 text-sm text-foreground/80 hover:text-foreground hover:bg-muted">
                            {cat.name}
                          </Link>
                        )}
                        {cat.subItems && (
                          <div className="absolute left-full top-0 pl-2 opacity-0 invisible group-hover/sub:opacity-100 group-hover/sub:visible transition-all">
                            <div className="bg-card border border-border rounded-lg shadow-xl py-2 min-w-[240px]">
                              {cat.subItems.map((sub) => (
                                <Link key={sub.name} to={sub.path} className="block px-4 py-2 text-sm text-foreground/80 hover:text-foreground hover:bg-muted">
                                  {sub.name}
                                </Link>
                              ))}
                            </div>
                          </div>
                        )}
                      </div>
                    ))}
                  </div>
                </div>
              )}
            </div>
          ))}
          <Link
            to="/enquiry"
            className="ml-3 px-5 py-2 bg-crimson text-white text-sm font-semibold rounded-lg hover:bg-crimson/90 transition-colors shadow-md hover:shadow-lg"
          >
            Get a Quote
          </Link>
        </div>

        {/* Mobile toggle */}
        <button className="lg:hidden text-foreground" onClick={() => setMobileOpen(!mobileOpen)}>
          {mobileOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
        </button>
      </div>

      {/* Mobile menu */}
      <AnimatePresence>
        {mobileOpen && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            className="lg:hidden bg-card border-b border-border overflow-hidden"
          >
            <div className="px-4 py-4 space-y-1">
              {navLinks.map((link) => (
                <div key={link.name}>
                  {link.hasDropdown ? (
                    <>
                      <button
                        onClick={() => setProductOpen(!productOpen)}
                        className="w-full flex items-center justify-between px-3 py-2.5 text-sm font-medium text-foreground/80 hover:text-foreground"
                      >
                        {link.name}
                        <ChevronDown className={`w-4 h-4 transition-transform ${productOpen ? "rotate-180" : ""}`} />
                      </button>
                      {productOpen && (
                        <div className="pl-4 space-y-1">
                          {productCategories.map((cat) => (
                            <div key={cat.name}>
                              {cat.subItems ? (
                                <>
                                  <button
                                    onClick={() => setButylOpen(!butylOpen)}
                                    className="w-full flex items-center justify-between px-3 py-2 text-sm text-foreground/70"
                                  >
                                    {cat.name}
                                    <ChevronDown className={`w-3 h-3 transition-transform ${butylOpen ? "rotate-180" : ""}`} />
                                  </button>
                                  {butylOpen && (
                                    <div className="pl-4">
                                      {cat.subItems.map((sub) => (
                                        <Link
                                          key={sub.name}
                                          to={sub.path}
                                          onClick={() => setMobileOpen(false)}
                                          className="block px-3 py-1.5 text-xs text-foreground/60 hover:text-foreground"
                                        >
                                          {sub.name}
                                        </Link>
                                      ))}
                                    </div>
                                  )}
                                </>
                              ) : (
                                <Link
                                  to={cat.path!}
                                  onClick={() => setMobileOpen(false)}
                                  className="block px-3 py-2 text-sm text-foreground/70 hover:text-foreground"
                                >
                                  {cat.name}
                                </Link>
                              )}
                            </div>
                          ))}
                        </div>
                      )}
                    </>
                  ) : (
                    <Link
                      to={link.path}
                      onClick={() => setMobileOpen(false)}
                      className={`block px-3 py-2.5 text-sm font-medium rounded-md ${
                        location.pathname === link.path ? "text-crimson" : "text-foreground/80 hover:text-foreground"
                      }`}
                    >
                      {link.name}
                    </Link>
                  )}
                </div>
              ))}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
};

export default Navbar;
