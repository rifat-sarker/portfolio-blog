import Sidebar from "@/components/shared/Sidebar";

export default function DashboardLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <div>
      <div className="flex">
        <div className="w-[20%]">
          <Sidebar />
        </div>
        <div className="w-[80%]">{children}</div>
      </div>
    </div>
  );
}
