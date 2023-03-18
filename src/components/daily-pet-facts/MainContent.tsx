import React, { FC } from "react";
import { motion } from "framer-motion";
import { ARTICLE_IMAGES, CAT_PARAGRAPH, DOG_PARAGRAPH } from "../../constants";
import { Article } from "./index";

export const MainContent: FC = () => {
  return (
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
  );
};
