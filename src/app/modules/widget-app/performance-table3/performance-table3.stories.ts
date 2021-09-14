import { CommonModule, DatePipe } from '@angular/common';
import { FormBuilder, FormsModule, ReactiveFormsModule } from '@angular/forms';
import { Meta, Story, addDecorator, componentWrapperDecorator, moduleMetadata } from '@storybook/angular';

import { HttpClientModule } from '@angular/common/http';
import { MaterialModule } from 'src/app/materials/material.module';
import { PerformanceTable3Component } from './performance-table3.component';
import { ServerApiInterfaceServiceService } from 'src/app/services/common/server-api-interface-service.service';
import { ValidationService } from 'src/app/services/common/validation.service';
import { action } from '@storybook/addon-actions';

// import { initializeWorker, mswDecorator } from 'msw-storybook-addon';









// import { rest } from 'msw'

// initializeWorker();
// addDecorator(mswDecorator);




export default {
    component: PerformanceTable3Component,
    decorators: [
      moduleMetadata({
        // 👇 Imports both components to allow component composition with storybook
        declarations: [PerformanceTable3Component],
        imports: [FormsModule, HttpClientModule,    CommonModule,
          MaterialModule,
          FormsModule,
          ReactiveFormsModule ],
        providers: [FormBuilder,ServerApiInterfaceServiceService,
          DatePipe,ValidationService
        ],
      }),
      // 👇 Wraps our stories with a decorator
     // componentWrapperDecorator(story => `<div style="margin: 3em">${story}</div>`),
    ],
    excludeStories: /.*Data$/,
    title: 'PerformanceTable3Component',
  } as Meta;


export const actionsData = {
    onGetValues: action('getValues'),
};


const Template: Story<PerformanceTable3Component> = args => ({
    props: {
      ...args,
      //  onGetValues: actionsData.onGetValues,
    //   onArchiveTask: TaskStories.actionsData.onArchiveTask,

    },
  });

export const Default = Template.bind({});
Default.args = {
  isStoryBookMode:false,

  configModel:  {}
};



