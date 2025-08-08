import React from "react";

export const Input = ({ className = "", ...props }) => {
  return (
    <input
      type="text"
      className={`px-4 py-2 border rounded-md ${className}`}
      {...props}
    />
  );
};
