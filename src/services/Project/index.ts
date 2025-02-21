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

    return res.json();
  } catch (error: any) {
    console.error("Error:", error);
    return { success: false, message: error.message };
  }
};
