import { Observable, of, timer } from 'rxjs';

import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class FirstService {

  constructor() { }
  getPersons(filter: string): Observable<Person[]> {
    console.log('Filter: ' + filter);
    if (filter) {
      return of(PERSONS.filter(p => p.sureName === filter));
    }

    return of(PERSONS);
  }
}

const PERSONS: Person[] = [
  { firstName: 'Marilyn', sureName: 'Monroe' },
  { firstName: 'Abraham', sureName: 'Lincoln' },
  { firstName: 'Mother', sureName: 'Teresa' },
  { firstName: 'John F.', sureName: 'Kenedy' },
  { firstName: 'Martin Luther', sureName: 'King' },
];

export interface Person {
  firstName: string;
  sureName: string;
}
