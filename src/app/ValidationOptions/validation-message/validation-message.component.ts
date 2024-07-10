import { Component } from '@angular/core';
import { FormGroup } from '@angular/forms';
import { FormlyFieldConfig, FormlyFormOptions } from '@ngx-formly/core';

@Component({
  selector: 'app-validation-message',
  templateUrl: './validation-message.component.html',
  styles: [
  ]
})
export class ValidationMessageComponent {
  form = new FormGroup({});
  model: any = {};
  options: FormlyFormOptions = {};
  fields: FormlyFieldConfig[] = [
    {
      key: 'name',
      type: 'input',
      props: {
        label: 'Name (custom validation message declared in ngModule)',
        required: true,
        maxLength: 5
      }
    }

  ]

  submit() {
    if (this.form.valid) {
      alert(JSON.stringify(this.model));
    }

  }
}
