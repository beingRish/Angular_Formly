import { Component } from '@angular/core';
import { FormGroup } from '@angular/forms';
import { FormlyFieldConfig, FormlyFormOptions } from '@ngx-formly/core';

@Component({
  selector: 'app-model-options',
  templateUrl: './model-options.component.html',
  styles: [``]
})
export class ModelOptionsComponent {
  form = new FormGroup({})

  model = {};

  options: FormlyFormOptions = {}

  fields : FormlyFieldConfig[] = [
    
  ]

  submit(){
    alert(JSON.stringify(this.model))
  }
}
