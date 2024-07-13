import { Component } from '@angular/core';
import { FormGroup } from '@angular/forms';
import { FormlyFormOptions, FormlyFieldConfig } from '@ngx-formly/core';

@Component({
  selector: 'app-material-field-prefix-sufix',
  templateUrl: './material-field-prefix-sufix.component.html',
  styles: [
  ]
})
export class MaterialFieldPrefixSufixComponent {

  form = new FormGroup({});
  model: any = {};
  options: FormlyFormOptions = {};

  fields: FormlyFieldConfig[] = [
    {
      key: 'input',
      type: 'input',
      props: {
        label: 'Firstname',
        addonLeft: {
          icon: 'face',
        },
        addonRight: {
          text: '$'
        }
      }
    }
  ]
}
