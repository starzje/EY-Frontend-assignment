import React, { FC } from "react";
import { Modal } from "../../shared/Modal";

interface SuccessModalProps {
  onClose: () => void;
  visible: boolean;
}

export const SuccessModal: FC<SuccessModalProps> = ({ onClose, visible }) => {
  if (!visible) return null; // Don't render anything if modal is not visible

  return (
    <Modal onClose={onClose} visible={visible}>
      <h4 className="mb-4 text-3xl">Uspješna prijava</h4>
      <button
        onClick={onClose}
        className="w-full px-4 py-2 text-white rounded-md bg-slate-600 hover:bg-slate-700 focus:outline-none"
      >
        Close
      </button>
    </Modal>
  );
};
