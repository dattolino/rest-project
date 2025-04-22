import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, ReactiveFormsModule } from '@angular/forms';
import { MatButton } from '@angular/material/button';
import { MatSelectModule } from '@angular/material/select';
import { MatInput, MatFormField, MatError, MatLabel } from '@angular/material/input';
import { PostControllerService } from '../api-client/services/post-controller.service';
import { ActivatedRoute, Router } from '@angular/router';

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
  ],
  templateUrl: './postdetailsform.component.html',
  styleUrl: './postdetailsform.component.css',
})
export class PostdetailsformComponent implements OnInit {
  postDetailsForm!: FormGroup;

  constructor(
    private postService: PostControllerService,
    private builder: FormBuilder,
    private route: ActivatedRoute,
    private router: Router
  ) {}

  ngOnInit(): void {
    this.buildForm();
  }

  private buildForm() {
    this.postDetailsForm = this.builder.nonNullable.group({
      titolo: [''],
      descrizione: [''],
      contenuto: [''],
    });
  }

  updateProduct(){
//this.postService
  //.updatePost(product.id, this.price!)
 // .subscribe(() => this.router.navigate(['/products']));


  }
}
