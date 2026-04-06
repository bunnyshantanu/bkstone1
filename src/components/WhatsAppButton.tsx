import { motion } from "framer-motion";
import whatsappIcon from "@/assets/whatsapp-icon.png";

const WhatsAppButton = () => (
  <motion.a
    href="https://wa.me/919827036135?text=Hello%2C%20I%20would%20like%20to%20enquire%20about%20your%20products."
    target="_blank"
    rel="noopener noreferrer"
    className="fixed bottom-6 left-6 z-50 w-14 h-14 rounded-full flex items-center justify-center shadow-lg hover:shadow-xl transition-shadow"
    initial={{ scale: 0 }}
    animate={{ 
      scale: 1,
      y: [0, -6, 0],
    }}
    transition={{ 
      scale: { delay: 1, type: "spring", stiffness: 200 },
      y: { duration: 2, repeat: Infinity, ease: "easeInOut", delay: 2 }
    }}
    whileHover={{ scale: 1.15, rotate: [0, -10, 10, -10, 0] }}
    whileTap={{ scale: 0.9 }}
    aria-label="Chat on WhatsApp"
  >
    {/* Pulse ring */}
    <motion.span
      className="absolute inset-0 rounded-full bg-green-500/30"
      animate={{ scale: [1, 1.5, 1.5], opacity: [0.5, 0, 0] }}
      transition={{ duration: 2, repeat: Infinity, ease: "easeOut" }}
    />
    <img src={whatsappIcon} alt="WhatsApp" className="w-14 h-14 relative z-10" width={56} height={56} />
  </motion.a>
);

export default WhatsAppButton;
