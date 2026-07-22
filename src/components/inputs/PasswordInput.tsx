"use client";

import { useState } from "react";
import { Eye, EyeOff, Lock } from "lucide-react";
import BaseInput, { BaseInputProps } from "./BaseInput";

const PasswordInput = (props: BaseInputProps) => {
  const [showPassword, setShowPassword] = useState(false);

  return (
    <BaseInput
      {...props}
      type={showPassword ? "text" : "password"}
      leftIcon={<Lock size={18} />}
      rightIcon={
        <button
          type="button"
          onClick={() => setShowPassword((prev) => !prev)}
          className="flex items-center justify-center text-muted-foreground transition-colors hover:text-foreground"
          tabIndex={-1}
          aria-label={showPassword ? "Hide password" : "Show password"}
        >
          {showPassword ? <Eye size={20} /> : <EyeOff size={20} />}
        </button>
      }
    />
  );
};

export default PasswordInput;
