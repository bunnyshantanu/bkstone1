import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { Toaster } from "@/components/ui/toaster";
import { TooltipProvider } from "@/components/ui/tooltip";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import ScrollToTop from "@/components/ScrollToTop";
import Index from "./pages/Index.tsx";
import About from "./pages/About.tsx";
import Products from "./pages/Products.tsx";
import ButylTubes from "./pages/ButylTubes.tsx";
import CuringBags from "./pages/CuringBags.tsx";
import Flaps from "./pages/Flaps.tsx";
import RubberCompound from "./pages/RubberCompound.tsx";
import Packaging from "./pages/Packaging.tsx";
import Contact from "./pages/Contact.tsx";
import Career from "./pages/Career.tsx";
import Enquiry from "./pages/Enquiry.tsx";
import Presence from "./pages/Presence.tsx";
import Downloads from "./pages/Downloads.tsx";
import NotFound from "./pages/NotFound.tsx";
import WhatsAppButton from "@/components/WhatsAppButton";

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />
      <BrowserRouter>
        <ScrollToTop />
        <Navbar />
        <WhatsAppButton />
        <main className="min-h-screen">
          <Routes>
            <Route path="/" element={<Index />} />
            <Route path="/about" element={<About />} />
            <Route path="/products" element={<Products />} />
            <Route path="/products/butyl-tubes" element={<ButylTubes />} />
            <Route path="/products/otr-tubes" element={<ButylTubes />} />
            <Route path="/products/tractor-rear" element={<ButylTubes />} />
            <Route path="/products/tractor-front" element={<ButylTubes />} />
            <Route path="/products/truck-bus" element={<ButylTubes />} />
            <Route path="/products/adv" element={<ButylTubes />} />
            <Route path="/products/lcv" element={<ButylTubes />} />
            <Route path="/products/passenger" element={<ButylTubes />} />
            <Route path="/products/three-wheeler" element={<ButylTubes />} />
            <Route path="/products/motorcycle" element={<ButylTubes />} />
            <Route path="/products/scooter" element={<ButylTubes />} />
            <Route path="/products/e-rickshaw" element={<ButylTubes />} />
            <Route path="/products/curing-bags" element={<CuringBags />} />
            <Route path="/products/flaps" element={<Flaps />} />
            <Route path="/products/rubber-compound" element={<RubberCompound />} />
            <Route path="/products/packaging" element={<Packaging />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="/career" element={<Career />} />
            <Route path="/enquiry" element={<Enquiry />} />
            <Route path="/presence" element={<Presence />} />
            <Route path="/downloads" element={<Downloads />} />
            <Route path="*" element={<NotFound />} />
          </Routes>
        </main>
        <Footer />
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
