import Counter from '../counter';
import PostList from '../postList';
import PostsList from '../postsList';
import { useContext } from "react";
import { shopContext } from "../context/shopContext";



const Dashboard = () => {
  //const {isAuth} = useContext(shopContext);

  return (
    <div className="App " style={{marginInline:'auto', height:"100%"}}>
      <Counter />
      <br />
      <PostList />
      <br />
      <PostsList />
    </div>
  );
}

export default Dashboard;
