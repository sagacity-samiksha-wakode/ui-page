import { CommonModule, DatePipe } from '@angular/common';
import { FormBuilder, FormsModule, ReactiveFormsModule } from '@angular/forms';
import { Meta, Story, componentWrapperDecorator, moduleMetadata } from '@storybook/angular';

import { HttpClientModule } from '@angular/common/http';
import { MaterialModule } from 'src/app/materials/material.module';
import { ProgressBarComponent } from './progress-bar.component'
import {ProgressBarConfigModel} from './progress-bar-model'
import { ProgressBarDataModel } from './progress-bar-model'
import { ServerApiInterfaceServiceService } from 'src/app/services/common/server-api-interface-service.service';
import { ValidationService } from 'src/app/services/common/validation.service';
import { action } from '@storybook/addon-actions';

export default {
    component: ProgressBarComponent,
    decorators: [
      moduleMetadata({
        // 👇 Imports both components to allow component composition with storybook
        declarations: [ProgressBarComponent],
        imports: [FormsModule, HttpClientModule,    CommonModule,
            MaterialModule,
            FormsModule,
            ReactiveFormsModule,
            ProgressBarConfigModel,
            ProgressBarDataModel ],
          providers: [FormBuilder,ServerApiInterfaceServiceService,
            DatePipe,ValidationService
          ],
      }),
      // 👇 Wraps our stories with a decorator
     // componentWrapperDecorator(story => `<div style="margin: 3em">${story}</div>`),
    ],
    excludeStories: /.*Data$/,
    title: 'ProgressBarComponent',
  } as Meta;


export const actionsData = {
    onGetValues: action('getValues'),
};


const Template: Story<ProgressBarComponent> = args => ({
    props: {
      ...args,
      //  onGetValues: actionsData.onGetValues,
    //   onArchiveTask: TaskStories.actionsData.onArchiveTask,

    },
  });

export const Default = Template.bind({});
Default.args = {
  isStoryBookMode:false,
  dataModel:  ProgressBarDataModel.getInstance(),
  configModel:  {}
};

export const SelfDataLoad = Template.bind({});
SelfDataLoad.args = {
  isStoryBookMode:false,
  dataModel:  {
    ...ProgressBarDataModel.getInstance(), isSelfDataLoad:true
  },
  configModel:  {}
};

export const DebugMode = Template.bind({});
DebugMode.args = {
  isStoryBookMode:true,
  dataModel:  {
    ...ProgressBarDataModel.getInstance(), isSelfDataLoad:true
  },
  configModel:  {}
};


