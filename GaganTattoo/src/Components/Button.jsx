import React from "react";

export default function Button({ title, className }) {
  return (
    <button
      className={`bg-[#99180d] font-bold rounded-2xl cursor-pointer text-3xl w-90 px-3 py-4 hover:bg-[#99190de1] ${className}`}
    >
      {title}
    </button>
  );
}
