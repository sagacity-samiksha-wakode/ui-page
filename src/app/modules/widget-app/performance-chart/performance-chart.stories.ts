import { CommonModule, DatePipe } from '@angular/common';
import { FormBuilder, FormsModule, ReactiveFormsModule } from '@angular/forms';
import { Meta, Story, addDecorator, componentWrapperDecorator, moduleMetadata } from '@storybook/angular';

import { HttpClientModule } from '@angular/common/http';
import { Label } from 'ng2-charts';
import { MaterialModule } from 'src/app/materials/material.module';
import {PerformanceChartComponent} from './performance-chart.component';
import { ServerApiInterfaceServiceService } from 'src/app/services/common/server-api-interface-service.service';
import { ValidationService } from 'src/app/services/common/validation.service';
import { action } from '@storybook/addon-actions';

// import { initializeWorker, mswDecorator } from 'msw-storybook-addon';

// import { rest } from 'msw'


// initializeWorker();
// addDecorator(mswDecorator);




export default {
    component: PerformanceChartComponent,
    decorators: [
      moduleMetadata({
        // 👇 Imports both components to allow component composition with storybook
        declarations: [PerformanceChartComponent],
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
    title: 'PerformanceChartComponent',

    argTypes: {


     },
  } as Meta;





export const actionsData = {
    onGetValues: action('getValues'),
    controls: { expanded: true },
};


const Template: Story<PerformanceChartComponent> = args => ({
    props: {
      ...args,
       },
  });



export const Default = Template.bind({});
Default.args = {
  isStoryBookMode:false,
  title:"Battery Indicator",
  configModel:  {}
};

export const Value = Template.bind({});
Value.args = {
  isStoryBookMode:false,
  title:"Chart with value",
  configModel:  {}
};

export const Title = Template.bind({});
Title.args = {
  isStoryBookMode:false,
  title:" ",
  configModel:  {}
};

