"use client";

import { useState } from "react";
import BlogModal from "./BlogModal";

export default function AddBlogButton() {
  const [isOpen, setIsOpen] = useState(false);
  return (
    <>
      <button
        onClick={() => setIsOpen(true)}
        className="px-6 py-2 rounded bg-[#176433] text-white my-4"
      >
        Add Blog +
      </button>

      {isOpen && <BlogModal closeModal={() => setIsOpen(false)} />}
    </>
  );
}