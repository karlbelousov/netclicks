import { Component } from '@angular/core';
import { Films } from '../../services/films';

@Component({
  selector: 'app-search',
  standalone: false,
  templateUrl: './search.html',
  styleUrl: './search.css',
})
export class Search {
  public searchString: string = '';

  constructor(private _filmsServices: Films) {}

  public updateValue(event: Event) {
    const target = event.target as HTMLInputElement;
    this.searchString = target.value;
  }

  public updateSearch(event: Event) {
    this._filmsServices.searchString = this.searchString;
  }
}
