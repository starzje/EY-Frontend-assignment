import React, { FC } from "react";
import { Modal } from "../../../index";

interface ImageModalProps {
  image: { id: number; url: string } | null;
  visible: boolean;
  onClose: () => void;
}

export const ImageModal: FC<ImageModalProps> = ({ image, visible, onClose }) => {
  if (!visible || !image) return null;

  return (
    <Modal onClose={onClose} containerClassName="items-center justify-center" visible={visible}>
      <div className="relative">
        <button
          onClick={onClose}
          className="absolute -top-5 text-2xl -right-5 m-2 py-1 px-3 text-black border hover:bg-primary-400 bg-white rounded-full"
        >
          &times;
        </button>
        <img src={image.url} alt={`Image of a cat`} className="w-full h-auto" />
      </div>
    </Modal>
  );
};
