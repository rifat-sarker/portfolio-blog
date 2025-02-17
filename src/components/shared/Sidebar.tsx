import Link from "next/link";
import { AiFillProject } from "react-icons/ai";
import { BiSolidMessageSquareDetail } from "react-icons/bi";
import { FaBlog } from "react-icons/fa";
import { MdDashboard } from "react-icons/md";

export default function Sidebar() {
  return (
    <div className="min-h-screen p-4 rounded-xl ">
      <ul className="space-y-4">
        <li>
          <Link
            href="/dashboard"
            className="flex items-center space-x-2 p-3 rounded-md hover:bg-slate-200"
          >
            <MdDashboard className="h-5 w-5" />
            <span>Dashboard</span>
          </Link>
        </li>
        <li>
          <Link
            href="/dashboard/projects"
            className="flex items-center space-x-2 p-3 rounded-md hover:bg-slate-200"
          >
            <AiFillProject className="h-5 w-5" />
            <span>Project Management</span>
          </Link>
        </li>
        <li>
          <Link
            href="/dashboard/blogs"
            className="flex items-center space-x-2 p-3 rounded-md hover:bg-slate-200"
          >
            <FaBlog className="h-5 w-5" />
            <span>Blog Management</span>
          </Link>
        </li>
        <li>
          <Link
            href="/dashboard/messages"
            className="flex items-center space-x-2 p-3 rounded-md hover:bg-slate-200"
          >
            <BiSolidMessageSquareDetail className="h-5 w-5" />
            <span>Message Management</span>
          </Link>
        </li>
      </ul>
    </div>
  );
}
