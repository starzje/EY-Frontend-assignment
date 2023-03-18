import React, { FC, useState } from "react";
import { GRID_IMAGES } from "../../../constants";
import { useSuccessModal } from "../../../hooks";
import { Image } from "../../../types";
import { ImageModal } from "../index";
import { motion } from "framer-motion";
import { fadeAnimation } from "../../../animations";

export const GridShowcase: FC = () => {
  const [selectedImage, setSelectedImage] = useState<Image | null>(null);
  const { showSuccessModal: modalVisible, handleCloseModal, openModal } = useSuccessModal(); // Use the hook and rename the properties

  const handleClick = (image: Image) => {
    setSelectedImage(image);
    openModal(); // Use the openImageModal function from the hook
  };

  return (
    <div className="container flex items-center justify-center pb-20">
      <motion.div
        className="w-full md:w-auto grid md:grid-cols-4 grid-cols-2 gap-5 p-[1rem]"
        variants={fadeAnimation}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
      >
        {GRID_IMAGES.map((image) => (
          <img
            key={image.id}
            src={image.url}
            alt={`Image of a cat`}
            className="w-full object-cover rounded-[10px] cursor-pointer hover:opacity-80 transition duration-300"
            onClick={() => handleClick(image)}
            loading="lazy"
          />
        ))}
      </motion.div>
      <ImageModal image={selectedImage} visible={modalVisible} onClose={handleCloseModal} />
    </div>
  );
};
