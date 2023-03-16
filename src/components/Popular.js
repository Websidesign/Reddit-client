import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";

import { selectPosts } from "../features/posts/postSlice";
import Posts from "../features/posts/posts";
import { fetchPosts } from "../features/posts/postSlice";

import SideBar from "./SideBar";

const Popular = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchPosts(`https://www.reddit.com/r/popular.json`));
  }, [dispatch]);

  useEffect(() => {
    document.title = "Reddit";
  }, []);

  const postsState = useSelector(selectPosts);
  return (
    <div className="pt-20">
      <div className="hidden xl:block w-56 z-30 fixed h-full min-h-screen">
        <SideBar />
      </div>
      <div className="p-4 lg:max-w-4xl container">
        <div>
          <h3 className="font-bold text-3xl mb-4 mt-6">Popular</h3>
          <Posts postsState={postsState} />
        </div>
      </div>
    </div>
  );
};

export default Popular;
