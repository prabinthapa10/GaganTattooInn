import React from "react";

export default function InputFields({ name, type }) {
  return (
    <div className="m-5">
      {type === "textarea" ? (
        <textarea
          placeholder={name}
          className="bg-black p-3 w-[380px] h-32 resize-none"
        />
      ) : (
        <input
          type={type}
          placeholder={name}
          className="bg-black p-3 w-[380px]"
        />
      )}
    </div>
  );
}
