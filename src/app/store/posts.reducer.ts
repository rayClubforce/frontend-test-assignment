import { createReducer, on } from '@ngrx/store';

import { Post } from '@app/models/post';
import {
  fetchPosts_Success,
  getPost,
  getPost_Success,
} from '@app/store/posts.actions';

export const postsUniqueKey = 'posts';

export interface PostsState {
  posts?: Post[];
  selectedPost?: Post;
}

const initialState: PostsState = {
  posts: undefined,
  selectedPost: undefined,
};

export const postsReducer = createReducer(
  initialState,
  on(fetchPosts_Success, (state, { posts }) => ({
    ...state,
    posts,
  })),
  on(getPost, (state) => ({ ...state, selectedPost: undefined })),
  on(getPost_Success, (state, { selectedPost }) => ({
    ...state,
    selectedPost,
  }))
);
