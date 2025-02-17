import Link from "next/link";
import { AiFillProject } from "react-icons/ai";
import { BiSolidMessageSquareDetail } from "react-icons/bi";
import { FaHome, FaBlog } from "react-icons/fa";

export default function Sidebar() {
  return (
    <div className="bg-slate-100 min-h-screen p-4 rounded-xl">
      <ul className="space-y-4">
        <li>
          <Link
            href="/dashboard"
            className="flex items-center space-x-2 p-3 rounded-md hover:bg-gray-200 text-gray-700"
          >
            <FaHome className="h-5 w-5" />
            <span>Dashboard</span>
          </Link>
        </li>
        <li>
          <Link
            href="/dashboard/projects"
            className="flex items-center space-x-2 p-3 rounded-md hover:bg-gray-200 text-gray-700"
          >
            <AiFillProject className="h-5 w-5" />
            <span>Project Management</span>
          </Link>
        </li>
        <li>
          <Link
            href="/dashboard/blogs"
            className="flex items-center space-x-2 p-3 rounded-md hover:bg-gray-200 text-gray-700"
          >
            <FaBlog className="h-5 w-5" />
            <span>Blog Management</span>
          </Link>
        </li>
        <li>
          <Link
            href="/dashboard/messages"
            className="flex items-center space-x-2 p-3 rounded-md hover:bg-gray-200 text-gray-700"
          >
            <BiSolidMessageSquareDetail className="h-5 w-5" />
            <span>Message Management</span>
          </Link>
        </li>
      </ul>
    </div>
  );
}
