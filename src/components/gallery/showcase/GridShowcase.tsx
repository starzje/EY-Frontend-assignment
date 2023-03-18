import React, { FC, useState } from "react";
import { GRID_IMAGES } from "../../../constants";
import { useSuccessModal } from "../../../hooks";
import { Image } from "../../../types";
import { ImageModal } from "../index";

export const GridShowcase: FC = () => {
  const [selectedImage, setSelectedImage] = useState<Image | null>(null);
  const { showSuccessModal: modalVisible, handleCloseModal, openModal } = useSuccessModal(); // Use the hook and rename the properties

  const handleClick = (image: Image) => {
    setSelectedImage(image);
    openModal(); // Use the openImageModal function from the hook
  };

  return (
    <div className="container flex items-center justify-center pb-20">
      <div className="w-full md:w-auto grid md:grid-cols-4 grid-cols-2 gap-5 p-[1rem]">
        {GRID_IMAGES.map((image) => (
          <img
            key={image.id}
            src={image.url}
            alt={`Image of a cat`}
            className="w-full object-cover rounded-[10px] cursor-pointer hover:opacity-80 transition duration-300"
            onClick={() => handleClick(image)}
          />
        ))}
      </div>
      <ImageModal image={selectedImage} visible={modalVisible} onClose={handleCloseModal} />
    </div>
  );
};
