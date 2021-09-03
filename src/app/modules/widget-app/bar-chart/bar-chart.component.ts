import { AfterViewInit, Component, ElementRef, OnInit, ViewChild } from '@angular/core';
declare var google: any;
@Component({
  selector: 'app-bar-chart',
  templateUrl: './bar-chart.component.html',
  styleUrls: ['./bar-chart.component.css']
})
export class BarChartComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }
  @ViewChild('pieChart') pieChart: ElementRef

  drawChart = () => {

  const data = google.visualization.arrayToDataTable([
    ['Task', 'Hours per Day'],
    ['Work', 11],
    ['Eat', 2],
    ['Commute', 2],
    ['Watch TV', 2],
    ['Sleep', 7]
  ]);

  const options = {
    title: 'My Daily Activities',
    legend: {position: 'top'}
  };

  const chart = new google.visualization.PieChart(this.pieChart.nativeElement);

  chart.draw(data, options);
}

  ngAfterViewInit() {
    google.charts.load('current', { 'packages': ['corechart'] });
    google.charts.setOnLoadCallback(this.drawChart);
  }
//    drawChart() {
//   // Define the chart to be drawn.
//   var data = new google.visualization.DataTable();
//   data.addColumn('string', 'Element');
//   data.addColumn('number', 'Percentage');
//   data.addRows([
//     ['Nitrogen', 0.78],
//     ['Oxygen', 0.21],
//     ['Other', 0.01]
//   ]);

//   // Instantiate and draw the chart.
//   var chart = new google.visualization.PieChart(document.getElementById('myPieChart'));
//   chart.draw(data, null);
// }
}
