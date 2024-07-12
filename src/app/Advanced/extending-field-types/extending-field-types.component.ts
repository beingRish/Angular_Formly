import { Component } from '@angular/core';
import { FormGroup } from '@angular/forms';
import { FormlyFormOptions, FormlyFieldConfig } from '@ngx-formly/core';

@Component({
  selector: 'app-extending-field-types',
  templateUrl: './extending-field-types.component.html',
  styles: [`
  h2 span{
    color: #888;
    background-color: transparent;
    border: #b0aaaa 1px solid;
    border-radius: 5px;
    padding: 1px;
  }
`
  ]
})
export class ExtendingFieldTypesComponent {

  form = new FormGroup({});
  model: any = {};
  options: FormlyFormOptions = {};

  fields: FormlyFieldConfig[] = [
    {
      props: { label: 'Personal data' },
      fieldGroup: [
        {
          key: 'input',
          type: 'input',
          props: {
            label: 'Input Field',
          },
        },
        {
          key: 'default-password',
          type: 'password',
        },
        {
          key: 'customized-password',
          type: 'password',
          props: {
            label: 'Password Field (with custom label)',
          },
        },
      ],
    },
  ];
}
