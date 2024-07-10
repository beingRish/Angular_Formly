import { Component } from '@angular/core';
import { FormGroup } from '@angular/forms';
import { FormlyFieldConfig, FormlyFormOptions } from '@ngx-formly/core';

@Component({
  selector: 'app-disable-submit-button',
  templateUrl: './disable-submit-button.component.html',
  styles: [
  ]
})
export class DisableSubmitButtonComponent {


  form = new FormGroup({})
  model = {
    showErrorState: true,
  }
  options: FormlyFormOptions = {}
  fields: FormlyFieldConfig[] = [
    {
      key: 'text',
      type: 'input',
      props: {
        label: 'Text',
        placeholder: 'This is required!',
        required: true,
        readOnly: true,
      }
    }
  ]

  submit(){
    if(this.form.valid){
      alert(JSON.stringify(this.model))
    }
  }
}
