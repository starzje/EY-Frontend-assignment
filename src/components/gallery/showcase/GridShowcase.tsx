import React, { FC, useState } from "react";
import { gridImages } from "../../../constants";
import ImageModal from "./components/ImageModal";

export const GridShowcase: FC = () => {
  const [selectedImage, setSelectedImage] = useState<{ id: number; url: string } | null>(null);
  const [modalVisible, setModalVisible] = useState(false);

  const handleClick = (image: { id: number; url: string }) => {
    setSelectedImage(image);
    setModalVisible(true);
  };

  const closeModal = () => {
    setModalVisible(false);
  };

  return (
    <div className="container flex justify-center items-center pb-20">
      <div className="w-full md:w-auto grid md:grid-cols-4 grid-cols-2 gap-5 p-[1rem]">
        {gridImages.map((image) => (
          <img
            key={image.id}
            src={image.url}
            alt={`Image of a cat`}
            className="w-full object-cover rounded-[10px] cursor-pointer hover:opacity-80 transition duration-300"
            onClick={() => handleClick(image)}
          />
        ))}
      </div>
      <ImageModal image={selectedImage} visible={modalVisible} onClose={closeModal} />
    </div>
  );
};
