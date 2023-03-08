import { Component } from '@angular/core';
import { FormControl } from '@angular/forms';
import { select, Store } from '@ngrx/store';

import { debounceTime, Observable } from 'rxjs';

import { fetchPosts } from '@app/store/posts.actions';
import { PostsState } from '@app/store/posts.reducer';
import { getPosts } from '@app/store/posts.selectors';

@Component({
  selector: 'app-post-list',
  templateUrl: './post-list.component.html',
})
export class PostListComponent {
  posts$!: Observable<any>;
  filter = new FormControl();

  constructor(private store: Store<PostsState>) {}

  ngOnInit(): void {
    this.posts$ = this.store.pipe(select(getPosts));

    this.store.dispatch(fetchPosts({ filter: '' }));

    this.filter.valueChanges.pipe(debounceTime(500)).subscribe((filter) => {
      this.store.dispatch(fetchPosts({ filter }));
    });
  }
}
