"use client";

import { signIn } from "next-auth/react";
import Image from "next/image";

export default function SocialLoginPage() {
  return (
    <div className="flex w-screen h-screen justify-center items-center">
      {/* Social Login Buttons */}
      <div className="flex flex-col justify-center gap-4 mt-4  p-5 pb-5 w-1/4 rounded-lg">
        <h2 className="text-2xl text-center py-4">Social Login</h2>
        <button
          onClick={() =>
            signIn("google", {
              callbackUrl: "http://localhost:3000/dashboard",
            })
          }
          className="flex items-center gap-2 border px-6 py-2 rounded-lg"
        >
          <Image
            src="https://www.freepnglogos.com/uploads/google-logo-png/google-logo-png-webinar-optimizing-for-success-google-business-webinar-13.png"
            width={30}
            height={30}
            alt="Google logo"
          />{" "}
          Sign with Google
        </button>
        <button
          onClick={() =>
            signIn("github", {
              callbackUrl: "http://localhost:3000/dashboard",
            })
          }
          className="flex items-center gap-2 border px-6 py-2 rounded-lg"
        >
          <Image
            src="https://cdn-icons-png.flaticon.com/512/25/25231.png"
            width={25}
            height={25}
            alt="GitHub logo"
          />
          Sign with GitHub
        </button>
      </div>
    </div>
  );
}
