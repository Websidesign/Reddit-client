import { Link } from "react-router-dom";
import { useLocation } from "react-router-dom";

const Post = ({ post }) => {
  const url = useLocation();

  let media;
  switch (post.post_hint) {
    case "hosted:video":
    case "reddit_video":
      media = (
        <div className="w-full h-auto">
          <iframe
            src={post.secure_media.reddit_video.fallback_url}
            height={post.secure_media.reddit_video.height}
            width={post.secure_media.reddit_video.width}
            title={post.secure_media.reddit_video.fallback_url}
            className="max-w-[100%] mx-auto max-h-[700px]"
          />
        </div>
      );
      break;
    case "link":
      // media = (
      //   <div>
      //     <h5>Link</h5>
      //   </div>
      // );
      break;
    case "image":
      media = (
        <div>
          <img src={post.url} alt="asd" className="mx-auto max-h-[700px]" />
        </div>
      );
      break;
    case "self":
      // media = (
      //   <div>
      //     <h5>self</h5>
      //   </div>
      // );
      break;
    case undefined:
      break;
    default:
      return;
  }
  return (
    <div className="mb-12 bg-gray-700 flex">
      <div className="bg-gray-800 w-10 py-2 lg:w-14 px-2 lg:px-2 lg:py-4 text-center">
        <button>
          <div className="w-5 h-5 mx-auto">
            <img src="/arrowIcon.svg" alt="Upvote arrow icon" />
          </div>
        </button>
        <div className="py-3 mb-1">
          {post.ups > 999 && Math.round(post.ups / 1000) + "K"}
          {post.ups <= 999 && post.ups}
        </div>
        <div className="w-5 h-5 mx-auto rotate-180">
          <img src="/arrowIcon.svg" alt="Upvote arrow icon" />
        </div>
      </div>
      <div className="p-4 w-full">
        {post.subreddit}
        {url.pathname === "/" && (
          <Link to={`subreddit/${post.subreddit_name_prefixed}`}>
            <h3 className="font-bold text-sm">{post.author}</h3>
            <h2 className="text-lg mb-3">{post.title}</h2>
            {media}
          </Link>
        )}
        {url.pathname !== "/" && (
          <>
            <h3 className="font-bold text-sm">{post.author}</h3>
            <h2 className="text-lg mb-3">{post.title}</h2>
            {media}
          </>
        )}
      </div>
    </div>
  );
};

export default Post;
