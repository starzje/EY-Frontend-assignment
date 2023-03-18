import { ChangeEvent, FormEvent } from "react";

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
