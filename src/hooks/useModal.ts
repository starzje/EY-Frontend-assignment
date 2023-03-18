import { useState } from "react";

/**
 * A custom React hook to manage the visibility of a success modal.
 * The hook exposes methods to open and close the modal, and a state variable to track its visibility.
 * @module useSuccessModal
 * @returns {Object} - An object containing the following properties:
 * @property {boolean} showSuccessModal - A boolean value indicating whether the success modal should be displayed or not.
 * @property {function} handleCloseModal - A function that can be called to close the success modal.
 * @property {function} openModal - A function that can be called to open the success modal.
 */

export const useModal = () => {
  const [isOpen, setisOpen] = useState(false);

  const handleCloseModal = () => {
    setisOpen(false);
  };

  const openModal = () => {
    setisOpen(true);
  };

  return { isOpen, handleCloseModal, openModal };
};
