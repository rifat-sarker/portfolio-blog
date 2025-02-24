"use client";

import { useState } from "react";
import ProjectModal from "./ProjectModal";

export default function AddProjectButton() {
  const [isOpen, setIsOpen] = useState(false);
  return (
    <>
      <button
        onClick={() => setIsOpen(true)}
        className="px-6 py-2 rounded bg-[#176433] text-white my-4"
      >
        Add Project +
      </button>

      {isOpen && <ProjectModal closeModal={() => setIsOpen(false)} />}
    </>
  );
}
