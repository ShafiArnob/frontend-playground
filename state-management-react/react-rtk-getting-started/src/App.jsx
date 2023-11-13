import { useState } from "react";
import Counter from "./features/counter/Counter";
import "./App.css";

function App() {
  const [count, setCount] = useState(0);

  return (
    <main>
      <Counter />
    </main>
  );
}

export default App;
