import { Routes } from '@angular/router';
import { PostdetailsformComponent } from './postdetailsform/postdetailsform.component';
import { PostComponent } from './postdetails/postdetails.component';

export const routes: Routes = [
    { path: '', component: PostComponent, pathMatch: 'full' },
    { path: 'edit/:id', component: PostdetailsformComponent}
];
