import { Routes } from '@angular/router';
import { NotFoundComponent } from './pages/not-found/not-found.component';
import { AddProductFormComponent } from './pages/add-product-form/add-product-form.component';
import { HomeComponent } from './pages/home/home.component';

export const routes: Routes = [
  { path: '', redirectTo: 'home', pathMatch: 'full' },
  { path: 'home', component: HomeComponent },
  { path: 'add-product', component: AddProductFormComponent },
  { path: '**', component: NotFoundComponent },
];
