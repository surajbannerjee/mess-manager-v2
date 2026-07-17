"use client";

import BaseInput, { BaseInputProps } from "./BaseInput";

const TextInput = (props: BaseInputProps) => {
  return <BaseInput type="text" {...props} />;
};

export default TextInput;
