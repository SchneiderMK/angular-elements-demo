import { Observable } from 'rxjs';

import { Component, Input, OnInit } from '@angular/core';

import { FirstService, Person } from './first.service';

@Component({
  selector: 'app-first',
  templateUrl: './first.component.html',
  styleUrls: ['./first.component.css']
})
export class FirstComponent implements OnInit {
  @Input() filter: string;

  public persons: Person[];
  constructor(private readonly _service: FirstService) { }

  ngOnInit() {
    this._service.getPersons(this.filter).subscribe(p => this.persons = p);
  }

  public onFilterChange() {
    this._service.getPersons(this.filter).subscribe(p => this.persons = p);
  }
}
