import React, { useEffect } from "react";
import Post from "./Post";
import { useAppDispatch, useAppSelector } from "../store/app/hooks";
import { addAllPost, selectPost } from "../store/features/postSlice";
import axios from "axios";

interface postsProps {}

const Posts: React.FC<postsProps> = ({}) => {
  const dispatch = useAppDispatch();
  const posts = useAppSelector(selectPost);

  useEffect(() => {
    const fetchData = async () => {
      await axios.get("http://localhost:8080/api/post").then((response) => {
        dispatch(addAllPost(response.data));
      });
    };
    fetchData();
    console.log(posts);
  }, []);

  console.log(posts.length);

  return (
    <div>
      {posts.map((value, index) => (
        <Post post={value} key={index} />
      ))}
    </div>
  );
};

export default Posts;
