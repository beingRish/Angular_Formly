import { Component } from '@angular/core';
import { FormGroup } from '@angular/forms';
import { FormlyFieldConfig, FormlyFormOptions } from '@ngx-formly/core';
import { filter, startWith, tap } from 'rxjs/operators';

@Component({
  selector: 'app-repeating-section-with-length-input',
  templateUrl: './repeating-section-with-length-input.component.html',
  styles: [
  ]
})
export class RepeatingSectionWithLengthInputComponent {
  form = new FormGroup({});
  model: any = {
    investmentsCount: 3,
    investments: [],
  };
  options: FormlyFormOptions = {};

  fields: FormlyFieldConfig[] = [
    {
      key: 'investmentsCount',
      type: 'input',
      defaultValue: 3,
      props: {
        type: 'number',
        label: 'Investments count',
        required: true,
        min: 1,
      },
      hooks: {
        onInit: (field) => {
          return field.formControl?.valueChanges.pipe(
            startWith(field.formControl.value),
            filter((v) => v > 0),
            tap((value) => {
              if (this.model.investments.length !== value) {
                this.model.investments.length = value;
                this.model = { ...this.model, investmentsCount: value };
              }
            }),
          );
        },
      },
    },
    {
      key: 'investments',
      type: 'repeatLengthInput',
      fieldArray: {
        type: 'input',
        key: 'investmentName',
        props: {
          label: 'Name of Investment:',
          required: true,
        },
      },
    },
  ]

  submit() {
    alert(JSON.stringify(this.model));
  }
}
