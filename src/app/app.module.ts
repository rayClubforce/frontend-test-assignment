import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { StoreModule } from '@ngrx/store';
import { EffectsModule } from '@ngrx/effects';
import { StoreDevtoolsModule } from '@ngrx/store-devtools';

import { AppComponent } from '@app/app.component';
import { AppRoutingModule } from '@app/app-routing.module';

import { postsReducer } from '@app/store/posts.reducer';
import { PostsEffects } from '@app/store/posts.effects';

import { PostListComponent } from '@app/post-list/post-list.component';
import { PostListItemComponent } from '@app/post-list/shared/post-list-item/post-list-item.component';
import { PostDetailComponent } from '@app/post-detail/post-detail.component';
import { CreatePostComponent } from '@app/create-post/create-post.component';

const COMPONENTS = [
  AppComponent,
  PostListComponent,
  PostListItemComponent,
  PostDetailComponent,
  CreatePostComponent,
];

@NgModule({
  declarations: [
    COMPONENTS,
    PostListComponent,
    PostListItemComponent,
    PostDetailComponent,
    CreatePostComponent,
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule,
    AppRoutingModule,
    StoreModule.forRoot({ posts: postsReducer }),
    EffectsModule.forRoot([PostsEffects]),
    StoreDevtoolsModule.instrument(),
  ],
  bootstrap: [AppComponent],
})
export class AppModule {}
