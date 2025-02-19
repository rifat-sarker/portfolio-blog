import Sidebar from "@/components/shared/Sidebar";

export default function DashboardLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <div>
      {/* <Navbar /> */}
      <div className="flex">
        <div className="w-[20%] shadow-lg rounded-lg">
          <Sidebar />
        </div>
        <div className="w-[80%] bg-[#023430] text-white">{children}</div>
      </div>
    </div>
  );
}
