import {BehaviorSubject, Observable} from 'rxjs';
import { Component, OnInit } from '@angular/core';

import {DataSource} from '@angular/cdk/collections';

export interface PeriodicElement {
  Due: number;
  position: string;
  Actioned: number;
  outstanding: number;
}

const ELEMENT_DATA: PeriodicElement[] = [
  {position: "Work Strart", Due: 0, Actioned: 3, outstanding: 8},
  {position: "Work Stop", Due: 8, Actioned: 10, outstanding: 3},
  {position: "Variations", Due: 4, Actioned: 8, outstanding: 1},
  {position: "Registrations", Due: 1, Actioned: 2, outstanding: 5},



];





@Component({
  selector: 'app-performance-table',
  templateUrl: './performance-table.component.html',
  styleUrls: ['./performance-table.component.css']
})
export class PerformanceTableComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  displayedColumns: string[] = ['position', 'Due', 'Actioned', 'outstanding'];
  dataSource = new ExampleDataSource();
}

/**
 * Data source to provide what data should be rendered in the table. Note that the data source
 * can retrieve its data in any way. In this case, the data source is provided a reference
 * to a common data base, ExampleDatabase. It is not the data source's responsibility to manage
 * the underlying data. Instead, it only needs to take the data and send the table exactly what
 * should be rendered.
 */
export class ExampleDataSource extends DataSource<PeriodicElement> {
  /** Stream of data that is provided to the table. */
  data = new BehaviorSubject<PeriodicElement[]>(ELEMENT_DATA);

  /** Connect function called by the table to retrieve one stream containing the data to render. */
  connect(): Observable<PeriodicElement[]> {
    return this.data;
  }

  disconnect() {}
}





