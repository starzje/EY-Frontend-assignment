import React, { FC, ReactNode } from "react";
import { useLockBodyScroll } from "../../hooks";

interface ModalProps {
  onClose: () => void;
  children: ReactNode;
  containerClassName?: string;
  modalClassName?: string;
  visible: boolean; // Add the visible prop
}

export const Modal: FC<ModalProps> = ({
  onClose,
  children,
  containerClassName = "",
  modalClassName = "",
  visible, // Add the visible prop
}) => {
  useLockBodyScroll(visible); // Use the hook with the visible prop

  return (
    <div
      onClick={onClose}
      className={`fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-60 ${containerClassName}`}
    >
      <div onClick={(e) => e.stopPropagation()} className={`bg-white p-8 rounded-lg shadow-lg ${modalClassName}`}>
        {children}
      </div>
    </div>
  );
};
