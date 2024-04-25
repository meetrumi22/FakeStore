import React from "react";
import { forwardRef } from "react";

const Input = forwardRef(function Input(
  { label, type = "text", placeholder, value, className, ...props },
  ref
) {
  return (
    <div>
      {label && (
        <label className="text-lg font-semibold text-black">{label}</label>
      )}
      <input
        ref={ref}
        className={`${className} px-6 py-2 text-xl text-primary-100 font-normal outline -outline-offset-2  outline-blue-200`}
        placeholder={placeholder}
        type={type}
        value={value}
        {...props}
      />
    </div>
  );
});

export default Input;
