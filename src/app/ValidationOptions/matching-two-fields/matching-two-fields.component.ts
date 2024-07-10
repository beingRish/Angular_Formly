import { Component } from '@angular/core';
import { FormGroup } from '@angular/forms';
import { FormlyFieldConfig, FormlyFormOptions } from '@ngx-formly/core';

@Component({
  selector: 'app-matching-two-fields',
  templateUrl: './matching-two-fields.component.html',
  styles: [
  ]
})
export class MatchingTwoFieldsComponent {
  form = new FormGroup({});
  model = {};
  options: FormlyFormOptions = {};

  fields : FormlyFieldConfig[] = [
    {
      validators: {
        validation: [{ name: 'fieldMatch', options: { errorPath: 'passwordConfirm' } }]
      },
      fieldGroup: [
        {
          key: 'password',
          type: 'input',
          props: {
            type: 'password',
            label: 'Password',
            placeholder: 'Must be at least 3 character',
            required: true,
            minLength: 3,
          }
        },
        {
          key: 'passwordConfirm',
          type: 'input',
          props: {
            type: 'password',
            label: 'Confirm Password',
            placeholder: 'Please re-enter your password',
            required: true
          }
        }
      ]
    }
  ]


  submit() {
    if (this.form.valid) {
      alert(JSON.stringify(this.model))
    }
  }

}
