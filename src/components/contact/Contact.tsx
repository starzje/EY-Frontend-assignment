import React, { FormEvent } from "react";
import { useFormStateAndValidation, useSuccessModal } from "../../hooks";
import { FormData } from "../../types";
import { Form } from "./components";
import { motion } from "framer-motion";
import { fadeAnimation } from "../../animations";

export const Contact = () => {
  const defaultFormState: FormData = {
    name: "",
    email: "",
    selection: "",
  };

  const { formData, errors, handleChange, handleSubmit, resetFormData } = useFormStateAndValidation(defaultFormState);

  const { showSuccessModal, handleCloseModal, openModal } = useSuccessModal();

  const handleFormSubmit = (event: FormEvent) => {
    const isFormValid = handleSubmit(event);
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
