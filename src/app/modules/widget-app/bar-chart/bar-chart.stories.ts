import { CommonModule, DatePipe } from '@angular/common';
import { FormBuilder, FormsModule, ReactiveFormsModule } from '@angular/forms';
import { Meta, Story, componentWrapperDecorator, moduleMetadata } from '@storybook/angular';

import { BarChartComponent } from './bar-chart.component';
import { HttpClientModule } from '@angular/common/http';
import { MaterialModule } from 'src/app/materials/material.module';
import { ServerApiInterfaceServiceService } from 'src/app/services/common/server-api-interface-service.service';
import { ValidationService } from 'src/app/services/common/validation.service';
import { action } from '@storybook/addon-actions';

export default {
    component: BarChartComponent,
    decorators: [
      moduleMetadata({
        // 👇 Imports both components to allow component composition with storybook
        declarations: [BarChartComponent],
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
    title: 'BarChartComponent',
  } as Meta;


export const actionsData = {
    onGetValues: action('getValues'),
};


const Template: Story<BarChartComponent> = args => ({
    props: {
      ...args,


    },
  });

export const Default = Template.bind({});
Default.args = {
  title: 'Button',
  component: BarChartComponent,
  argTypes: {
    variant: {
      options: ['primary', 'secondary'],
      control: { type: 'radio' }
    }
  }
};
