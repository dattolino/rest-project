import { Routes } from '@angular/router';
import { PostdetailsformComponent } from './postdetailsform/postdetailsform.component';
import { PostComponent } from './postdetails/postdetails.component';

export const routes: Routes = [
  { path: '', component: PostComponent }, // Questa è la rotta per la lista dei post
  { path: 'posts/new', component: PostdetailsformComponent }, // Roatta per creare un nuovo post
  { path: 'posts/:id', component: PostdetailsformComponent }, // Roatta per modificare un post esistente
  { path: '**', redirectTo: '', pathMatch: 'full' }, // Roatta per la gestione della pagina non trovata
];
