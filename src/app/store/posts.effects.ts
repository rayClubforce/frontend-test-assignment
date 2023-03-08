import { Injectable } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';

import { switchMap } from 'rxjs';
import { Post } from '@app/models/post';

import { PostService } from '@app/services/post.service';
import {
  fetchPosts,
  fetchPosts_Success,
  getPost,
  getPost_Success,
  createPost,
  createPost_Success,
} from '@app/store/posts.actions';

@Injectable()
export class PostsEffects {
  fetchPosts$ = createEffect(() =>
    this.actions$.pipe(
      ofType(fetchPosts),
      switchMap(({ filter }) =>
        this.postService
          .fetchPosts(filter)
          .pipe(switchMap((posts: Post[]) => [fetchPosts_Success({ posts })]))
      )
    )
  );

  getPost$ = createEffect(() =>
    this.actions$.pipe(
      ofType(getPost),
      switchMap(({ postId }) =>
        this.postService
          .getPost(postId)
          .pipe(
            switchMap((selectedPost: Post) => [
              getPost_Success({ selectedPost }),
            ])
          )
      )
    )
  );

  createPost$ = createEffect(() =>
    this.actions$.pipe(
      ofType(createPost),
      switchMap(({ post: { title, body } }) =>
        this.postService
          .createPost(title, body)
          .pipe(switchMap(() => [createPost_Success()]))
      )
    )
  );

  constructor(private actions$: Actions, private postService: PostService) {}
}
