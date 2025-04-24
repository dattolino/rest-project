import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { MatButton, MatButtonModule } from '@angular/material/button';
import { MatSelectModule } from '@angular/material/select';
import { MatInput, MatFormField, MatError, MatLabel } from '@angular/material/input';
import { PostControllerService } from '../api-client/services/post-controller.service';
import { ActivatedRoute, Router } from '@angular/router';
import { MatGridListModule } from '@angular/material/grid-list';
import { CommonModule } from '@angular/common';
import { CategoryControllerService } from '../api-client/services/category-controller';
import { CategoryDto } from '../api-client/models';

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
    MatGridListModule,
    CommonModule,
    MatButtonModule
  ],
  templateUrl: './postdetailsform.component.html',
  styleUrl: './postdetailsform.component.css',
})
export class PostdetailsformComponent implements OnInit {

  postDetailsForm!: FormGroup;
  currentId!: number;
  isEditMode: boolean = false;
  categories!: Array<CategoryDto>;

  constructor(
    private postService: PostControllerService,
    private categoryService: CategoryControllerService,
    private route: ActivatedRoute,
    private router: Router,
  ) { }

  ngOnInit(): void {
    this.buildForm();

    this.categoryService.getCategories()
    .subscribe(data => this.categories = data);

    this.route.paramMap.subscribe(params => {
      const idParam = params.get('id');
      if (idParam) {
        this.isEditMode = true;
        this.currentId = +idParam;
        this.postService.getPost(this.currentId)
          .subscribe(post => this.postDetailsForm.patchValue(post));
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

