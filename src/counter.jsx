import { useDispatch, useSelector } from "react-redux";
import { incrementAction, decrementAction } from "./counterSlice";


const Counter = () => {
  const dispatch = useDispatch();
  const value = useSelector(state => state.counter.value)
  return (
    <>
      <div>value : {value}</div>
      <br />
      <button onClick={()=>dispatch(incrementAction())}>increment</button>
      <button onClick={()=>dispatch(decrementAction())}>decrement</button>
    </>
    );
}
 
export default Counter;