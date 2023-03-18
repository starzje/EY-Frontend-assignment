import { useState } from "react";

export const useSuccessModal = () => {
  const [showSuccessModal, setShowSuccessModal] = useState(false);

  const handleCloseModal = () => {
    setShowSuccessModal(false);
  };

  const openModal = () => {
    setShowSuccessModal(true);
  };

  return { showSuccessModal, handleCloseModal, openModal };
};
