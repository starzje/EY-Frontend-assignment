import React, { FC, ReactNode } from "react";
import { useLockBodyScroll } from "../../hooks";

interface ModalProps {
  onClose: () => void;
  children: ReactNode;
  containerClassName?: string;
  modalClassName?: string;
  visible: boolean;
}

export const Modal: FC<ModalProps> = ({ onClose, children, containerClassName = "", modalClassName = "", visible }) => {
  useLockBodyScroll(visible); // Use the useLockBodyScroll hook to lock the body scroll when the modal is visible

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
