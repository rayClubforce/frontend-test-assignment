import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { select, Store } from '@ngrx/store';

import { Observable } from 'rxjs';

import { getPost } from '@app/store/posts.actions';
import { PostsState } from '@app/store/posts.reducer';
import { getSelectedPost } from '@app/store/posts.selectors';

@Component({
  selector: 'app-post-detail',
  templateUrl: './post-detail.component.html',
})
export class PostDetailComponent {
  post$!: Observable<any>;

  constructor(
    private store: Store<PostsState>,
    private activatedRoute: ActivatedRoute
  ) {}

  ngOnInit(): void {
    this.post$ = this.store.pipe(select(getSelectedPost));

    this.activatedRoute.params.subscribe(({ postId }) =>
      this.store.dispatch(getPost({ postId }))
    );
  }
}
