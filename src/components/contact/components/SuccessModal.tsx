import React, { FC } from "react";
import { Modal } from "../../shared/Modal";

interface SuccessModalProps {
  onClose: () => void;
  visible: boolean;
}

export const SuccessModal: FC<SuccessModalProps> = ({ onClose, visible }) => (
  <Modal onClose={onClose} visible={visible}>
    <h4 className="mb-4 text-3xl">Uspješna prijava</h4>
    <button onClick={onClose} className="form-submit-button">
      Close
    </button>
  </Modal>
);
