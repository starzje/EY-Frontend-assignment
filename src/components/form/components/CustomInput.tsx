import React from "react";

interface CustomInputProps {
  type: "text" | "email";
  id: string;
  name: string;
  value: string;
  onChange: (event: React.ChangeEvent<HTMLInputElement>) => void;
  label: string;
  error?: string;
}

export const CustomInput: React.FC<CustomInputProps> = ({ type, id, name, value, onChange, label, error }) => {
  return (
    <div className="mb-4">
      <div className="relative ">
        <input
          type={type}
          id={id}
          name={name}
          value={value}
          onChange={onChange}
          className="border-2 peer block w-full appearance-none rounded-lg border-gray-300 bg-transparent px-2.5 pb-2.5 pt-3 text-gray-900 focus:border-slate-600 focus:outline-none focus:ring-0"
          placeholder=" "
          required
        />
        <label
          htmlFor={id}
          className="absolute top-2 left-1 z-10 origin-[0] -translate-y-4 scale-75 transform cursor-text select-none bg-primary-400 px-2 text-gray-600 duration-300 peer-placeholder-shown:top-1/2 peer-placeholder-shown:-translate-y-1/2 peer-placeholder-shown:scale-100 peer-focus:top-2 peer-focus:-translate-y-4 peer-focus:scale-75 peer-focus:px-2 peer-focus:text-slate-600 font-light"
        >
          {label}
        </label>
      </div>
      <span className="text-red-500 text-xs">{error}</span>
    </div>
  );
};
