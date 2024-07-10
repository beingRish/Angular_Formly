import { Component } from '@angular/core';
import { FormGroup } from '@angular/forms';
import { FormlyFormOptions, FormlyFieldConfig } from '@ngx-formly/core';

@Component({
  selector: 'app-bootstrap-horizontal',
  templateUrl: './bootstrap-horizontal.component.html',
  styles: [
  ]
})
export class BootstrapHorizontalComponent {
  form = new FormGroup({});
  model: any = {};
  options: FormlyFormOptions = {};

  fields: FormlyFieldConfig[] = [
    {
      key: 'email',
      type: 'input',
      props: {
        label: 'Email',
        placeholder: 'Formly is teffific!',
        type: 'email',
        required: true
      }
    },
    {
      key: 'password',
      type: 'input',
      props: {
        label: 'Password',
        placeholder: 'Formly is teffific!',
        type: 'password',
        required: true
      }
    },
  ]
  
  
  
  submit() {
    alert(JSON.stringify(this.model));
  }
}
