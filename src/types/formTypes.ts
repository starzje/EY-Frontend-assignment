import { ChangeEvent, FormEvent } from "react";

/**
 * Types and interfaces for form handling, events, and validation.
 * @module types
 * @typedef {Object} FormData - An object representing the form data.
 * @property {string} name - The name input value.
 * @property {string} email - The email input value.
 * @property {string} selection - The selection input value.
 * @typedef {Object} ValidationErrors - An object representing the result of form validation.
 * @property {FormValidationInputErrors} newErrors - An object containing any validation errors for the form data.
 * @property {boolean} isValid - A boolean indicating whether the form data is valid or not.
 * @typedef {ChangeEvent<HTMLInputElement | HTMLSelectElement>} InputChangeEvent - A type alias for input change events, covering both input and select elements.
 * @typedef {FormEvent} FormSubmitEvent - A type alias for form submit events.
 * @typedef {keyof FormData} FormKeys - A type alias for the keys of the FormData object.
 * @typedef {Partial<Record<FormKeys, string>>} FormValidationInputErrors - A type alias for an object containing validation error messages, indexed by form input keys.
 */
export interface FormData {
  name: string;
  email: string;
  selection: string;
}

export interface ValidationErrors {
  newErrors: FormValidationInputErrors;
  isValid: boolean;
}

export type InputChangeEvent = ChangeEvent<HTMLInputElement | HTMLSelectElement>;
export type FormSubmitEvent = FormEvent;

type FormKeys = keyof FormData;
export type FormValidationInputErrors = Partial<Record<FormKeys, string>>;
