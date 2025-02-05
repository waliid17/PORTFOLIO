import { motion } from "framer-motion";

export const Footer = () => {
  return (
    <motion.footer
      className="py-8 md:py-12 bg-gray-100"
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6 }}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Copyright Section */}
        <motion.div
          className="border-t border-gray-300 mt-8 pt-8 text-center text-sm md:text-base text-gray-800"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
        >
          &copy; {new Date().getFullYear()} Kheloufi Walid. All rights reserved.
        </motion.div>
      </div>
    </motion.footer>
  );
};