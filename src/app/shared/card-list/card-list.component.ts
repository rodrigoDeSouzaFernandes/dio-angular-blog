import { Component } from '@angular/core';
import { RickAndMortyServiceService } from '../../services/rick-and-morty-service.service';
import { GetCharactersResponse } from '../../models/rickAndMorty.model';
import { CommonModule } from '@angular/common';
import { CardComponent } from '../card/card.component';

@Component({
  selector: 'app-card-list',
  standalone: true,
  imports: [CommonModule, CardComponent],
  templateUrl: './card-list.component.html',
  styleUrl: './card-list.component.scss',
})
export class CardListComponent {
  characters: GetCharactersResponse = {
    info: { count: 0, pages: 0, next: null, prev: null },
    results: [],
  };

  constructor(private rickAndMortyService: RickAndMortyServiceService) {
    this.getCharacters();
  }

  getCharacters() {
    this.rickAndMortyService
      .getCharacters()
      .subscribe((response) => (this.characters = response));
  }
}
