import { Component } from '@angular/core';
import { FormGroup } from '@angular/forms';
import { FormlyFormOptions, FormlyFieldConfig } from '@ngx-formly/core';

@Component({
  selector: 'app-toggle-required-field',
  templateUrl: './toggle-required-field.component.html',
  styles: [
  ]
})
export class ToggleRequiredFieldComponent {
  form = new FormGroup({})
  model: any = {}
  options: FormlyFormOptions = {}
  fields: FormlyFieldConfig[] = [
    {
      key: 'checked',
      type: 'checkbox',
      props: {
        label: 'Required?',
      },
    },
    {
      key: 'text',
      type: 'input',
      props: {
        label: 'Hey!',
        placeholder: 'Formly is terrific!',
      },
      validation: {
        show: true,
      },
      expressions: {
        'props.required': 'model.checked',
      },
    },
  ]
  
  
  
  submit(){
    if(this.form.valid){
      alert(JSON.stringify(this.model))
    }
  }
}
