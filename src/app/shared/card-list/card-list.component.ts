import { Component } from '@angular/core';
import { RickAndMortyServiceService } from '../../services/rick-and-morty-service.service';
import { Character } from '../../models/rickAndMorty.model';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-card-list',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './card-list.component.html',
  styleUrl: './card-list.component.scss',
})
export class CardListComponent {
  characters: Character[] = [];

  constructor(private rickAndMortyService: RickAndMortyServiceService) {
    this.getCharacters();
  }

  getCharacters() {
    this.rickAndMortyService
      .getCharacters()
      .subscribe((response) => (this.characters = response.results));
  }
}
