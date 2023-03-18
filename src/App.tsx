import React from "react";
import { motion } from "framer-motion";
import { Gallery, Footer, Article, Contact, CookieBanner } from "./components";
import { ARTICLE_IMAGES, HERO_IMAGE, CAT_PARAGRAPH, DOG_PARAGRAPH } from "./constants";
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
        <motion.div className="container min-h-screen">
          <motion.h1 className="title" initial={{ y: -100 }} animate={{ y: 0 }} transition={{ duration: 1 }}>
            Daily pet facts - Love!
          </motion.h1>
          <main className="space-y-24 md:space-y-32">
            <Article img={ARTICLE_IMAGES.cat} imgAlt="Image of a cat" title="The cat">
              {CAT_PARAGRAPH}
            </Article>
            <Article img={ARTICLE_IMAGES.dog} imgAlt="Image of a dog" title="The dog" flexDirection="flex-row-reverse">
              {DOG_PARAGRAPH}
            </Article>
          </main>
        </motion.div>
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
      <CookieBanner />
    </>
  );
};

export default App;
