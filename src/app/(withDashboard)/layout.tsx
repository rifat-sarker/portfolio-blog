import Sidebar from "@/components/shared/Sidebar";

export default function DashboardLayout({ children }) {
  return (
    <div>
      <header>Navbar</header>
      <div className="flex">
        <div className="w-1/4">
          <Sidebar />
        </div>
        <div className="w-3/4">{children}</div>
      </div>
    </div>
  );
}
