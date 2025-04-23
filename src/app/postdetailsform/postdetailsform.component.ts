import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { MatButton } from '@angular/material/button';
import { MatSelectModule } from '@angular/material/select';
import { MatInput, MatFormField, MatError, MatLabel } from '@angular/material/input';
import { PostControllerService } from '../api-client/services/post-controller.service';
import { ActivatedRoute, Router } from '@angular/router';
import { MatGridListModule } from '@angular/material/grid-list';

@Component({
  selector: 'app-postdetailsform',
  imports: [
    ReactiveFormsModule,
    MatButton,
    MatInput,
    MatFormField,
    MatError,
    MatLabel,
    MatSelectModule,
    MatGridListModule
  ],
  templateUrl: './postdetailsform.component.html',
  styleUrl: './postdetailsform.component.css',
})
export class PostdetailsformComponent implements OnInit {

  postDetailsForm!: FormGroup;
  currentId!: number;
  //currentPost!: PostDto;
  //categoryId = input<string>();
  isEditMode: boolean = false;

  constructor(
    private postService: PostControllerService,
    private builder: FormBuilder,
    private route: ActivatedRoute,
    private router: Router,
  ) { }

  ngOnInit(): void {
    this.buildForm();
    this.postDetailsForm.get('categoryId')?.disable();

    this.route.paramMap.subscribe(params => {
      const idParam = params.get('id');
      if (idParam) {
        this.isEditMode = true;
        this.currentId = +idParam;
        this.postService.getPost(this.currentId)
          .subscribe(post => {
            this.postDetailsForm.patchValue(post);
          });
      }
    });
  }

  private buildForm() {
    this.postDetailsForm = new FormGroup({
      title: new FormControl('', {
        nonNullable: true,
        validators: Validators.required
      }),
      description: new FormControl('', {
        nonNullable: true,
        validators: Validators.required
      }),
      categoryId: new FormControl(),
      content: new FormControl('', {
        nonNullable: true,
        validators: Validators.required
      })
    });
  }

  save() {
    this.postDetailsForm.get('categoryId')?.enable();
    const postData = this.postDetailsForm.value;

    if (this.isEditMode) {
      this.postService.updatePost(this.currentId, postData).subscribe(() => {
        this.router.navigate(['/']);
      });
    } else {
      this.postService.createPost(postData).subscribe(() => {
        this.router.navigate(['/']);
      });
    }
  }

}

