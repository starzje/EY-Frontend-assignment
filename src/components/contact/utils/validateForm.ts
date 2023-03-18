import { FormData, FormValidationInputErrors, ValidationErrors } from "../../../types";

const isValidEmail = (email: string): boolean => /\S+@\S+\.\S+/.test(email); // basic email regex validation

/**
 * Validates the given form data and returns an object containing any validation errors and a boolean indicating the overall validity of the form.
 * @function
 * @param {FormData} formData - The form data to be validated.
 * @returns {ValidationErrors} An object containing any validation errors and a boolean indicating the overall validity of the form.
 */
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
    isValid: Object.keys(newErrors).length === 0, // checks if there are any errors in the newErrors object
  };
};
