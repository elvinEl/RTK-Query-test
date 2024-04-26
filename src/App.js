import React, { useState } from "react";
import {
  useCreatePostMutation,
  useGetCommentsByIdQuery,
  useGetPostsByIdQuery,
} from "./redux/services/jsonplaceholder";
import Home from "./components/Home";
function App() {
  const [title, setTitle] = useState("");
  const [body, setBody] = useState("body");
  const { data: posts, error, isLoading } = useGetPostsByIdQuery(1);
  const { data: comments } = useGetCommentsByIdQuery(2);

  const [createPost, { isLoading: postLoading, isError, error: postError }] =
    useCreatePostMutation();
  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await createPost({ title, body }).unwrap();
    } catch (err) {
      console.log(err);
    }
  };
  return (
    <div>
      <Home />

      <form onSubmit={handleSubmit}>
        <input
          value={title}
          onChange={(e) => setTitle(e.target.value)}
          type="text"
          name="title"
        />
        <textarea
          value={body}
          onChange={(e) => setBody(e.target.value)}
          cols="30"
          name="body"
          rows="10"
        ></textarea>
        <button type="submit" disabled={isLoading}>
          Create post
        </button>
      </form>
    </div>
  );
}

export default App;
