import { Component } from '@angular/core';
import { FormGroup } from '@angular/forms';
import { FormlyFormOptions, FormlyFieldConfig } from '@ngx-formly/core';

@Component({
  selector: 'app-advanced-layout',
  templateUrl: './advanced-layout.component.html',
  styles: [`
    h6 span{
      color: #888;
      background-color: transparent;
      border: #b0aaaa 1px solid;
      border-radius: 5px;
      padding: 1px;
    }
`]
})
export class AdvancedLayoutComponent {
  form = new FormGroup({});
  model: any = {};
  options: FormlyFormOptions = {};

  fields: FormlyFieldConfig[] = [
    {
      fieldGroupClassName: 'row',
      fieldGroup: [
        {
          className: 'col-6',
          type: 'input',
          key: 'firstName',
          props: {
            label: 'First Name',
          },
        },
        {
          className: 'col-6',
          type: 'input',
          key: 'lastName',
          props: {
            label: 'Last Name',
          },
          expressions: {
            'props.disabled': '!model.firstName',
          },
        },
      ],
    },
    {
      className: 'section-label',
      template: `
        <hr />
        <div>
          <strong>
            Address:
          </strong>
        </div>
      `
    },
    {
      fieldGroupClassName: 'row',
      fieldGroup: [
        {
          className: 'col-6',
          type: 'input',
          key: 'street',
          props: {
            label: 'Street',
          },
        },
        {
          className: 'col-3',
          type: 'input',
          key: 'cityName',
          props: {
            label: 'City',
          },
        },
        {
          className: 'col-3',
          type: 'input',
          key: 'zip',
          props: {
            type: 'number',
            label: 'Zip',
            max: 99999,
            min: 0,
            pattern: '\\d{5}',
          },
        },
      ]
    },
    {
      template: '<hr />',
    },
    {
      type: 'checkbox',
      key: 'otherToo',
      props: {
        label: 'Other Checkbox',
      },
    },
  ];


  submit() {
    alert(JSON.stringify(this.model));
  }
}
