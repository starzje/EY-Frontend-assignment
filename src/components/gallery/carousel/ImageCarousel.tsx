import React from "react";
import Carousel from "nuka-carousel";
import { CenterLeftControl, CenterRightControl } from "../index";
import { useResponsiveCarousel } from "../../../hooks";
import { Image } from "../../../types";
import { motion } from "framer-motion";
import { fadeAnimation } from "../../../animations";

interface CarouselProps {
  images: Image[];
}

export const ImageCarousel: React.FC<CarouselProps> = ({ images }) => {
  const slidesToShow = useResponsiveCarousel();

  return (
    <motion.div
      className="flex flex-col relative justify-center items-center h-[30em] pb-[2em] 2xl:pb-[10em] "
      variants={fadeAnimation}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true }}
    >
      <Carousel
        wrapAround
        slidesToShow={slidesToShow}
        cellSpacing={10}
        swiping
        dragging
        zoomScale={0.9}
        renderBottomCenterControls={() => null} // remove the dots/pagination
        renderCenterLeftControls={(props) => <CenterLeftControl {...props} />}
        renderCenterRightControls={(props) => <CenterRightControl {...props} />}
      >
        {images.map((image, index) => (
          <img
            key={image.id}
            src={image.url}
            alt={`Slide ${index}`}
            className="object-cover w-full h-full"
            loading="lazy"
          />
        ))}
      </Carousel>
      <div className="flex justify-between w-full max-w-4xl mt-4 mb-5 "></div>
    </motion.div>
  );
};
