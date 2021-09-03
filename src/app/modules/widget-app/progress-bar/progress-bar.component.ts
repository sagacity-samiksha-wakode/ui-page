import { Component, Input, OnInit } from '@angular/core';
import {ProgressBarConfigModel, ProgressBarDataModel}  from './progress-bar-model';

import { AppRepoHelperService } from 'src/app/services/common/app-repo-helper.service';
import { DatePipe } from '@angular/common';
import { FormBuilder } from '@angular/forms';
import { ServerApiInterfaceServiceService } from 'src/app/services/common/server-api-interface-service.service';
import { ValidationService } from 'src/app/services/common/validation.service';
import { WidgetComponentBase } from '../../widget-utility/widget-component-base';

@Component({
  selector: 'app-progress-bar',
  templateUrl: './progress-bar.component.html',
  styleUrls: ['./progress-bar.component.css']
})
export class ProgressBarComponent extends WidgetComponentBase implements OnInit  {
  ConvertData(response: any) {
    // throw new Error('Method not implemented.');
  }
  SetValue(responseDataModel: any) {
    // throw new Error('Method not implemented.');
  }

  @Input()  dataModel!: ProgressBarDataModel;
  @Input() configModel!: ProgressBarConfigModel;

  constructor(
    private _formBuilder: FormBuilder,
    private _serverApi: ServerApiInterfaceServiceService,
    private _datepipe: DatePipe,
    public _validationService: ValidationService
  ) {
    super(_formBuilder,_serverApi,_datepipe,_validationService)
  //  super(_formBuilderbase, _serverApiBase, _datepipe,_validationServiceBase)
    // super(_formBuilderbase,_serverBaseApi,_datepipe,_validationServiceBase)
    // super(_formBuilder,_serverBaseApi,_datepipe,_validationServiceBase, _baseAppRepoHelperService)
    // super(_serverApiBase, _validationService,);
  }

  ngOnInit(): void {
    // this.wgOnInint();
  }

  setFieldData() {
  }

  wgGetControlData() {
    this.wgOnRequest();
    return new Promise((resolve, reject) => {
      // let data = this._baseAppRepoHelperService.getGlobalData(this.dataModel.dataKey);
      let data = {};
      this.wgOnRequestCompleted();
      resolve(data);
    });
  }




  convertData(response: any) {
  }

  setMode(responseDataModel: any) {
  }

  setValue(responseDataModel: any) {
  }

}
