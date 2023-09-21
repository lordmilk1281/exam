import React from "react";
import TextInput from "../globals/TextInput";
import Button from "../globals/Button";

type Props = {};

const ApplicantForm = (props: Props) => {
  return (
    <div className="space-y-3">
      <TextInput label="Name" onChange={() => {}} value="" />
      <TextInput label="Age" onChange={() => {}} value="" />
      <TextInput label="Email" onChange={() => {}} value="" />
      <TextInput label="Address" onChange={() => {}} value="" />
      <TextInput label="Phone" onChange={() => {}} value="" />
      <Button onClick={() => {}} />
    </div>
  );
};

export default ApplicantForm;
