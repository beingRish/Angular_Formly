import { Component } from '@angular/core';
import { FormGroup } from '@angular/forms';
import { FormlyFieldConfig, FormlyFormOptions } from '@ngx-formly/core';

@Component({
  selector: 'app-presets',
  templateUrl: './presets.component.html',
  styles: [`
      h2 span{
      color: #888;
      background-color: transparent;
      border: #b0aaaa 1px solid;
      border-radius: 5px;
      padding: 1px;
    }
  `]
})
export class PresetsComponent {
  form = new FormGroup({});
  model: any = {};
  options: FormlyFormOptions = {};

  fields: FormlyFieldConfig[] = [
    {
      type: '#salutation',
    },
    {
      type: '#firstName',
    },
    {
      type: '#lastName',
      props: {
        label: 'Last Name!!!!',
        required: true,
      },
    },
  ];
}
