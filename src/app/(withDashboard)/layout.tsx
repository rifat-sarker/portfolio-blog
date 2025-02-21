import Sidebar from "@/components/shared/Sidebar";

export default function DashboardLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <div>
      <div className="flex gap-4">
        <div className="w-[15%]">
          <Sidebar />
        </div>
        <div className="w-[85%]">{children}</div>
      </div>
    </div>
  );
}
