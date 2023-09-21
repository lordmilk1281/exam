import React from "react";
import MagnifyingGlass from "../icons/MagnifyingGlass";

type Props = {
  value: string;
  placeholder?: string;
  onChange: (value: string) => void;
};

const SearchField = ({ value, placeholder = "Search", onChange }: Props) => {
  return (
    <div className="border rounded-md border-gray-300 flex gap-x-2 items-center px-4 py-2 w-full">
      <MagnifyingGlass />
      <input
        value={value}
        placeholder={placeholder}
        className="focus:outline-0 w-full"
        onChange={event => onChange(event.target.value)}
      />
    </div>
  );
};

export default SearchField;
