import { useState, useCallback } from "react";
import { validateForm } from "../components";
import { FormData, FormSubmitEvent, InputChangeEvent } from "../types";

/**
 *  A custom React hook to manage form state and validation.
 * This hook handles form input changes, form submission, and resetting form data to its default state.
 * The hook uses the provided validateForm function to validate form data upon submission.
 * @module useFormStateAndValidation
 * @param {FormData} defaultFormState - An object representing the default form state.
 * @returns {Object} - An object containing the following properties:
 * @property {FormData} formData - An object representing the current form data.
 * @property {Partial<FormData>} errors - An object containing any validation errors for the form data.
 * @property {function} handleChange - A callback function that updates form data when input values change.
 * @property {function} handleSubmit - A callback function that validates form data and logs it to the console if valid, otherwise returns false.
 * @property {function} resetFormData - A callback function that resets the form data to its default state.
 */

export const useFormStateAndValidation = (defaultFormState: FormData) => {
  const [errors, setErrors] = useState<Partial<FormData>>({});
  const [formData, setFormData] = useState<FormData>(defaultFormState);

  const handleChange = useCallback((event: InputChangeEvent) => {
    setFormData((prevFormData) => ({ ...prevFormData, [event.target.name]: event.target.value })); // Update form data with new input value
  }, []);

  const handleSubmit = useCallback(
    (event: FormSubmitEvent) => {
      event.preventDefault();

      const validationResult = validateForm(formData);

      setErrors(validationResult.newErrors); // Update errors state with any new errors

      if (!validationResult.isValid) {
        // If form data is invalid, return false
        return false;
      }

      console.log(formData);
      return true; // If form data is valid, log it to the console and return true
    },
    [formData],
  );

  const resetFormData = useCallback(() => {
    setFormData(defaultFormState); // Reset form data to its default state
  }, [defaultFormState]);

  return { formData, errors, handleChange, handleSubmit, resetFormData };
};
