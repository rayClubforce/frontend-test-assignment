import { Component } from '@angular/core';
import { Router } from '@angular/router';
import {
  FormBuilder,
  FormGroup,
  Validators,
  ValidatorFn,
  AbstractControl,
  ValidationErrors,
} from '@angular/forms';

import { Store } from '@ngrx/store';
import { Actions, ofType } from '@ngrx/effects';

import { PostsState } from '@app/store/posts.reducer';
import { createPost, createPost_Success } from '@app/store/posts.actions';

@Component({
  selector: 'app-create-post',
  templateUrl: './create-post.component.html',
})
export class CreatePostComponent {
  postForm!: FormGroup;

  constructor(
    private formBuilder: FormBuilder,
    private router: Router,
    private actions$: Actions,
    private store: Store<PostsState>
  ) {}

  ngOnInit(): void {
    this.postForm = this.formBuilder.group({
      title: [
        '',
        [
          Validators.required,
          Validators.minLength(1),
          this.startNameValidator(/^x/i),
        ],
      ],
      body: ['', Validators.required],
    });

    this.actions$
      .pipe(ofType(createPost_Success))
      .subscribe(() => this.router.navigate(['']));
  }

  startNameValidator(nameRe: RegExp): ValidatorFn {
    return (control: AbstractControl): ValidationErrors | null => {
      const startName = nameRe.test(control.value);
      console.log(startName);
      return startName ? null : { startName: { value: control.value } };
    };
  }

  createPost(postForm: FormGroup): void {
    if (postForm.invalid) return postForm.markAllAsTouched();

    const post = postForm.value;
    this.store.dispatch(createPost({ post }));
  }
}
