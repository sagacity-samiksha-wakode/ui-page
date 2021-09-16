import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-performance-chart',
  templateUrl: './performance-chart.component.html',
  styleUrls: ['./performance-chart.component.css']
})
export class PerformanceChartComponent implements OnInit {

  title:string;
  backgroundColor :any;
  color:any;
  height:any;
  width:any;
  border:any


  constructor() { }

  ngOnInit(){
    this.addBarSpans();
  }


  Data:any = [
    ['Immediate', 70],
   ['Minor', 28],
  ['Standard', 90],
  ['Major', 55]
];


     addBarSpans() {
    const bars = document.getElementsByClassName('equalizer-bar');
    const equalizer = document.getElementById("equalizer");

    for (let i = 0; i < this.Data.length; i++) {
        let html = '';
        for (let j = 0; j < 10; j++) {
          let number= Number((this.Data[i][1]/10).toFixed());
          if(j < number){
            html += '<span class="active"></span>';
          }else{
             html += '<span></span>';
          }
        }

        equalizer.innerHTML += `<div class="equalizer-bar-wrapper"><div class="equalizer-bar">` + html + `</div><div class="info"><p>` + this.Data[i][0] + `</p><p>` + this.Data[i][1] + `%</p</div></div>`;

    }

  }
}
