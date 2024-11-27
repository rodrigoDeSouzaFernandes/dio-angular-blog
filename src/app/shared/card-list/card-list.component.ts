import { Component, HostListener } from '@angular/core';
import { RickAndMortyServiceService } from '../../services/rick-and-morty-service.service';
import { GetCharactersResponse } from '../../models/rickAndMorty.model';
import { CommonModule } from '@angular/common';
import { CardComponent } from '../card/card.component';
import { filter, max } from 'rxjs';
import { SharedDataService } from '../../services/shared-data.service';

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

  nameFilter: string = '';
  isLoding: boolean = false;

  get filteredCharacters() {
    return this.characters.results.filter((char) =>
      char.name.toLowerCase().includes(this.nameFilter.toLowerCase())
    );
  }

  constructor(
    private rickAndMortyService: RickAndMortyServiceService,
    private sharedDataService: SharedDataService
  ) {}

  ngOnInit(): void {
    this.getCharacters();

    // Escutar mudanças no filtro
    this.sharedDataService.filter$.subscribe((filter) => {
      this.nameFilter = filter;
    });
  }

  getCharacters(): void {
    this.rickAndMortyService.getCharacters().subscribe((response) => {
      this.characters = response;
    });
  }

  @HostListener('window:scroll', [])
  onScroll(): void {
    if (this.isLoding || !this.characters.info.next || this.nameFilter) return;

    const scrollPosition = document.documentElement.scrollTop;
    const maxScroll =
      document.documentElement.scrollHeight -
      document.documentElement.clientHeight;

    if (scrollPosition >= maxScroll - 50) {
      this.isLoding = true;
      this.rickAndMortyService
        .getCharacters(this.characters.info.next)
        .subscribe({
          next: (response) => {
            const oldResultsData = this.characters.results;

            this.characters = {
              info: response.info,
              results: [...oldResultsData, ...response.results],
            };
            this.isLoding = false;
          },

          error: () => {
            this.isLoding = false;
          },
        });
    }
  }
}
