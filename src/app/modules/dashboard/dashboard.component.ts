import { ActivatedRoute, Router } from '@angular/router';
import { AfterViewInit, Component, OnDestroy, OnInit } from '@angular/core';
import {BarChartConfigModel, BarChartDataModel} from '../widget-app/bar-chart/bar-chart-model';
import { PerformanceCard1ConfigModel, PerformanceCard1DataModel } from '../widget-app/performace-card1/performance-card1-model';
import { PerformanceCard2ConfigModel, PerformanceCard2DataModel } from '../widget-app/performance-card2/performance-card2-model';
import {ProgressA1ConfigModel, ProgressA1Model} from '../widget-app/progress-bar-a1/progress-a1-model';
import { ProgressBarConfigModel, ProgressBarDataModel } from '../widget-app/progress-bar/progress-bar-model';
import {RadioButtonConfigModel, RadioButtonDataModel} from '../widget-app/radio-button/radio-button-model';

import { AppRepoHelperService } from 'src/app/services/common/app-repo-helper.service';
import { EventActionService } from 'src/app/services/common/event-action.service';
import { NgxSpinnerService } from 'ngx-spinner';
import { NotificationService } from 'src/app/services/common/notification.service';
import {ProgressBarColor} from '../widget-app/progress-bar-a1/progress-a1-bar-color';
import { ServerApiInterfaceServiceService } from 'src/app/services/common/server-api-interface-service.service';
import { SessionStorageService } from 'src/app/services/common/session-storage.service';
import { WidgetPageBase } from '../widget-utility/widget-page-base';

// import { NgxSpinnerService } from 'ngx-spinner';



// import { SaveFileService } from 'src/app/services/common/save-file.service';

// import { GLOBAL_PERSISTANT_DATA } from 'src/app/constants/app-repo.constants';




@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent extends WidgetPageBase
implements OnInit, AfterViewInit, OnDestroy {
  // [x: string]: any;

  radioButtonConfigModel?:RadioButtonConfigModel;
  radioButtonDataModel?:RadioButtonDataModel;

  barChartConfigModel?:BarChartConfigModel;
  barChartDataModel?:BarChartDataModel;

  progressA1ConfigModel?:ProgressA1ConfigModel;
  progressA1Model?:ProgressA1Model;

  progressBarDataModel?: ProgressBarDataModel;
  progressBarConfigModel?:ProgressBarConfigModel;

  progressBarDataModel2?: ProgressBarDataModel;
  progressBarConfigModel2?:ProgressBarConfigModel;

  progressBarDataModel3?: ProgressBarDataModel;
  progressBarConfigModel3?:ProgressBarConfigModel;

  progressBarDataModel4?: ProgressBarDataModel;
  progressBarConfigModel4?:ProgressBarConfigModel;

  progressBarDataModel5?: ProgressBarDataModel;
  progressBarConfigModel5?:ProgressBarConfigModel;

  performanceCard1DataModel?: PerformanceCard1DataModel;
  performanceCard1ConfigModel?:PerformanceCard1ConfigModel;

  performanceCard1DataModel2?: PerformanceCard1DataModel;
  performanceCard1ConfigModel2?:PerformanceCard1ConfigModel;

  performanceCard1DataModel3?: PerformanceCard1DataModel;
  performanceCard1ConfigModel3?:PerformanceCard1ConfigModel;

  performanceCard1DataModel4?: PerformanceCard1DataModel;
  performanceCard1ConfigModel4?:PerformanceCard1ConfigModel;

  performanceCard1DataModel5?: PerformanceCard1DataModel;
  performanceCard1ConfigModel5?:PerformanceCard1ConfigModel;

  performanceCard1DataModel6?: PerformanceCard1DataModel;
  performanceCard1ConfigModel6?:PerformanceCard1ConfigModel;

  performanceCard1DataModel7?: PerformanceCard1DataModel;
  performanceCard1ConfigModel7?:PerformanceCard1ConfigModel;

  performanceCard2DataModel?: PerformanceCard2DataModel;
  performanceCard2ConfigModel?: PerformanceCard2ConfigModel;

  performanceCard2DataModel2?: PerformanceCard2DataModel;
  performanceCard2ConfigModel2?: PerformanceCard2ConfigModel;

  performanceCard2DataModel3?: PerformanceCard2DataModel;
  performanceCard2ConfigModel3?: PerformanceCard2ConfigModel;

  performanceCard2DataModel4?: PerformanceCard2DataModel;
  performanceCard2ConfigModel4?: PerformanceCard2ConfigModel;

  performanceCard2DataModel5?: PerformanceCard2DataModel;
  performanceCard2ConfigModel5?: PerformanceCard2ConfigModel;

  performanceCard2DataModel6?: PerformanceCard2DataModel;
  performanceCard2ConfigModel6?: PerformanceCard2ConfigModel;

  performanceCard2DataModel7?: PerformanceCard2DataModel;
  performanceCard2ConfigModel7?: PerformanceCard2ConfigModel;

  performanceCard2DataModel8?: PerformanceCard2DataModel;
  performanceCard2ConfigModel8?: PerformanceCard2ConfigModel;
  bindprogressA1Model: any;




  constructor(
    private _serverApi: ServerApiInterfaceServiceService,
    private _sessionStorageService: SessionStorageService,
    private _eventActionService: EventActionService,
    private _router: Router,
    private route: ActivatedRoute,
    private _spinner: NgxSpinnerService,
    // private _saveFileService: SaveFileService,
    private _notificationService: NotificationService,
    private _appRepoHelperService: AppRepoHelperService
  ) {
    super(
      _serverApi,
      _eventActionService,
      _sessionStorageService,
      _router,
      _spinner
    );

    this.pageReq = { page: 'dashboard' };
    this.pageprop = Object();
    this.pageInstance = this;

    this.radioButtonConfigModel=RadioButtonConfigModel.getInstance();
    this.radioButtonDataModel=RadioButtonDataModel.getInstance();

    this.barChartConfigModel=BarChartConfigModel.getInstance();
    this.barChartDataModel=BarChartDataModel.getInstance();

    this.progressA1ConfigModel=ProgressA1ConfigModel.getInstance();
    this.progressA1Model=ProgressA1Model.getInstance();


    this.progressBarDataModel= ProgressBarDataModel.getInstance();
    this. progressBarConfigModel= ProgressBarConfigModel.getInstance();

    this.progressBarDataModel2= ProgressBarDataModel.getInstance();
    this. progressBarConfigModel2= ProgressBarConfigModel.getInstance();

    this.progressBarDataModel3= ProgressBarDataModel.getInstance();
    this. progressBarConfigModel3= ProgressBarConfigModel.getInstance();

    this.progressBarDataModel4= ProgressBarDataModel.getInstance();
    this. progressBarConfigModel4= ProgressBarConfigModel.getInstance();

    this.progressBarDataModel5= ProgressBarDataModel.getInstance();
    this. progressBarConfigModel5= ProgressBarConfigModel.getInstance();

    this.performanceCard1DataModel = PerformanceCard1DataModel.getInstance();
    this.performanceCard1ConfigModel = PerformanceCard1ConfigModel.getInstance();

    this.performanceCard1DataModel2 = PerformanceCard1DataModel.getInstance();
    this.performanceCard1ConfigModel2 = PerformanceCard1ConfigModel.getInstance();

    this.performanceCard1DataModel3 = PerformanceCard1DataModel.getInstance();
    this.performanceCard1ConfigModel3 = PerformanceCard1ConfigModel.getInstance();

    this.performanceCard1DataModel4 = PerformanceCard1DataModel.getInstance();
    this.performanceCard1ConfigModel4 = PerformanceCard1ConfigModel.getInstance();


    this.performanceCard1DataModel5 = PerformanceCard1DataModel.getInstance();
    this.performanceCard1ConfigModel5 = PerformanceCard1ConfigModel.getInstance();

    this.performanceCard1DataModel6 = PerformanceCard1DataModel.getInstance();
    this.performanceCard1ConfigModel6 = PerformanceCard1ConfigModel.getInstance();

    this.performanceCard1DataModel7 = PerformanceCard1DataModel.getInstance();
    this.performanceCard1ConfigModel7 = PerformanceCard1ConfigModel.getInstance();

    this.performanceCard2DataModel= PerformanceCard2DataModel.getInstance();
    this.performanceCard1ConfigModel= PerformanceCard1ConfigModel.getInstance();

    this.performanceCard2DataModel2= PerformanceCard2DataModel.getInstance();
    this.performanceCard1ConfigModel2= PerformanceCard1ConfigModel.getInstance();

    this.performanceCard2DataModel3= PerformanceCard2DataModel.getInstance();
    this.performanceCard1ConfigModel3= PerformanceCard1ConfigModel.getInstance();

    this.performanceCard2DataModel4= PerformanceCard2DataModel.getInstance();
    this.performanceCard1ConfigModel4= PerformanceCard1ConfigModel.getInstance();

    this.performanceCard2DataModel5= PerformanceCard2DataModel.getInstance();
    this.performanceCard1ConfigModel5= PerformanceCard1ConfigModel.getInstance();


    this.performanceCard2DataModel6= PerformanceCard2DataModel.getInstance();

    this.performanceCard2DataModel7= PerformanceCard2DataModel.getInstance();

    this.performanceCard2DataModel8= PerformanceCard2DataModel.getInstance();



  }

   ngOnInit(): void {
// this.bindProgressA1Model();

    this.bindRadioButtonDataModel();

    this.bindBarChartDataModel();

    this.bindProgressBarDataModel();
    this.bindProgressBarDataModel2();
    this.bindProgressBarDataModel3();
    this.bindProgressBarDataModel4();
    this.bindProgressBarDataModel5();

    this.bindPerformanceCard1DataModel();
    this.bindPerformanceCard1DataModel2();
    this.bindPerformanceCard1DataModel3();
    this.bindPerformanceCard1DataModel4();

    this.bindPerformanceCard1DataModel5();
    this.bindPerformanceCard1DataModel6();
    this.bindPerformanceCard1DataModel7();


    this.bindperformanceCard2DataModel();
    this.bindperformanceCard2DataModel2();
    this.bindperformanceCard2DataModel3();
    this.bindperformanceCard2DataModel4();
    this.bindperformanceCard2DataModel5();
    this.bindperformanceCard2DataModel6();
    this.bindperformanceCard2DataModel7();
    this.bindperformanceCard2DataModel8();


    // this.bindPerformanceCard1ConfigModel();
  }
  bindRadioButtonDataModel() {

  }
  bindBarChartDataModel() {

  }

  // bindProgressA1Model() {
  //   this.ProgressA1Model.data=[
  //     {"actualvalue":"Adf","title":"asdfas","barcolor":"Red"},
  //     {"actualvalue":"Adf","title":"asdfas","barcolor":"Red"},
  //   ]
  // }



  bindProgressBarDataModel()
  {
    this.progressBarDataModel.data={
      text:"Permits With Avoidable Costs",
      count:"80%",
      countColor:"#000",
      value:"100",
      valuecolor:"#DC2C2B"
    }
  }
  bindProgressBarDataModel2()
  {
    this.progressBarDataModel2.data={
      text:"Start-Stop Compliance",
      count:"30%",
      countColor:"#000",
      value:"100",
      valuecolor:"#F0B018"
    }
  }

  bindProgressBarDataModel3()
  {
    this.progressBarDataModel3.data={
      text:"Defects to Inspections",
      count:"50%",
      countColor:"#000",
      value:"50",
      background:"#DC2C2B"
    }
  }

  bindProgressBarDataModel4()
  {
    this.progressBarDataModel4.data={
      text:"Right-First-Time_pemits",
      count:"100%",
      countColor:"#000",
      value:"100",
      valuecolor:"#DC2C2B"
    }
  }

  bindProgressBarDataModel5()
  {
    this.progressBarDataModel5.data={
      text:"Reqistrations Completed on Time",
      count:"10%",
      countColor:"#000",
      value:"100",
      valuecolor:"#418B12"
    }
  }


  bindPerformanceCard1DataModel(){
    this.performanceCard1DataModel.data={
          count:"430,000",
          icon:"volunteer_activism",
          countColor:"#70AD47",

          text:"Total cost of Street Works"
          }

  }

  bindPerformanceCard1DataModel2(){
    this.performanceCard1DataModel2.data={
      count:"380,000",
      icon:"checklist",
      countColor:"#70AD47",

      text:"Cost of Permits"
      }
  }
  bindPerformanceCard1DataModel3(){
    this.performanceCard1DataModel3.data={
      count:"40,000",
      icon:"edit_note",
      countColor:"#E62E2D",

      text:"Fine & Penalties"
      }
  }

  bindPerformanceCard1DataModel4(){
    this.performanceCard1DataModel4.data={
      count:"10,000",
      icon:"thumb_down",
      countColor:"#E62E2D",
      text:"Cost of Poor Planning"
      }
  }

  bindPerformanceCard1DataModel5(){
    this.performanceCard1DataModel5.data={
      count:"10",
      // icon:"thumb_down",
      countColor:"#fff",
      text:"Planning",
      backgroundColor:"#DC2C2B"
      }
  }

  bindPerformanceCard1DataModel6(){
    this.performanceCard1DataModel6.data={
      count:"10",
      // icon:"thumb_down",
      countColor:"#fff",
      text:"Planning",
      backgroundColor:"#F0B018"
      }
  }

  bindPerformanceCard1DataModel7(){
    this.performanceCard1DataModel7.data={
      count:"10",
      // icon:"thumb_down",
      countColor:"#fff",
      text:"Planning",
      backgroundColor:"#418B12",

      }
  }

  bindperformanceCard2DataModel(){
    this.performanceCard2DataModel.data={
      subtext:"Total Permits",
      icon:"verified",
      // subtext2:"CMeX / CSAT Impact",
      text:"7,500",
      backgroundColor:"#3E6FB6"
      }
  }

  bindperformanceCard2DataModel2(){
    this.performanceCard2DataModel2.data={
      subtext:"Total Registrations",
      icon:"task",
      // subtext2:"CMeX / CSAT Impact",
      text:"6,070",
      backgroundColor:"#3E6FB6"
      }
  }

  bindperformanceCard2DataModel3(){
    this.performanceCard2DataModel3.data={
      subtext:"Total FPNs",
      icon:"groups",
      // subtext2:"CMeX / CSAT Impact",
      text:"273",
      backgroundColor:"#DC2C2B"
      }
  }

  bindperformanceCard2DataModel4(){
    this.performanceCard2DataModel4.data={
      subtext:"Total S74 Charges",
      icon:"warning",
      // subtext2:"CMeX / CSAT Impact",
      text:"1,053",
      backgroundColor:"#DC2C2B"
      }
  }

  bindperformanceCard2DataModel5(){
    this.performanceCard2DataModel5.data={
      subtext:"Total Defects",
      icon:"cancel",
      // subtext2:"CMeX / CSAT Impact",
      text:"416",
      backgroundColor:"#DC2C2B"
      }
  }

  bindperformanceCard2DataModel6(){
    this.performanceCard2DataModel6.data={
      subtext:"Abandoned Jobs",
      icon:"disabled_by_default",
      // subtext2:"CMeX / CSAT Impact",
      text:"111",
      backgroundColor:"#F0B018"
      }
  }

  bindperformanceCard2DataModel7(){
    this.performanceCard2DataModel7.data={
      subtext:"Permits With Mis Spend",
      icon:"thumb_down_alt",
      // subtext2:"CMeX / CSAT Impact",
      text:"100",
      backgroundColor:"#F0B018"
      }
  }

  bindperformanceCard2DataModel8(){
    this.performanceCard2DataModel8.data={
      subtext:"Permits With Variations",
      icon:"not_listed_location",
      // subtext2:"CMeX / CSAT Impact",
      text:"66",
      backgroundColor:"#F0B018"
      }
  }

  bindperformanceCard2DataModel21(){
    this.performanceCard2DataModel8.data={
      subtext:"Permits With Variations",
      icon:"not_listed_location",
      // subtext2:"CMeX / CSAT Impact",
      text:"66",
      backgroundColor:"#F0B018"
      }
  }



  ngAfterViewInit(): void {
    super.initBase();
  }

  ngOnDestroy(): void {
    super.removeListeners();
  }




}
