"use server";
export const project = async () => {
  try {
    const res = await fetch(`${process.env.NEXT_PUBLIC_BASE_API}/projects`, {
      method: "GET",
    });
    return res.json();
  } catch (error: any) {
    return Error(error);
  }
};
