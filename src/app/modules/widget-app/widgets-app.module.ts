import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { BarChartComponent } from './bar-chart/bar-chart.component';
import {CdkTableModule} from '@angular/cdk/table';
import { ChartsModule } from 'ng2-charts';
import { CommonModule } from '@angular/common';
import { CompanyFormComponent } from './company/company-form/company-form.component';
import {MatButtonToggleModule} from '@angular/material/button-toggle';
import {MatProgressSpinnerModule} from '@angular/material/progress-spinner';
import {MatRadioModule} from '@angular/material/radio';
import { MaterialModule } from '../material/material.module';
import { MoreInfoLinkDataComponent } from './more-info-link-data/more-info-link-data.component';
import { NgModule } from '@angular/core';
import { PerformaceCard1Component } from './performace-card1/performace-card1.component';
import { PerformanceCard2Component } from './performance-card2/performance-card2.component';
import { PerformanceChartComponent } from './performance-chart/performance-chart.component';
import { PerformanceTable2Component } from  './performance-table2/performance-table2.component';
import { PerformanceTable3Component } from './performance-table3/performance-table3.component';
import {PerformanceTableComponent} from './performance-table/performance-table.component';
import { ProgressBarA1Component } from './progress-bar-a1/progress-bar-a1.component';
import {ProgressBarColor} from './progress-bar-a1/progress-a1-bar-color';
import { ProgressBarComponent } from './progress-bar/progress-bar.component';
import { RadioButtonComponent } from './radio-button/radio-button.component';

// For MDB Angular Free

@NgModule({
  declarations: [
    MoreInfoLinkDataComponent,
    CompanyFormComponent,
    PerformaceCard1Component,
    PerformanceCard2Component,
    ProgressBarComponent,
    ProgressBarA1Component,
    ProgressBarColor,
    BarChartComponent,
    RadioButtonComponent,
    PerformanceChartComponent,
    PerformanceTableComponent,
    PerformanceTable2Component,
    PerformanceTable3Component



  ],
  imports: [
    CommonModule,
    MaterialModule,
    FormsModule,
    ReactiveFormsModule,
    MatButtonToggleModule,
    MatProgressSpinnerModule,
    MatRadioModule,
    CdkTableModule,
    ChartsModule,




  ],
  exports:[
    MoreInfoLinkDataComponent,
    CompanyFormComponent,
    PerformaceCard1Component,
    PerformanceCard2Component,
    ProgressBarComponent,
    ProgressBarA1Component,
    BarChartComponent,
    RadioButtonComponent,
    PerformanceChartComponent,
    PerformanceTableComponent,
    PerformanceTable2Component,
    PerformanceTable3Component

  ]
})
export class WidgetAppModule { }
