import Navbar from "@/components/shared/Navbar";
import { authOptions } from "@/utils/actions/authOptions";
import { getServerSession } from "next-auth";

export default async function DashboardLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const session = await getServerSession(authOptions);
  console.log(session);
  return (
    <div>
      <Navbar session={session} />
      <div>{children}</div>
    </div>
  );
}
