import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { AdminLayoutComponent } from './admin-layout/admin-layout.component';
import {CdkTableModule} from '@angular/cdk/table';
import { ChartsModule } from 'ng2-charts';
import { CommonModule } from '@angular/common';
import {MatButtonToggleModule} from '@angular/material/button-toggle';
import {MatProgressSpinnerModule} from '@angular/material/progress-spinner';
import {MatRadioModule} from '@angular/material/radio';
import {MatTableModule} from '@angular/material/table';
import {MatToolbarModule} from '@angular/material/toolbar';
import { MaterialModule } from '../modules/material/material.module';
import { NgModule } from '@angular/core';

// For MDB Angular Free

@NgModule({
  declarations: [

    AdminLayoutComponent

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
    MatTableModule,
    MatToolbarModule


  ],
  exports:[
    AdminLayoutComponent


  ]
})
export class LayoutAppModule { }
