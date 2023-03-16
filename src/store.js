import { configureStore } from "@reduxjs/toolkit";

import postsReducer from "./features/posts/postSlice";
import subredditReducer from "./features/subreddit/subredditSlice";
import searchReducer from "./features/search/searchSlice";
import topicReducer from "./features/topic/topicSlice";

export default configureStore({
  reducer: {
    posts: postsReducer,
    subreddit: subredditReducer,
    search: searchReducer,
    topic: topicReducer,
  },
});
