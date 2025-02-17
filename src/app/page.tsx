import Link from "next/link";

export default function HomePage() {
  return (
    <div className=" text-center space-y-4">
      <h1 className="text-4xl text-center font-bold my-4">Home Page</h1>
      <Link className="border p-2" href="/dashboard">Go to Dashboard</Link>
    </div>
  )
};
