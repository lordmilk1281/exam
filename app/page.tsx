"use client";

import ApplicantCard from "@/components/globals/ApplicantCard";
import applicantsRaw from "../public/applicants.json";
import SearchField from "@/components/globals/SearchField";
import { useEffect, useState } from "react";
import Button from "@/components/globals/Button";
import DialogModal from "@/components/globals/Dialog";
import ApplicantForm from "@/components/forms/ApplicantForm";

export default function Home() {
  const [search, setSearch] = useState("");
  const [applicants, setApplicants] = useState<Applicant[]>([]);
  const [drawerOpen, setDrawerOpen] = useState(false);

  const filterApplicants = (filter: string) => {
    if (filter.length === 0) {
      setApplicants(applicantsRaw);
      return
    }

    const filteredList = applicants.filter(applicant =>
      applicant.name.includes(filter)
    );
    setApplicants(filteredList);
  };

  useEffect(() => {
    setApplicants([...applicantsRaw]);
  }, []);

  return (
    <>
      <div className="mx-auto container p-8">
        <h1 className="text-2xl font-semibold mb-4">All Applications</h1>
        <section className="mb-6 flex gap-x-4">
          <SearchField
            value={search}
            onChange={value => {
              setSearch(value);
              filterApplicants(value);
            }}
          />
          <Button onClick={() => setDrawerOpen(true)} />
        </section>
        <section className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
          {applicants.length > 0 ? (
            applicants.map(applicant => (
              <ApplicantCard key={applicant.id} {...applicant} />
            ))
          ) : (
            <p>No Applicants found</p>
          )}
        </section>
      </div>
      <DialogModal
        isOpen={drawerOpen}
        title="New Applicant"
        onClose={() => setDrawerOpen(false)}
      >
        <ApplicantForm />
      </DialogModal>
    </>
  );
}
