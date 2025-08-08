// src/components/ui/button.tsx
import React from "react";

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {}

export const Button: React.FC<ButtonProps> = ({ children, ...props }) => {
  return (
    <button {...props}>
      {children}
    </button>
  );
};
