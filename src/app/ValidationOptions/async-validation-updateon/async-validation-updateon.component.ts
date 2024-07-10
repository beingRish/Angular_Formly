import { Component } from '@angular/core';
import { AbstractControl, FormGroup } from '@angular/forms';
import { FormlyFieldCheckbox } from '@ngx-formly/bootstrap/checkbox';
import { FormlyFieldConfig, FormlyFormOptions } from '@ngx-formly/core';
import { of } from 'rxjs';

@Component({
  selector: 'app-async-validation-updateon',
  templateUrl: './async-validation-updateon.component.html',
  styles: [
  ]
})
export class AsyncValidationUpdateonComponent {
  form = new FormGroup({});
  model = {};
  options: FormlyFormOptions = {};

  existingUsers = ['user1', 'user2', 'user3']

  fields: FormlyFieldConfig[] = [
    {
      key: 'username1',
      type: 'input',
      props: {
        label: 'Username(validated on `blur`)',
        placeholder: 'Username',
        required: true,
      },
      modelOptions: {
        updateOn: 'blur'
      },
      asyncValidators: {
        uniqueUsername: {
          expression: (control: AbstractControl) => {
            return of(this.existingUsers.indexOf(control.value) === -1);
          },
          message: 'This username is already taken.',
        },
      },
    },
    
  ]


  submit() {
    if (this.form.valid) {
      alert(JSON.stringify(this.model))
    }
  }
}
