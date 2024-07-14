import { Component } from '@angular/core';
import { FormGroup } from '@angular/forms';
import { FormlyFormOptions, FormlyFieldConfig } from '@ngx-formly/core';

@Component({
  selector: 'app-type',
  templateUrl: './button.component.html',
  styles: [
  ]
})

export class ButtonComponent {
  form = new FormGroup({});
  options: FormlyFormOptions = {};
  model = { someInput: '' };

  fields: FormlyFieldConfig[] = [
    {
      type: 'button',
      props: {
        text: 'With Function',
        onClick: () => alert('You clicked me!'),
      },
    },
    {
      type: 'button',
      props: {
        label: 'Click this guy',
        text: 'JSON Only',
        btnType: 'info',
        onClick: () => {
          if(this.form.valid){
            this.form.get('someInput')?.setValue;
          }
        },
        description: 'These can have labels and stuff too if you want....',
      },
    },
    {
      key: 'someInput',
      type: 'input',
      props: {
        label: 'Some Input',
      },
    },
  ]


  
  submit() {
    if (this.form.valid) {
      alert(JSON.stringify(this.model));
    }
  }
}
