import React, { FormEvent } from "react";
import { useFormStateAndValidation, useSuccessModal } from "../../hooks";
import { FormData } from "../../types";
import { Form } from "./components";

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
    <section>
      <Form
        formData={formData}
        errors={errors}
        handleChange={handleChange}
        handleSubmit={handleFormSubmit}
        showSuccessModal={showSuccessModal}
        handleCloseModal={handleCloseModal}
      />
    </section>
  );
};
