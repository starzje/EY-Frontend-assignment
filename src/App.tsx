import React from "react";
import { motion } from "framer-motion";
import { Gallery, Footer, Contact, CookieBanner, MainContent } from "./components";
import { HERO_IMAGE } from "./constants";
import { slideInFromBottom } from "./animations";

const App = () => {
  return (
    <>
      <motion.div
        className="pb-16 text-black bg-primary-400"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.5 }}
      >
        <img src={HERO_IMAGE} alt="Header Image" className="w-full" loading="eager" />;
        <MainContent />
      </motion.div>
      <motion.h2
        className="mb-2 title"
        variants={slideInFromBottom}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
      >
        Gallery
      </motion.h2>
      <Gallery />
      <Contact />
      <Footer />
      <div className="bg-slate-900 border-3 border-red-500 relative">
        <CookieBanner />
      </div>
    </>
  );
};

export default App;
