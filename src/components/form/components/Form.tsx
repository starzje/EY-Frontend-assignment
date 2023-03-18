import React, { ChangeEvent, FormEvent, FC } from "react";
import { FormData } from "../../../types";
import { Modal } from "../../shared/Modal";
import { CustomInput, CustomSelect } from "../index";

interface FormProps {
  formData: FormData;
  errors: Partial<FormData>;
  handleChange: (event: ChangeEvent<HTMLInputElement | HTMLSelectElement>) => void;
  handleSubmit: (event: FormEvent) => void;
  showSuccessModal: boolean;
  handleCloseModal: () => void;
}

export const Form: FC<FormProps> = ({
  formData,
  errors,
  handleChange,
  handleSubmit,
  showSuccessModal,
  handleCloseModal,
}) => {
  return (
    <>
      {showSuccessModal && (
        <Modal onClose={handleCloseModal} visible={showSuccessModal}>
          <h4 className="text-3xl mb-4">Message was submitted successfully.</h4>
          <button
            onClick={handleCloseModal}
            className="bg-slate-600 text-white py-2 w-full px-4 rounded-md hover:bg-slate-700 focus:outline-none"
          >
            Close
          </button>
        </Modal>
      )}
      <form
        onSubmit={handleSubmit}
        className="w-full max-w-lg mx-auto bg-primary-400 p-8 mb-20 rounded-lg shadow-lg"
        noValidate
      >
        <h4 className="text-3xl text-center mb-7">Get in touch</h4>
        <CustomInput
          id="name"
          name="name"
          value={formData.name}
          onChange={handleChange}
          label="Name"
          type="text"
          error={errors.name}
        />
        <CustomInput
          id="email"
          name="email"
          value={formData.email}
          onChange={handleChange}
          label="Email"
          type="email"
          error={errors.email}
        />
        <CustomSelect
          id="selection"
          name="selection"
          value={formData.selection}
          onChange={handleChange}
          label="Pick an animal"
          error={errors.selection}
        >
          <option value="" disabled hidden>
            Pick an animal...
          </option>
          <option value="macka">Mačka</option>
          <option value="pas">Pas</option>
          <option value="hrcak">Hrčak</option>
        </CustomSelect>
        <button
          type="submit"
          className="w-full bg-slate-600 text-white py-2 px-4 rounded-md hover:bg-slate-700 focus:outline-none"
        >
          Submit
        </button>
      </form>
    </>
  );
};
