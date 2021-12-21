import React from 'react';
import BlogView from '../views/Blog/BlogView';
import Seo from '../components/Seo';
const Blog = () => {
  return (
    <div>
      <Seo title="Blog" />
      <BlogView />
    </div>
  );
};

export default Blog;
