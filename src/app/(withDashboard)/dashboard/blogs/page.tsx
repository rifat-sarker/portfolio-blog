import AddBlogButton from "@/components/modules/Blog/AddBlogButton";
import BlogCard from "@/components/modules/Blog/BlogCard";
import { blog } from "@/services/Blog";
import { Blog } from "@/types/blog";

export default async function BlogPage() {
  const blogs = await blog();
  // console.log(blog.data);
  return (
    <div className="p-4">
      <AddBlogButton />
      <div className="grid grid-cols-1 lg:grid-cols-4 md:grid-cols-3 gap-4">
        {blogs.data.map((blog: Blog) => (
          <BlogCard key={blog._id} blog={blog} />
        ))}
      </div>
    </div>
  );
}
