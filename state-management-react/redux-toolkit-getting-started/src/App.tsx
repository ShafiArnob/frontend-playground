import { useDispatch, useSelector } from "react-redux";
import { RootState } from "./redux/store";
import {
  decrement,
  increment,
  incrementByAmount,
} from "./redux/features/counter/counterSlice";

function App() {
  const { count } = useSelector((state: RootState) => state.counter);
  const dispatch = useDispatch();
  return (
    <>
      <div className="flex flex-row space-x-4">
        <button
          onClick={() => dispatch(decrement())}
          className="border border-black p-2"
        >
          -
        </button>
        <p>{count}</p>
        <button
          onClick={() => dispatch(increment())}
          className="border border-black p-2"
        >
          +
        </button>
        <button
          onClick={() => dispatch(incrementByAmount(10))}
          className="border border-black p-2"
        >
          +10
        </button>
      </div>
    </>
  );
}

export default App;
