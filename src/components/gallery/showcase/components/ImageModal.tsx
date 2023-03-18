import React, { FC } from "react";
import { Image } from "../../../../types";
import { Modal } from "../../../index";

interface ImageModalProps {
  image: Image | null;
  visible: boolean;
  onClose: () => void;
}

export const ImageModal: FC<ImageModalProps> = ({ image, visible, onClose }) => {
  if (!visible || !image) return null; // if the modal is not visible or there is no image, return null

  return (
    <Modal onClose={onClose} containerClassName="items-center justify-center" visible={visible}>
      <div className="relative">
        <button
          onClick={onClose}
          className="absolute px-3 py-1 m-2 text-2xl text-black bg-white border rounded-full -top-5 -right-5 hover:bg-primary-400"
        >
          &times;
        </button>
        <img src={image.url} alt={`Image of a cat`} className="w-full h-auto" loading="lazy" />
      </div>
    </Modal>
  );
};
