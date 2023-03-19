import React from "react";
import { motion } from "framer-motion";
import { Gallery, Footer, Contact, CookieBanner, MainContent } from "./components";
import { HERO_IMAGE } from "./constants";

const App = () => {
  return (
    <>
      <motion.div
        className="pb-16 text-black bg-primary-400"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.5 }}
      >
        <img src={HERO_IMAGE} alt="Header Image of a cat" className="w-full" />;
        <MainContent />
      </motion.div>
      <Gallery />
      <Contact />
      <Footer />
      <CookieBanner />
    </>
  );
};

export default App;
