import { Component } from '@angular/core';
import { FormGroup } from '@angular/forms';
import { FormlyFormOptions, FormlyFieldConfig } from '@ngx-formly/core';

@Component({
  selector: 'app-nested-forms',
  templateUrl: './nested-forms.component.html',
  styles: [`
      h2 span {
        color: #888;
        background-color: transparent;
        border: #b0aaaa 1px solid;
        border-radius: 5px;
        padding: 1px;
      }
    `]
})
export class NestedFormsComponent {

  form = new FormGroup({});
  model: any = {};
  options: FormlyFormOptions = {};

  fields: FormlyFieldConfig[] = [
    {
      key: 'firstName',
      type: 'input',
      props: {
        required: true,
        type: 'text',
        label: 'First Name'
      }
    },
    {
      key: 'address',
      wrappers: ['panel'],
      props: {
        label: 'Address'
      },
      fieldGroup: [
        {
          key: 'town',
          type: 'input',
          props: {
            required: true,
            type: 'text',
            label: 'Town'
          }
        }
      ]
    }
  ]

  submit() {
    if (this.form.valid) {
      alert(JSON.stringify(this.model));
    }
  }
}
