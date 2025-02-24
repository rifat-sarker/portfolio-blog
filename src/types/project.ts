export type Project = {
  _id: string;
  title: string;
  image: string;
  live: string;
  code: string;
  description: string;
  category: "Frontend" | "Backend" | "Full Stack";
};
