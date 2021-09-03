import {BehaviorSubject, Observable} from 'rxjs';
import { Component, OnInit } from '@angular/core';

export interface PeriodicElement {
  name: string;
  position: number;
  weight: number;
  symbol: number;
}

const ELEMENT_DATA: PeriodicElement[] = [
  {name: 'Hydrogen', position: 1, weight: 2, symbol:5},
  {position: 2, name: 'Helium', weight:5, symbol:6},
  {position: 3, name: 'Lithium', weight: 6, symbol: 5},
  {position: 4, name: 'Beryllium', weight: 9, symbol: 4},

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

  displayedColumns: string[] = ['name' ,'position', 'weight', 'symbol'];
  dataSource = ELEMENT_DATA;
}

/**
 * Data source to provide what data should be rendered in the table. Note that the data source
 * can retrieve its data in any way. In this case, the data source is provided a reference
 * to a common data base, ExampleDatabase. It is not the data source's responsibility to manage
 * the underlying data. Instead, it only needs to take the data and send the table exactly what
 * should be rendered.
 */







