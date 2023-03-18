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
          className="absolute px-3 py-1 m-2 text-2xl text-black bg-white border rounded-full -top-5 -right-5 hover:bg-primary-400"
        >
          &times;
        </button>
        <img src={image.url} alt={`Image of a cat`} className="w-full h-auto" />
      </div>
    </Modal>
  );
};
