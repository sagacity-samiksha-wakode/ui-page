import { EventEmitter } from 'events';

export class RadioButtonConfigModel {
  static getInstance<T>(): RadioButtonConfigModel {
    let model = new RadioButtonConfigModel();
    return model
  }

  public static readonly CALLER_TO_COMP_REFRESH_DATA = "REFRESH_DATA"

  CompToCaller = new EventEmitter();
  CallerToComp = new EventEmitter();
  EventAction = new Map();
}

export class RadioButtonDataModel {
    globalParameters: any;
    isGlobalParams: any;
    isSelfDataLoad: any;
    data: any;
    promoterPrefix: any;
    widgetStyle: any;

    static getInstance<T>(): RadioButtonDataModel {
      let model = new RadioButtonDataModel();
      model.isSelfDataLoad = false;
      model.globalParameters = new Map<any, any>();
      return model;
    }
  }

  export interface RadioButtonData {
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
