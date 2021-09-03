import { AfterViewInit, Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { ChartDataSets, ChartOptions, ChartType } from 'chart.js';

import { Label } from 'ng2-charts';

// declare var google: any;
@Component({
  selector: 'app-bar-chart',
  templateUrl: './bar-chart.component.html',
  styleUrls: ['./bar-chart.component.css']
})
export class BarChartComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

public barChartOptions: ChartOptions = {
  responsive: true,
};
public barChartLabels: Label[] = ['2006', '2007', '2008', '2009', '2010', '2011', '2012'];
public barChartType: ChartType = 'bar';
public barChartLegend = true;
public barChartPlugins = [];


public barChartData: ChartDataSets[] = [
  { data: [65, 59, 80, 81, 56, 55, 40], label: 'Series A' ,backgroundColor: '#3E6FB6', hoverBorderColor: '#406EB5', borderColor: '#000',hoverBackgroundColor:"lightblue"},
  // { data: [28, 48, 40, 19, 86, 27, 90], label: 'Series B' }
];
    }

