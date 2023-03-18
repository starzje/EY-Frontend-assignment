import React, { FC } from "react";
import { motion } from "framer-motion";
import { slideInAnimation } from "../../../animations";

interface ArticleProps {
  img: string;
  imgAlt: string;
  title: string;
  children: React.ReactNode;
  flexDirection?: "flex-row" | "flex-row-reverse";
}

export const Article: FC<ArticleProps> = ({ img, imgAlt, title, children, flexDirection = "flex-row" }) => {
  const animation = slideInAnimation(flexDirection); // get the slide-in animation based on the flex-direction
  return (
    <motion.section
      variants={animation}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true }}
      className={`flex flex-col w-full justify-center items-center md:items-start ${
        flexDirection === "flex-row" ? "md:flex-row" : "md:flex-row-reverse"
      }`}
    >
      <img src={img} alt={imgAlt} className="w-full md:w-1/3 object-cover h-full rounded-[10px]" loading="lazy" />
      <aside className="w-full px-0 md:px-6 md:w-2/3">
        <h2 className="mt-6 text-4xl text-center md:text-left md:mt-0">{title}</h2>
        {children}
      </aside>
    </motion.section>
  );
};
