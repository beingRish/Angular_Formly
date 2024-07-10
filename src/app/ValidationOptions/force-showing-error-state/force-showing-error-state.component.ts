import { Component } from '@angular/core';
import { FormGroup } from '@angular/forms';
import { FormlyFieldConfig, FormlyFormOptions } from '@ngx-formly/core';

@Component({
  selector: 'app-force-showing-error-state',
  templateUrl: './force-showing-error-state.component.html',
  styles: [
  ]
})
export class ForceShowingErrorStateComponent {
  form = new FormGroup({})
  model = {
    showErrorState: true,
  }
  options: FormlyFormOptions = {}
  fields: FormlyFieldConfig[] = [
    {
      key: 'email',
      type: 'input',
      props: {
        type: 'email',
        label: 'Email',
        required: true,
      },
      validation: {
        show: true,
      },
      expressions: {
        'validation.show': 'model.showErrorState',
      },
    },
    {
      key: 'showErrorState',
      type: 'checkbox',
      props: {
        label: 'Force show error state',
      }
    }
  ]

  submit(){
    if(this.form.valid){
      alert(JSON.stringify(this.model))
    }
  }
}
