import {BehaviorSubject, Observable} from 'rxjs';
import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

export interface PeriodicElement {
  name: string;
  Due: number;
  Actioned: number;
  Outstanding: number;
}

const ELEMENT_DATA: PeriodicElement[] = [
  {name: 'Works start', Due: 11, Actioned: 3, Outstanding:8},
  {name: 'Works Stop', Due: 13, Actioned:10, Outstanding:3},
  {name: 'Permit Modification Requests', Due: 9,  Actioned: 8, Outstanding:1},
  {name: 'Registrations', Due: 7,  Actioned: 22, Outstanding: 5},

];



@Component({
  selector: 'app-performance-table',
  templateUrl: './performance-table.component.html',
  styleUrls: ['./performance-table.component.css']
})
export class PerformanceTableComponent implements OnInit {

  title:string;
  backgroundColor :any;
  backgroundColor1:any
  backgroundColor2:any
  color:any;
  height:any;
  width:any;
  border:any



  constructor() { }

  ngOnInit(): void {
  }

  displayedColumns: string[] = ['name' ,'Due', 'Actioned', 'Outstanding'];
  dataSource = ELEMENT_DATA;


  @Input()
  size: 'small' | 'medium' | 'large' = 'medium';

  @Input()
  primary = false;




@Output()
  onClick = new EventEmitter<Event>();

  public get classes(): string[] {
    const mode = this.primary ? 'storybook-button--primary' : 'storybook-button--secondary';

    return ['storybook-button', `storybook-button--${this.size}`, mode];
  }
  public get classes1(): string[] {
    const mode = this.primary ? 'storybook-button--primary' : 'storybook-button--secondary';

    return ['storybook-button', `storybook-button--${this.size}`, mode];
  }

/**
 * Data source to provide what data should be rendered in the table. Note that the data source
 * can retrieve its data in any way. In this case, the data source is provided a reference
 * to a common data base, ExampleDatabase. It is not the data source's responsibility to manage
 * the underlying data. Instead, it only needs to take the data and send the table exactly what
 * should be rendered.
 */



}



