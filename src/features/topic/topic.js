import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useLocation } from "react-router-dom";

import Posts from "../posts/posts";
import { fetchTopic, selectTopic } from "./topicSlice";
import SideBar from "../../components/SideBar";

const Topic = () => {
  const dispatch = useDispatch();

  const location = useLocation();
  const param = location.pathname.replace("/t/", "");

  const topicState = useSelector(selectTopic);

  useEffect(() => {
    dispatch(fetchTopic(`http://www.reddit.com/search.json?q=${param}`));
  }, [dispatch, param]);

  return (
    <div className="pt-20">
      <div className="hidden xl:block w-56 z-30 fixed h-full min-h-screen">
        <SideBar />
      </div>
      <div className="p-4 lg:max-w-4xl container">
        <h3 className="font-bold text-3xl mb-10">{param || "Topic"}</h3>
        <Posts postsState={topicState} />
      </div>
    </div>
  );
};

export default Topic;
