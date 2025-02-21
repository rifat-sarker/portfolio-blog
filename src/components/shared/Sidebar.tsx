"use client";

import { useState, useEffect, useRef } from "react";
import { signOut } from "next-auth/react";
import Link from "next/link";
import { AiFillProject } from "react-icons/ai";
import { BiSolidMessageSquareDetail } from "react-icons/bi";
import { FaBlog, FaSignOutAlt, FaBars } from "react-icons/fa";
import { IoHome } from "react-icons/io5";
import { MdDashboard } from "react-icons/md";

export default function Sidebar() {
  const [isOpen, setIsOpen] = useState(false);
  const sidebarRef = useRef<HTMLDivElement>(null);

  // Toggle sidebar
  const toggleSidebar = () => setIsOpen(!isOpen);

  // Close sidebar when clicking outside
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (
        sidebarRef.current &&
        !sidebarRef.current.contains(event.target as Node)
      ) {
        setIsOpen(false);
      }
    };
    if (isOpen) {
      document.addEventListener("mousedown", handleClickOutside);
    } else {
      document.removeEventListener("mousedown", handleClickOutside);
    }
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, [isOpen]);

  return (
    <div className="relative">
      {!isOpen && (
        <button
          className="absolute top-4 left-4 z-50 block md:hidden text-white bg-gray-800 p-2"
          onClick={toggleSidebar}
        >
          <FaBars className="h-6 w-6" />
        </button>
      )}

      {/* Sidebar */}
      <div
        ref={sidebarRef}
        className={`bg-white text-black min-h-screen p-4 border-r border-gray-300 fixed inset-y-0 left-0 transform transition-transform md:relative md:translate-x-0
          ${isOpen ? "translate-x-0" : "-translate-x-full"} md:block`}
      >
        <ul className="space-y-4">
          <li>
            <Link
              href="/"
              className="flex items-center p-3 hover:bg-gray-200"
              onClick={() => setIsOpen(false)}
            >
              <IoHome className="h-5 w-5" />
              <span className="ml-2">Home</span>
            </Link>
          </li>
          <li>
            <Link
              href="/dashboard"
              className="flex items-center p-3 hover:bg-gray-200"
              onClick={() => setIsOpen(false)}
            >
              <MdDashboard className="h-5 w-5" />
              <span className="ml-2">Dashboard</span>
            </Link>
          </li>
          <li>
            <Link
              href="/dashboard/projects"
              className="flex items-center p-3 hover:bg-gray-200"
              onClick={() => setIsOpen(false)}
            >
              <AiFillProject className="h-5 w-5" />
              <span className="ml-2">Project</span>
            </Link>
          </li>
          <li>
            <Link
              href="/dashboard/blogs"
              className="flex items-center p-3 hover:bg-gray-200"
              onClick={() => setIsOpen(false)}
            >
              <FaBlog className="h-5 w-5" />
              <span className="ml-2">Blog</span>
            </Link>
          </li>
          <li>
            <Link
              href="/dashboard/messages"
              className="flex items-center p-3 hover:bg-gray-200"
              onClick={() => setIsOpen(false)}
            >
              <BiSolidMessageSquareDetail className="h-5 w-5" />
              <span className="ml-2">Message</span>
            </Link>
          </li>
          <li>
            <button
              onClick={() => {
                signOut();
                setIsOpen(false);
              }}
              className="flex w-full items-center p-3 hover:bg-gray-200"
            >
              <FaSignOutAlt className="h-5 w-5" />
              <span className="ml-2">Logout</span>
            </button>
          </li>
        </ul>
      </div>
    </div>
  );
}
