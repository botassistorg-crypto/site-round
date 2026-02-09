import { motion } from 'framer-motion';
import { MessageCircle } from 'lucide-react';
import { siteConfig } from '@/content';

export function WhatsAppButton() {
  return (
    <motion.a
      href={siteConfig.whatsappLink}
      target="_blank"
      rel="noopener noreferrer"
      className="fixed bottom-4 right-4 md:bottom-6 md:right-6 z-40 flex items-center justify-center w-12 h-12 md:w-14 md:h-14 rounded-full bg-green-500 text-white shadow-lg shadow-green-500/25 hover:bg-green-600 transition-colors"
      initial={{ scale: 0, opacity: 0 }}
      animate={{ scale: 1, opacity: 1 }}
      transition={{ delay: 1.5, type: 'spring', stiffness: 200, damping: 20 }}
      whileHover={{ scale: 1.05 }}
      whileTap={{ scale: 0.95 }}
      aria-label="Chat on WhatsApp"
    >
      <MessageCircle className="w-5 h-5 md:w-6 md:h-6" />
    </motion.a>
  );
}
