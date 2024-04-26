import React from "react";
import { useGetPostsByIdQuery } from "../redux/services/jsonplaceholder";
function Home() {
  const { data, error, isLoading } = useGetPostsByIdQuery(1);
  return <div>Home</div>;
}

export default Home;
