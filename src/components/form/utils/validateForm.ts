import { FormData, FormValidationInputErrors, ValidationErrors } from "../../../types";

const isValidEmail = (email: string): boolean => /\S+@\S+\.\S+/.test(email);

export const validateForm = (formData: FormData): ValidationErrors => {
  const newErrors: FormValidationInputErrors = {};

  if (!formData.name.trim()) {
    newErrors.name = "Name is required";
  }

  if (!formData.email.trim()) {
    newErrors.email = "Email is required";
  } else if (!isValidEmail(formData.email)) {
    newErrors.email = "Invalid email address";
  }

  if (!formData.selection) {
    newErrors.selection = "Please select an animal";
  }

  return {
    newErrors,
    isValid: Object.keys(newErrors).length === 0,
  };
};
