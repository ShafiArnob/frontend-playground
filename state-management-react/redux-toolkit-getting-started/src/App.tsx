import {
  decrement,
  increment,
  incrementByAmount,
} from "./redux/features/counter/counterSlice";
import { useAppDispatch, useAppSelector } from "./redux/hook";

function App() {
  const { count } = useAppSelector((state) => state.counter);
  const dispatch = useAppDispatch();
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
