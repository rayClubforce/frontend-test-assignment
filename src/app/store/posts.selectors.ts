import { createFeatureSelector, createSelector } from '@ngrx/store';

import { postsUniqueKey, PostsState } from '@app/store/posts.reducer';

const postsState = createFeatureSelector<PostsState>(postsUniqueKey);

export const getPosts = createSelector(postsState, ({ posts }) => posts || []);
export const getSelectedPost = createSelector(
  postsState,
  ({ selectedPost }) => selectedPost
);
