import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from '../../environments/environment';
import { GetCharactersResponse } from '../models/rickAndMorty.model';

@Injectable({
  providedIn: 'root',
})
export class RickAndMortyServiceService {
  private _httpClient: HttpClient;
  private url = environment.api;

  constructor(httpClient: HttpClient) {
    this._httpClient = httpClient;
  }

  getCharacters(nextPageUrl?: string) {
    if (nextPageUrl?.startsWith(this.url)) {
      return this._httpClient.get<GetCharactersResponse>(nextPageUrl);
    }
    return this._httpClient.get<GetCharactersResponse>(`${this.url}/character`);
  }
}
