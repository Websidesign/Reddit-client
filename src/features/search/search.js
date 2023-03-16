import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useLocation } from "react-router-dom";

import { fetchSearch, selectSearchResults } from "./searchSlice";
import SideBar from "../../components/SideBar";
import Posts from "../posts/posts";

const Search = () => {
  const dispatch = useDispatch();

  const location = useLocation();
  const param = location.search.replace("?search=", "");

  useEffect(() => {
    dispatch(
      fetchSearch(
        `https://www.reddit.com/search.json?q=${param}&source=trending&type=sr`
      )
    );
  }, [dispatch, param]);

  const searchResults = useSelector(selectSearchResults);

  return (
    <div className="pt-20">
      <div className="hidden xl:block w-56 z-30 fixed h-full min-h-screen">
        <SideBar />
      </div>
      <div className="p-4 lg:max-w-4xl container">
        <div>
          <h3 className="font-bold text-3xl mb-4 mt-6">
            Results
            {param && ` for "${param}"`}
          </h3>
          {searchResults && <Posts postsState={searchResults} />}
        </div>
      </div>
    </div>
  );
};

export default Search;
