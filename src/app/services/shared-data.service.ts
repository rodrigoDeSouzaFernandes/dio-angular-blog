import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class SharedDataService {
  private filterSubject = new BehaviorSubject<string>(''); // Inicialmente vazio
  filter$ = this.filterSubject.asObservable();

  setFilter(filter: string): void {
    this.filterSubject.next(filter);
  }
}
