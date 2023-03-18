import { useState, useCallback } from "react";
import { validateForm } from "../components";
import { FormData, FormSubmitEvent, InputChangeEvent } from "../types";

export const useFormStateAndValidation = (defaultFormState: FormData) => {
  const [errors, setErrors] = useState<Partial<FormData>>({});
  const [formData, setFormData] = useState<FormData>(defaultFormState);

  const handleChange = useCallback((event: InputChangeEvent) => {
    setFormData((prevFormData) => ({ ...prevFormData, [event.target.name]: event.target.value }));
  }, []);

  const handleSubmit = useCallback(
    (event: FormSubmitEvent) => {
      event.preventDefault();

      const validationResult = validateForm(formData);

      setErrors(validationResult.newErrors);

      if (!validationResult.isValid) {
        return false;
      }

      console.log(formData);
      return true;
    },
    [formData],
  );

  const resetFormData = useCallback(() => {
    setFormData(defaultFormState);
  }, [defaultFormState]);

  return { formData, errors, handleChange, handleSubmit, resetFormData };
};
