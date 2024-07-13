import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class DataService {

  constructor() { }

  sports = [
    { id: '1', name: 'Soccer' },
    { id: '2', name: 'Basketball' },
  ];

  getSports(): Observable<any[]> {
    return of(this.sports);
  }
}
