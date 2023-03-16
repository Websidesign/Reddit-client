import React from "react";
import "./tailwind.css";
import { createBrowserRouter, RouterProvider } from "react-router-dom";

import Popular from "./components/Popular";
import Subreddit from "./features/subreddit/subreddit";
import Topic from "./features/topic/topic";
import Search from "./features/search/search";
import Navbar from "./components/Navbar";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Popular />,
  },
  {
    path: "subreddit/r/:subredditId",
    element: <Subreddit />,
  },
  {
    path: "/t/:topicId",
    element: <Topic />,
  },
  {
    path: "/search?",
    element: <Search />,
  },
]);

function App() {
  return (
    <div className="bg-gray-900 min-h-screen text-white">
      <Navbar />
      <RouterProvider router={router} />
    </div>
  );
}

export default App;
