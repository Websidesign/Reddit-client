import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useLocation } from "react-router-dom";

import Posts from "../posts/posts";
import { fetchSubreddit, selectSubreddit } from "./subredditSlice";
import SideBar from "../../components/SideBar";

const Subreddit = () => {
  const dispatch = useDispatch();

  const location = useLocation();
  const param = location.pathname.replace("/subreddit/", "");

  const subredditState = useSelector(selectSubreddit);

  useEffect(() => {
    dispatch(fetchSubreddit(`https://www.reddit.com/${param}.json`));
  }, [dispatch, param]);

  useEffect(() => {
    document.title = param + " - Reddit";
  }, [param]);

  return (
    <div className="pt-20">
      <div className="hidden xl:block w-56 z-30 fixed h-full min-h-screen">
        <SideBar />
      </div>
      <div className="p-4 lg:max-w-4xl container">
        <h3 className="font-bold text-3xl mb-10">Subreddit</h3>
        <Posts postsState={subredditState} />
      </div>
    </div>
  );
};

export default Subreddit;
