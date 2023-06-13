import { useEffect, useState } from 'react';
import BlogPostService from '../../Services/BlogPostService';
import { BlogPost } from '../../types/models/BlogPost.model';
import AlcoholCard from '../molecules/Card/AlcoholCard';
import Header from '../molecules/Header/Header';

export default function HomePage() {
  const [blogs, setBlogs] = useState<BlogPost[]>([]);
  const [page, setPage] = useState<number>(0);
  const [postPerPage, setPostPerPage] = useState<number>(5);

  useEffect(() => {
    BlogPostService.getAllFromPageWithLimitBlogPosts(postPerPage, page)
      .then((res) => {setBlogs(res.data);})
  }, [page]);

  const test = {
    name: "malfy",
    type: "gin",
    count: 1,
    percentage:22,
    country:"italy",
    description:"fruity",
    rating:4,
  }

  return (
    <div>
      <Header/>
    <AlcoholCard prop={test}/>
    </div>
  );
}
