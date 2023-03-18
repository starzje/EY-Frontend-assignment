import React, { FC } from "react";
import { CAROUSEL_IMAGES } from "../../constants";
import { ImageCarousel, GridShowcase } from "./index";

export const Gallery: FC = () => {
  return (
    <section className="space-y-24">
      <ImageCarousel images={CAROUSEL_IMAGES} />
      <GridShowcase />
    </section>
  );
};
