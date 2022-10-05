import { createSlice } from "@reduxjs/toolkit";
import type { PayloadAction } from "@reduxjs/toolkit";
import { RootState } from "../app/store";
import { Post } from "../../interfaces/Post";

export interface PostState {
  value: Post[];
}

const initialState: PostState = {
  value: [],
};

export const postSlice = createSlice({
  name: "post",
  initialState,
  reducers: {
    addPost: (state, action: PayloadAction<Post>) => {
      state.value.unshift(action.payload);
      //state.value = action.payload;
    },
    addAllPost: (state, action: PayloadAction<Post[]>) => {
      //state.value.push(...action.payload);
      state.value = action.payload;
    },
  },
});

export const { addPost, addAllPost } = postSlice.actions;
export const selectPost = (state: RootState) => state.post.value;
export default postSlice.reducer;
