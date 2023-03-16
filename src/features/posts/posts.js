import Post from "../../components/Post";

const Posts = ({ postsState }) => {
  if (!postsState) return;
  return (
    <div>
      {postsState.isFetching && (
        <div>
          <h6>Loading posts</h6>
        </div>
      )}
      {!postsState.isFetching &&
        postsState?.posts?.map((post, index) => (
          <Post post={post.data} key={index} />
        ))}
    </div>
  );
};

export default Posts;
