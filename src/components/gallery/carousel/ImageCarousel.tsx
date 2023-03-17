import React from "react";
import Carousel from "nuka-carousel";
import { CenterLeftControl, CenterRightControl } from "./components/CarouselControls";
import useResponsiveCarousel from "../../../hooks/useResponsiveCarousel";

interface CarouselImage {
  id: number;
  url: string;
}

interface CarouselProps {
  images: CarouselImage[];
}

export const ImageCarousel: React.FC<CarouselProps> = ({ images }) => {
  const slidesToShow = useResponsiveCarousel();

  return (
    <>
      <div className="flex flex-col relative justify-center items-center h-[30em] pb-[2em] 2xl:pb-[10em] ">
        <Carousel
          wrapAround
          slidesToShow={slidesToShow}
          cellSpacing={10}
          swiping
          dragging
          renderBottomCenterControls={() => null} // remove the dots/pagination
          renderCenterLeftControls={(props) => <CenterLeftControl {...props} />}
          renderCenterRightControls={(props) => <CenterRightControl {...props} />}
        >
          {images.map((image, index) => (
            <img key={image.id} src={image.url} alt={`Slide ${index}`} className="w-full h-full object-cover" />
          ))}
        </Carousel>
        <div className="flex justify-between w-full max-w-4xl mt-4 mb-5 "></div>
      </div>
    </>
  );
};
