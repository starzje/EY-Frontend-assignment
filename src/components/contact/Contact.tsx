import React, { FormEvent } from "react";
import { motion } from "framer-motion";
import { FormData } from "../../types";
import { Form } from "./components";
import { fadeAnimation } from "../../animations";
import { useFormStateAndValidation, useModal } from "../../hooks";

export const Contact = () => {
  const defaultFormState: FormData = {
    name: "",
    email: "",
    selection: "",
  };

  const { formData, errors, handleChange, handleSubmit, resetFormData } = useFormStateAndValidation(defaultFormState); // custom hook for handling form state and validation

  const { isOpen: showSuccessModal, handleCloseModal, openModal } = useModal(); // custom hook for handling modal state

  // handle form submission with custom validation
  const handleFormSubmit = (event: FormEvent) => {
    const isFormValid = handleSubmit(event);
    // If the form is valid, open the success modal and reset the form data
    if (isFormValid) {
      openModal();
      resetFormData();
    }
  };

  return (
    <motion.section variants={fadeAnimation} initial="hidden" whileInView="visible" viewport={{ once: true }}>
      <Form
        formData={formData}
        errors={errors}
        handleChange={handleChange}
        handleSubmit={handleFormSubmit}
        showSuccessModal={showSuccessModal}
        handleCloseModal={handleCloseModal}
      />
    </motion.section>
  );
};
