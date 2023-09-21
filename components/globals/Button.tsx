"use client"

import React from "react";
import PlusCircle from "../icons/PlusCircle";

type Props = {
  onClick: () => void
};

const Button = ({ onClick }: Props) => {
  return (
    <button onClick={onClick} className="flex items-center gap-x-2 px-6 py-2 border border-gray-300 rounded-md">
      <PlusCircle />
      Add
    </button>
  );
};

export default Button;
