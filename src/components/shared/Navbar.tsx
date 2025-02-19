"use client";

import Link from "next/link";
import { useState, useEffect } from "react";
import { MdOutlineMenu, MdClose } from "react-icons/md";
import { BsSun, BsMoon } from "react-icons/bs";
import { signOut } from "next-auth/react";

type TUserProps = {
  user?: {
    name?: string | null | undefined;
    email?: string | null | undefined;
    image?: string | null | undefined;
  };
};

export default function Navbar({ session }: { session: TUserProps | null }) {
  const [isOpen, setIsOpen] = useState(false);
  const [darkMode, setDarkMode] = useState(false);

  useEffect(() => {
    const savedTheme = localStorage.getItem("theme");
    if (savedTheme === "dark") {
      setDarkMode(true);
      document.documentElement.classList.add("dark");
    }
  }, []);

  const handleToggle = () => setIsOpen(!isOpen);
  const toggleTheme = () => {
    setDarkMode(!darkMode);
    if (!darkMode) {
      document.documentElement.classList.add("dark");
      localStorage.setItem("theme", "dark");
    } else {
      document.documentElement.classList.remove("dark");
      localStorage.setItem("theme", "light");
    }
  };

  return (
    <nav
      className={`p-4 shadow-md ${
        darkMode ? "bg-[#121212] text-white" : "bg-white text-black"
      }`}
    >
      <div className="container mx-auto flex justify-between items-center">
        {/* Logo */}
        <h1 className="text-3xl font-bold">
          <span className="text-blue-400">RI</span>
          <span className="text-red-400">FAT</span>
        </h1>

        {/* Desktop Screen */}
        <ul className="hidden lg:flex gap-6 font-medium">
          <li>
            <Link href="/">Home</Link>
          </li>
          <li>
            <Link href="/projects">Projects</Link>
          </li>
          <li>
            <Link href="/blog">Blog</Link>
          </li>
          <li>
            <Link href="/contact">Contact</Link>
          </li>
          <li>
            <Link href="/dashboard">Dashboard</Link>
          </li>
        </ul>

        <div className="hidden lg:flex items-center gap-4">
          <button
            onClick={toggleTheme}
            className="p-2 bg-gray-600 text-white rounded-lg shadow-md"
          >
            {darkMode ? <BsSun size={24} /> : <BsMoon size={24} />}
          </button>
          {session?.user ? (
            <Link
              onClick={() => signOut()}
              href="/"
              className="border border-teal-500 text-teal-500 px-5 py-2 rounded-md hover:bg-teal-500 hover:text-black transition duration-200"
            >
              Logout
            </Link>
          ) : (
            <Link href="/login" className="">
              <button className="border border-teal-500 text-teal-500 px-5 py-2 rounded-md hover:bg-teal-500 hover:text-black transition duration-200">
                Login
              </button>
            </Link>
          )}
        </div>

        {/* Mobile Menu Button */}
        <div className="lg:hidden text-2xl" onClick={handleToggle}>
          {isOpen ? <MdClose /> : <MdOutlineMenu />}
        </div>
      </div>

      {/* Mobile Screen */}
      {isOpen && (
        <div className="lg:hidden flex flex-col items-center gap-4 py-4 font-medium">
          <Link href="/" onClick={handleToggle}>
            Home
          </Link>
          <Link href="/projects" onClick={handleToggle}>
            Projects
          </Link>
          <Link href="/blog" onClick={handleToggle}>
            Blog
          </Link>
          <Link href="/contact" onClick={handleToggle}>
            Contact
          </Link>
          <Link href="/dashboard" onClick={handleToggle}>
            Dashboard
          </Link>
          <button
            onClick={toggleTheme}
            className="p-2 bg-gray-600 text-white rounded-lg shadow-md"
          >
            {darkMode ? <BsSun size={24} /> : <BsMoon size={24} />}
          </button>
          {session?.user ? (
            <Link
              onClick={() => signOut()}
              href="/"
              className="border border-teal-500 text-teal-500 px-5 py-2 rounded-md hover:bg-teal-500 hover:text-black transition duration-200"
            >
              Logout
            </Link>
          ) : (
            <Link href="/login" onClick={handleToggle}>
              <button className="border border-teal-500 text-teal-500 px-5 py-2 rounded-md hover:bg-teal-500 hover:text-black transition duration-200">
                Login
              </button>
            </Link>
          )}
        </div>
      )}
    </nav>
  );
}
