import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
export const jsonplaceholderApi = createApi({
  reducerPath: "jsonplaceholderApi",
  baseQuery: fetchBaseQuery({ baseUrl: "https://jsonplaceholder.org/" }),
  endpoints: (builder) => ({
    getPostsById: builder.query({
      query: (id) => `posts/${id}`,
    }),
    createPost: builder.mutation({
      query: (newPost) => ({
        url: "posts",
        method: "POST",
        body: newPost,
      }),
    }),
  }),
});

jsonplaceholderApi.injectEndpoints({
  endpoints: (builder) => ({
    getCommentsById: builder.query({
      query: (id) => `/comments/${id}`,
    }),
  }),
});

export const {
  useGetPostsByIdQuery,
  useCreatePostMutation,
  useGetCommentsByIdQuery,
} = jsonplaceholderApi;
