import { Component } from '@angular/core';
import { FormGroup } from '@angular/forms';
import { FormlyFieldConfig, FormlyFormOptions } from '@ngx-formly/core';

@Component({
  selector: 'app-reset-model',
  templateUrl: './reset-model.component.html',
  styles: [``]
})
export class ResetModelComponent {
  form = new FormGroup({});
  model: any = {};
  options: FormlyFormOptions = {};
  fields : FormlyFieldConfig[] = [
    {
      key: 'text',
      type: 'input',
      props: {
        label: 'Some awesome text *',
        placeholder: 'Some sweet text',
        required: true
      }
    },
    {
      key: 'candy',
      type: 'select',
      props: {
        label: 'Multiple Options',
        options: [
          { label: 'Snickers', value: 'snickers' },
          { label: 'Baby Ruth', value: 'baby_ruth' },
          { label: 'Milky Way', value: 'milky_way' },
        ]
      }
    }
  ]

  submit(){
    alert(JSON.stringify(this.model));
  }

  resetModel() {
    this.form.reset();
  }

  updateInitialValue() {
    this.form.patchValue(this.model);
  }
}
