import "./App.css";
import { useState } from "react";
import Counter from "./features/counter/Counter";
import PostsList from "./features/posts/PostsList";
import AddPostForm from "./features/posts/AddPostForm";
import { store } from "./app/store";
import { fetchUsers } from "./features/users/usersSlice";

function App() {
  const [count, setCount] = useState(0);

  store.dispatch(fetchUsers());

  return (
    <main className="App">
      <AddPostForm />
      <PostsList />
    </main>
  );
}

export default App;
