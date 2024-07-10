import { Component } from '@angular/core';
import { FormGroup } from '@angular/forms';
import { FormlyFieldConfig, FormlyFormOptions } from '@ngx-formly/core';

@Component({
  selector: 'app-built-in-validations',
  templateUrl: './built-in-validations.component.html',
  styles: [
  ]
})
export class BuiltInValidationsComponent {
  form = new FormGroup({})
  model = {};
  options : FormlyFormOptions = {}
  fields: FormlyFieldConfig[] = [
    {
      key: 'text1',
      type: 'input',
      props: {
        label: 'Name(required)',
        required: true
      }
    },
    {
      key: 'text2',
      type: 'input',
      props: {
        label: 'Age(min= 18, max= 40)',
        type: 'number',
        min: 18,
        max: 40,
        required: true
      }
    },
    {
      key: 'text3',
      type: 'input',
      props: {
        label: 'Password(minLength = 6)',
        type: 'password',
        minLength: 6,
        required: true,
      }
    },
    {
      key: 'text4',
      type: 'textarea',
      props: {
        label: 'Comment (maxLength = 100)',
        maxlength: 100,
        rows: 5,
        required: true
      }
    },
    {
      key: 'text5',
      type: 'input',
      props: {
        label: 'IP Address (pattern = /(d{1,3}.){3}d{1,3}/)',
        pattern: /(\d{1,3}\.){3}\d{1,3}/,
        required: true
      },
      validation: {
        messages: {
          pattern: (error: any, field: FormlyFieldConfig) => `"${field?.formControl?.value}" is not a valid IP Address`,
        }
      }
    }
  ]


  submit(){
    if (this.form.valid) {
      alert(JSON.stringify(this.model));
    }
  }
}
