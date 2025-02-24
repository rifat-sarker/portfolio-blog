export type Blog = {
  _id: string;
  title: string;
  content: string;
  image: string;
  category: "Technology" | "Lifestyle" | "Health" | "Education" | "Business";
};
