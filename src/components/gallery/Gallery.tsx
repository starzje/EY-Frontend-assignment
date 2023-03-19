import React, { FC } from "react";
import { slideInFromBottom } from "../../animations";
import { CAROUSEL_IMAGES } from "../../constants";
import { motion } from "framer-motion";
import { ImageCarousel, GridShowcase } from "./index";

export const Gallery: FC = () => {
  return (
    <section>
      <motion.h2
        className="mb-2 title"
        variants={slideInFromBottom}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
      >
        Gallery
      </motion.h2>
      <div className="space-y-24">
        <ImageCarousel images={CAROUSEL_IMAGES} />
        <GridShowcase />
      </div>
    </section>
  );
};
