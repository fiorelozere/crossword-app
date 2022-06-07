import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';

export const levels = [
  {
    id: 0,
    name: 'Niveli 1',
    number: 1
  }
];

@Injectable({
  providedIn: 'root'
})
export class LevelsService {

  constructor() { }

  getLevels(): Observable<any> {
    return of(levels);
  }
}
