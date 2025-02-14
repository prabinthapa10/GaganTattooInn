import React from "react";

export default function InputFields({ name, type, fieldName, value, onChange }) {
  return (
    <div className="mb-4 w-full">
      {type === "textarea" ? (
        <textarea
          name={fieldName}
          value={value}
          onChange={onChange}
          placeholder={name}
          className="bg-black text-white p-3 w-full h-32 resize-none rounded-md border border-gray-600 focus:border-red-500 focus:outline-none"
          aria-label={name}
        />
      ) : (
        <input
          type={type}
          name={fieldName}
          value={value}
          onChange={onChange}
          placeholder={name}
          className="bg-black text-white p-3 w-full rounded-md border border-gray-600 focus:border-red-500 focus:outline-none"
          aria-label={name}
        />
      )}
    </div>
  );
}
