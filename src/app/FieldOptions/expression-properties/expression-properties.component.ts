import { Component } from '@angular/core';
import { FormGroup } from '@angular/forms';

@Component({
  selector: 'app-expression-properties',
  templateUrl: './expression-properties.component.html',
  styles: [``]
})
export class ExpressionPropertiesComponent {
  form = new FormGroup({});
  model : any = {};

  fields = [
    {
      key: 'text',
      type: 'input',
      props: {
        label: 'Text',
        placeholder: 'Type here to see the other field become enabled...',
      }
    },
    {
      key: 'text2',
      type: 'input',
      props: {
        label: 'Hey!',
        placeholder: 'This one is disabled if there is no text in the other input',
      },
      expressions: {
        'props.disabled': '!model.text'
      }
    }
  ]

  submit(){
    alert(JSON.stringify(this.model))
  }
}
