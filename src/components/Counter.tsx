import { useSelector } from "react-redux";
import { RootState } from "../store/store";
import { useDispatch } from "react-redux";
import { decrement, increment, reset } from "../store/counterSlice";

const Counter = (): JSX.Element => {
  const count = useSelector((state: RootState) => state.counter.value); //상태조회
  const dispatch = useDispatch(); // 액션 디스패치
  return (
    <div style={{ textAlign: "center", marginTop: "50px" }}>
      <h1>Redux Counter</h1>
      <h2>{count}</h2>
      <button onClick={() => dispatch(increment())}>Increment</button>
      <button onClick={() => dispatch(decrement())}>Decrement</button>
      <button onClick={() => dispatch(reset())}>Reset</button>
    </div>
  );
};

export default Counter;
