import { Component } from '@angular/core';
import { FormGroup } from '@angular/forms';
import { FormlyFormOptions, FormlyFieldConfig } from '@ngx-formly/core';

@Component({
  selector: 'app-file-input',
  templateUrl: './file-input.component.html',
  styles: [
  ]
})
export class FileInputComponent {
  form = new FormGroup({});
  model = {};
  options: FormlyFormOptions = {};
  fields: FormlyFieldConfig[] = [
    {
      key: 'file',
      type: 'file',
    },
  ];
}
