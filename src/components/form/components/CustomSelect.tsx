import React from "react";

interface CustomSelectProps {
  id: string;
  name: string;
  value: string;
  onChange: (event: React.ChangeEvent<HTMLSelectElement>) => void;
  label: string;
  children: React.ReactNode;
  error?: string;
}

export const CustomSelect: React.FC<CustomSelectProps> = ({ id, name, value, onChange, label, children, error }) => {
  return (
    <div className="relative">
      <div className="relative mb-7">
        <select
          id={id}
          name={name}
          value={value}
          onChange={onChange}
          className="border-2 peer block w-full appearance-none rounded-lg border-gray-300 bg-transparent px-2.5 pb-2.5 pt-3 text-gray-900 focus:border-slate-600 focus:outline-none focus:ring-0"
          required
        >
          {children}
        </select>
        <label
          htmlFor={id}
          className={`absolute top-2 left-1 z-10 origin-[0] -translate-y-4 scale-75 transform cursor-text select-none bg-primary-400 px-2 text-gray-600 duration-300 peer-placeholder-shown:top-1/2 peer-placeholder-shown:-translate-y-2/4 peer-placeholder-shown:scale-100 peer-focus:top-2 peer-focus:-translate-y-4 peer-focus:scale-75 peer-focus:px-2 peer-focus:text-slate-600 font-light peer-invalid:top-1/2 peer-invalid:-translate-y-2/4 peer-invalid:text-slate-600 ${
            value ? "opacity-100" : "opacity-0"
          }`}
        >
          {label}
        </label>
      </div>
      <span className="text-red-500 text-xs mt-1 absolute -bottom-5 left-0">{error}</span>
      <div className="pointer-events-none absolute inset-y-0 right-0 flex items-center px-2 text-gray-700">
        <svg className="fill-current h-4 w-4" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20">
          <path d="M4.516 7.548c.436-.446 1.043-.481 1.576 0L10 11.295l3.908-3.747c.533-.481 1.141-.446 1.574 0 .436.445.408 1.197 0 1.615-.406.418-4.695 4.502-4.695 4.502a1.095 1.095 0 01-1.576 0s-4.287-4.084-4.695-4.502c-.409-.418-.436-1.17 0-1.615z" />
        </svg>
      </div>
    </div>
  );
};
