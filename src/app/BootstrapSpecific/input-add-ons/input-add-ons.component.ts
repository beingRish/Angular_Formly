import { Component } from '@angular/core';
import { FormGroup } from '@angular/forms';
import { FormlyFormOptions, FormlyFieldConfig } from '@ngx-formly/core';

@Component({
  selector: 'app-input-add-ons',
  templateUrl: './input-add-ons.component.html',
  styles: [
  ]
})
export class InputAddOnsComponent {

  form = new FormGroup({});
  model: any = {};
  options: FormlyFormOptions = {};

  fields: FormlyFieldConfig[] = [
    {
      key: 'left',
      type: 'input',
      props: {
        placeholder: 'Formly is terrified!',
        addonLeft: {
          class: 'fa fa-euro',
        },
        label: 'One add-on on the left (icon)',
      },
    },
    {
      key: 'both',
      type: 'input',
      props: {
        placeholder: 'How great is this?',
        addonLeft: {
          class: 'fa fa-home',
        },
        addonRight: {
          text: '$',
        },
        label: 'One add-on on both side (left: icon, right: text)',
      },
    },
    {
      key: 'right',
      type: 'input',
      props: {
        placeholder: `Nice, isn't it??`,

        addonRight: {
          class: 'fa fa-heart',
        },
        label: 'One add-on on the right (icon)',
      },
    },
  ]
   
  
  submit() {
    alert(JSON.stringify(this.model));
  }
}
