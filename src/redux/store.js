// import { configureStore } from "@reduxjs/toolkit";
// import postsReducer from "./getPost/postSlice";
// export const store = configureStore({
//   reducer: {
//     posts: postsReducer,
//   },
// });
import { configureStore } from "@reduxjs/toolkit";
import { jsonplaceholderApi } from "./services/jsonplaceholder";
export const store = configureStore({
  reducer: {
    [jsonplaceholderApi.reducerPath]: jsonplaceholderApi.reducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(jsonplaceholderApi.middleware),
});
