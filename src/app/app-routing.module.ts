import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { PostListComponent } from '@app/post-list/post-list.component';
import { PostDetailComponent } from '@app/post-detail/post-detail.component';
import { CreatePostComponent } from '@app/create-post/create-post.component';

const routes: Routes = [
  {
    path: '',
    component: PostListComponent,
  },
  {
    path: 'create',
    component: CreatePostComponent,
  },
  {
    path: ':postId',
    component: PostDetailComponent,
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
