import React, { FC } from "react";
import { CAROUSEL_ARROW } from "../../../../constants";

interface CarouselControlProps {
  direction: "left" | "right";
  onClick: () => void;
}

const CarouselControl: FC<CarouselControlProps> = ({ direction, onClick }) => {
  const rotation = direction === "left" ? "rotate-180" : "";

  return (
    <button onClick={onClick} className="cursor-pointer">
      <img
        src={CAROUSEL_ARROW}
        alt={`${direction === "left" ? "Previous" : "Next"} Arrow`}
        className={`w-10 h-10 ${rotation} absolute bottom-0 ${direction === "left" ? "left-1/3" : "right-1/3"}`}
        loading="lazy"
      />
    </button>
  );
};

interface CarouselRenderControlProps {
  previousSlide?: () => void;
  nextSlide?: () => void;
}

export const CenterLeftControl: FC<CarouselRenderControlProps> = ({ previousSlide }) => (
  <CarouselControl direction="left" onClick={previousSlide!} />
);

export const CenterRightControl: FC<CarouselRenderControlProps> = ({ nextSlide }) => (
  <CarouselControl direction="right" onClick={nextSlide!} />
);
