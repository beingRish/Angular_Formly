import { Component } from '@angular/core';
import { FormGroup } from '@angular/forms';
import { FormlyFormOptions, FormlyFieldConfig } from '@ngx-formly/core';

@Component({
  selector: 'app-hide-fields-with-angular-animations',
  templateUrl: './hide-fields-with-angular-animations.component.html',
  styles: [
    `
      ::ng-deep formly-field {
        display: block !important;
      }
    `,
  ]
})
export class HideFieldsWithAngularAnimationsComponent {
  form = new FormGroup({});
  model: any = {};
  options: FormlyFormOptions = {};

  fields: FormlyFieldConfig[] = [
    {
      key: 'firstName',
      type: 'input',
      props: {
        label: 'First name',
        placeholder: 'Type in here to display the hidden field using slideInOut animation',
      },
    },
    {
      key: 'lastname',
      type: 'input',
      props: {
        label: 'Last name',
      },
      expressions: {
        hide: ({ model }) => !model.firstName,
      },
    },
  ]

  submit() {
    if (this.form.valid) {
      alert(JSON.stringify(this.model));
    }
  }
}
