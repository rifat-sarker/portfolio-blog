"use server";

import { revalidateTag } from "next/cache";

export const project = async () => {
  try {
    const res = await fetch(`${process.env.NEXT_PUBLIC_BASE_API}/projects`, {
      next: {
        tags: ["PROJECT"],
      },
    });
    return res.json();
  } catch (error: any) {
    return Error(error);
  }
};

export const createProject = async (data: any) => {
  try {
    const res = await fetch(`${process.env.NEXT_PUBLIC_BASE_API}/projects`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(data),
    });

    if (!res.ok) throw new Error(`Error: ${res.status} - ${res.statusText}`);

    revalidateTag("PROJECT");
    return res.json();
  } catch (error: any) {
    console.error("Error:", error);
    return { success: false, message: error.message };
  }
};

export const deleteProject = async (projectId: string) => {
  try {
    const res = await fetch(
      `${process.env.NEXT_PUBLIC_BASE_API}/projects/${projectId}`,
      {
        method: "DELETE",
      }
    );
    revalidateTag("PROJECT");
    return res.json();
  } catch (error: any) {
    return Error(error);
  }
};
