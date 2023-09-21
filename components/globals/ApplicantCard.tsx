import React from "react";

type Props = {};

const ApplicantCard = ({ id, name, email, application }: Applicant) => {
  return (
    <div className="border border-gray-200 rounded-lg p-2 text-center space-y-2">
      <p className="text-gray-900 font-medium">{id} - {name}</p>
      <p className="text-gray-700 text-sm">{email}</p>
      <p className="text-gray-500 text-sm">{application.position} {application.startDate}</p>
      <button className="text-sm border border-gray-200 rounded-md py-2 px-4 bg-white hover:bg-gray-50 transition-colors ">View Details</button>
    </div>
  );
};

export default ApplicantCard;
