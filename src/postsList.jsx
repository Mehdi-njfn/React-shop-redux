import { UseDispatch, useDispatch, useSelector } from "react-redux";
import { useEffect } from "react";
import { fetchPosts } from "./postSlice";

const PostsList = () => {
  const dispatch = useDispatch();
  const postlist = useSelector(({ posts: { postList } }) => postList);
  const flag = useSelector((state) => state.posts.fetchingPosts)
  console.log(flag);
  useEffect(() => {
    dispatch(fetchPosts())
  }, [])
  return (
    (flag ?<h1>Loading...</h1> :<div className="">
      {
        postlist.map(post =>
          <div style={{ width: "350px", margin: "10px", padding: "6px", border: "1px black solid" }} key={post.id}>{post.body}</div>)
      }
    </div>)
  );
}

export default PostsList;