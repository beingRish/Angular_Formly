import { Component } from '@angular/core';
import { FieldType, FormlyFieldConfig } from '@ngx-formly/core';

@Component({
  selector: 'app-file-type',
  template: `
    <input type="file"  [formlyAttributes]="field" />
  `,
  styles: [
  ]
})
export class FormlyFieldFile extends FieldType<FormlyFieldConfig>{

}
