import {
  QueryClient,
  QueryClientProvider,
  useQuery,
} from "@tanstack/react-query";

import React from "react";
import axios from "axios";

export default function PostsComponent() {
    const fetchPost = ()=>{
         axios("https://jsonplaceholder.typicode.com/posts")
        .then((res) => res.data)
        .then((body) => console.log("data : ", body))
    }
  const queryClent = useQueryClient();
  const { data, isLoading, error, refetch, isFetching } = useQuery(
    "posts",
    () => fetchPost
  );
  enabled: false;
  const cachedData = queryClent.getQueryData("posts");
  console.log("Cached data: ", cachedData);
  return (
    <>
      <div>PostsComponent</div>
      <button onClick={() => refetch()} disabled={isFetching}>
        {isFetching ? "Loading..." : "Fetch Pasts"}
      </button>
      {isLoading && <p>Loading...</p>}
      {error && <p className="text-red-600">Error loading the data</p>} {/* isError*/}
      {data.map((x) => (
        <div key={x.id}>Title: {x.title}</div>
      ))}
    </>
  );
}
