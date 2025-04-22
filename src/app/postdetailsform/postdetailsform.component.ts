import { Component } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';
import { MatButton } from '@angular/material/button';
import { MatInput, MatFormField, MatError, MatLabel } from '@angular/material/input';
import {MatSelectModule} from '@angular/material/select';


@Component({
  selector: 'app-postdetailsform',
  imports: [
    ReactiveFormsModule,
    MatButton,
    MatInput,
    MatFormField,
    MatError,
    MatLabel,
    MatSelectModule
  ],
  templateUrl: './postdetailsform.component.html',
  styleUrl: './postdetailsform.component.css'
})
export class PostdetailsformComponent {

}
