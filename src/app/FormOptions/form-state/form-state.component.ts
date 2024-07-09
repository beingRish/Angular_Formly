import { Component } from '@angular/core';
import { FormGroup } from '@angular/forms';
import { FormlyFieldConfig, FormlyFormOptions } from '@ngx-formly/core';

@Component({
  selector: 'app-form-state',
  templateUrl: './form-state.component.html',
  styles: [
  ]
})
export class FormStateComponent {
  form = new FormGroup({});
  model = {};
  options: FormlyFormOptions = {
    formState: {
      disabled: true,
    },
  };

  fields: FormlyFieldConfig[] = [
    {
      key: 'text',
      type: 'input',
      props: {
        label: 'First Name',
      },
      expressions: {
        // apply expressionProperty for disabled based on formState
        'props.disabled': 'formState.disabled',
      },
    },
  ];

  toggleDisabled(){
    this.options.formState.disabled = !this.options.formState.disabled;
  }

  submit(){
    alert(JSON.stringify(this.model))
  }
}
