import React from "react";

type Props = {
  label: string;
  value: string;
  onChange: (value: string) => void;
  placeholder?: string;
};

const TextInput = ({ label, value, onChange, placeholder }: Props) => {
  return (
    <div className="space-y-1">
      <label className="text-gray-700 font-medium">{label}</label>
      <input
        value={value}
        placeholder={placeholder}
        className="placeholder:text-gray-500 border w-full border-gray-300 px-4 py-2 focus:outline-gray-300 rounded-md"
        onChange={event => onChange(event.target.value)}
      />
    </div>
  );
};

export default TextInput;
