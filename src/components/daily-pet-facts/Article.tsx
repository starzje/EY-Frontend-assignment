import React, { FC } from "react";

interface ArticleProps {
  img: string;
  imgAlt: string;
  title: string;
  children: React.ReactNode;
  flexDirection?: "flex-row" | "flex-row-reverse";
}

export const Article: FC<ArticleProps> = ({ img, imgAlt, title, children, flexDirection = "flex-row" }) => {
  return (
    <section
      className={`flex flex-col w-full justify-center items-center md:items-start ${
        flexDirection === "flex-row" ? "md:flex-row" : "md:flex-row-reverse"
      }`}
    >
      <img src={img} alt={imgAlt} className="w-full md:w-1/3 object-cover h-full rounded-[10px]" />
      <aside className="px-0 md:px-6 w-full md:w-2/3">
        <h2 className="text-4xl text-center md:text-left mt-6 md:mt-0">{title}</h2>
        {children}
      </aside>
    </section>
  );
};