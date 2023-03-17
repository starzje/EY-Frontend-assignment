import React, { FC } from "react";
import { useLockBodyScroll } from "../../../../hooks/useLockBodyScroll";

interface ImageModalProps {
  image: { id: number; url: string } | null;
  visible: boolean;
  onClose: () => void;
}

const ImageModal: FC<ImageModalProps> = ({ image, visible, onClose }) => {
  useLockBodyScroll(visible);

  if (!visible || !image) return null;

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50" onClick={onClose}>
      <div
        className="relative bg-white p-4 rounded-lg"
        onClick={(event) => {
          event.stopPropagation();
        }}
      >
        <button
          onClick={onClose}
          className="absolute top-0 text-2xl right-0 m-2 py-1 px-3 text-black hover:bg-primary-400 bg-white rounded-full"
        >
          &times;
        </button>
        <img src={image.url} alt={`Image of a cat`} className="w-full h-auto" />
      </div>
    </div>
  );
};

export default ImageModal;
