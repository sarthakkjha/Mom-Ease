//i want to create a blog page that will display the the blog selected, as blog heading, blog content,blog image, blog author, published date
import React from "react";
import "./BlogPage.css"
import { useLocation } from "react-router-dom";

const BlogInfo = () => {
  const location = useLocation();
  const { blog } = location.state || {};
  const date = blog.date ? new Date(blog.date).toLocaleDateString() : "";

  if (!blog) {
    return <div>No blog selected</div>;
  }

  return (
    <div className="blog-page">
      <div className="blog-heading">
        <h1>{blog.title}</h1>
      </div>
      
      <div className="blog-image">
        <img src={blog.image} alt={blog.heading} />
      </div>
      <p>
        {blog.summary
          ? blog.summary
          : "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer nec odio. Praesent libero. Sed cursus ante dapibus diam..."}
      </p>
      <div className="blog-meta">
        <span>By {blog.author}</span>
        <span>Published on {date}</span>
      </div>
    </div>
  );
};

export default BlogInfo;
