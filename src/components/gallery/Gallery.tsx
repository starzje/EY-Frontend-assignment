import React, { FC } from "react";
import { carouselImages } from "../../constants";
import { ImageCarousel } from "./carousel/ImageCarousel";
import { GridShowcase } from "./showcase/GridShowcase";

export const Gallery: FC = () => {
  return (
    <section className="space-y-24">
      <ImageCarousel images={carouselImages} />
      <GridShowcase />
    </section>
  );
};
