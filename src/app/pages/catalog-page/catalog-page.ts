import { Component } from '@angular/core';
import { Film } from '../../models/film.model';
import { Films } from '../../services/films';

@Component({
  selector: 'app-catalog-page',
  standalone: false,
  templateUrl: './catalog-page.html',
  styleUrl: './catalog-page.css'
})

export class CatalogPage {
  constructor(
    private _filmsServices: Films
  ) {}

  public get films(): Film[] {
    return this._filmsServices.filteredFilms;
  }
}
