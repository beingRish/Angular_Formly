import { Component } from '@angular/core';
import { FormGroup } from '@angular/forms';
import { FormlyFormOptions, FormlyFieldConfig } from '@ngx-formly/core';

@Component({
  selector: 'app-repeating-section',
  templateUrl: './repeating-section.component.html',
  styles: [`
  h6 span{
    color: #888;
    background-color: transparent;
    border: #b0aaaa 1px solid;
    border-radius: 5px;
    padding: 1px;
  }
`
  ]
})
export class RepeatingSectionComponent {
  form = new FormGroup({});
  model: any = {
    tasks: [],
  };
  options: FormlyFormOptions = {};

  fields: FormlyFieldConfig[] = [
    {
      key: 'tasks',
      type: 'repeat',
      props: {
        addText: 'Add Task',
        label: 'TODO LIST',
      },
      fieldArray: {
        type: 'input',
        props: {
          placeholder: 'Task name',
          required: true,
        },
      },
    },
  ];

  submit() {
    alert(JSON.stringify(this.model));
  }
}
