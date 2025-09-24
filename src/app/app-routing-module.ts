import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CatalogPage } from './pages/catalog-page/catalog-page';
import { FilmPage } from './pages/film-page/film-page';
import { NotFound } from './pages/not-found/not-found';

const routes: Routes = [
  {
    path: '',
    component: CatalogPage
  },
  {
    path: 'film/:id',
    component: FilmPage
  },
  {
    path: '**',
    component: NotFound
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
