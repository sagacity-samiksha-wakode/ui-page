import { EventEmitter } from 'events';

export class BarChartConfigModel {
  static getInstance<T>(): BarChartConfigModel {
    let model = new BarChartConfigModel();
    return model
  }

  public static readonly CALLER_TO_COMP_REFRESH_DATA = "REFRESH_DATA"

  CompToCaller = new EventEmitter();
  CallerToComp = new EventEmitter();
  EventAction = new Map();
}

export class BarChartDataModel {
    globalParameters: any;
    isGlobalParams: any;
    isSelfDataLoad: any;
    data: any;
    promoterPrefix: any;
    widgetStyle: any;

    static getInstance<T>(): BarChartDataModel {
      let model = new BarChartDataModel();
      model.isSelfDataLoad = false;
      model.globalParameters = new Map<any, any>();
      return model;
    }
  }

  export interface BarChartData {
    isIconEnable: boolean,
    isMatIcon: boolean,
    icon: string,
    iconColor: string,
    isTextEnable: boolean,
    text: string,
    textColor: string,
    isCountEnable: boolean,
    count: string,
    countColor: string,
    value :string;
    valuecolor:string;
    backgroundColor: string,
    widgetStyle : any
  }
