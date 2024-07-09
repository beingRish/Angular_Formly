import { Component } from '@angular/core';
import { FormGroup } from '@angular/forms';
import { FormlyFieldConfig } from '@ngx-formly/core';

@Component({
  selector: 'app-hide-fields',
  templateUrl: './hide-fields.component.html',
  styles: [``]
})
export class HideFieldsComponent {
  form = new FormGroup({});

  model : any = {}

  fields : FormlyFieldConfig[] = [
    {
      key: 'name',
      type: 'input',
      props: {
        label: 'Name',
        placeholder: 'Type to display the hidden field'
      }
    },
    {
      key: 'iLikeAngular',
      type: 'checkbox',
      props: {
        label: 'I Like Angular'
      },
      expressions: {
        hide: '!model.name'
      }
    }
  ]

  submit(){
    alert(JSON.stringify(this.model))
  }
}
