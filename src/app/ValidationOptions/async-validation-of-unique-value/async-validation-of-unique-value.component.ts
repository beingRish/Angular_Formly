import { Component } from '@angular/core';
import { AbstractControl, FormGroup } from '@angular/forms';
import { FormlyFieldConfig, FormlyFormOptions } from '@ngx-formly/core';
import { of } from 'rxjs';

@Component({
  selector: 'app-async-validation-of-unique-value',
  templateUrl: './async-validation-of-unique-value.component.html',
  styles: [
  ]
})
export class AsyncValidationOfUniqueValueComponent {
  form = new FormGroup({})
  model = {}
  options: FormlyFormOptions = {}
  existingUsers = ['user1', 'user2', 'user3'];

  fields: FormlyFieldConfig[] = [
    {
      key: 'username1',
      type: 'input',
      props: {
        label: 'Username(validated using `Promise`)',
        placeholder: 'Username',
        required: true,
      },
      asyncValidators: {
        uniqueUsername: {
          expression: (control: AbstractControl) => {
            return new Promise ((resolve) => {
              setTimeout(() => {
                resolve(this.existingUsers.indexOf(control.value) === -1);
              }, 1000);
            });
          },
          message: 'This username is already taken.'
        }
      }
    },
    {
      key: 'username2',
      type: 'input',
      props: {
        label: 'Username(validated using `Observable`)',
        placeholder: 'Username',
        required: true,
      },
      asyncValidators: {
        uniqueUsername: {
          expression: (control: AbstractControl) => {
            return of(this.existingUsers.indexOf(control.value) === -1);
          },
          message: 'This username is already taken.'
        },
      }
    }
  ]

  submit() {
    if (this.form.valid) {
      alert(JSON.stringify(this.model));
    }
  }
}

