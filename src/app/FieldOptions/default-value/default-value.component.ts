import { Component } from '@angular/core';
import { FormGroup } from '@angular/forms';
import { FormlyFieldConfig, FormlyFormOptions } from '@ngx-formly/core';

@Component({
  selector: 'app-default-value',
  templateUrl: './default-value.component.html',
  styles: [``]
})
export class DefaultValueComponent {

  form = new FormGroup({})

  model : any = {
    lastName: 'Singh'
  };

  options : FormlyFormOptions = {};

  fields : FormlyFieldConfig[] = [
    {
      key: 'fullName',
      type: 'input',
      defaultValue: 'Rishabh',
      props: {
        label: 'Full Name',
      }
    },
    {
      key: 'lastName',
      type: 'input',
      props: {
        label: 'Last Name',
      }
    },
    {
      key: 'candy',
      type: 'select',
      defaultValue: 'milky_way',
      props: {
        label: 'Favourite Candy',
        options: [
          { label: 'Snickers', value: 'snickers' },
          { label: 'Baby Ruth', value: 'baby_ruth' },
          { label: 'Milky Way', value: 'milky_way' },
        ]
      }
    },
    {
      key: 'agree',
      type: 'checkbox',
      props: {
        label: 'Agree?',
        required: true
      }
    }
  ]


  submit() {
    alert(JSON.stringify(this.model))
  }
}
