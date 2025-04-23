import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { PostComponent } from './postdetails/postdetails.component';

@Component({
  selector: 'app-root',
  imports: [PostComponent, RouterOutlet],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'rest-demo';
}
