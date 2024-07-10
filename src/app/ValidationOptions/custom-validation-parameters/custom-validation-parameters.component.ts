import { Component } from '@angular/core';
import { FormGroup } from '@angular/forms';
import { FormlyFieldConfig, FormlyFormOptions } from '@ngx-formly/core';

@Component({
  selector: 'app-custom-validation-parameters',
  templateUrl: './custom-validation-parameters.component.html',
  styles: [
  ]
})
export class CustomValidationParametersComponent {
  form = new FormGroup({});
  model: any = {};
  options: FormlyFormOptions = {};
  fields: FormlyFieldConfig[] = [
    {
      key: 'date1',
      type: 'input',
      props: {
        label: 'Date (using default validator options declared in ngModule)',
        type: 'date'
      },
      validators: {
        validation: ['date-future']
      }
    },
    {
      key: 'date2',
      type: 'input',
      props: {
        label: 'Date (passing extra params to the validator)',
        type: 'date'
      },
      validators: {
        validation: [{ name: 'date-future', options: {days: 5} }]
      }
    }
  ]

  submit(){
    if (this.form.valid) {
      alert(JSON.stringify(this.model));
    }
  }
}
