import { Component } from '@angular/core';
import { FormGroup } from '@angular/forms';
import { FormlyFormOptions, FormlyFieldConfig } from '@ngx-formly/core';
import { DataService } from 'src/app/Service/data.service';

@Component({
  selector: 'app-bind-observable-to-select',
  templateUrl: './bind-observable-to-select.component.html',
  styles: [
  ]
})
export class BindObservableToSelectComponent {

  form = new FormGroup({});
  model: any = {};
  options: FormlyFormOptions = {};

  fields: FormlyFieldConfig[] = [
    {
      key: 'sport',
      type: 'select',
      props: {
        label: 'Sport',
        options: this.dataService.getSports(),
        valueProp: 'id',
        labelProp: 'name',
      },
    },
  ];

  constructor(private dataService: DataService) {}

  submit() {
    alert(JSON.stringify(this.model));
  }
}
