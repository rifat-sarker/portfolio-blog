
import Navbar from "@/components/shared/Navbar";
import Sidebar from "@/components/shared/Sidebar";

export default function DashboardLayout({ children }) {
  return (
    <div>
      <Navbar />
      <div className="flex">
        <div className="w-[20%] shadow-lg rounded-lg">
          <Sidebar />
        </div>
        <div className="w-[80%]">{children}</div>
      </div>
    </div>
  );
}
