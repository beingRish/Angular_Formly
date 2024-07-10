import { Component } from '@angular/core';
import { FormGroup } from '@angular/forms';
import { FormlyFormOptions, FormlyFieldConfig } from '@ngx-formly/core';

@Component({
  selector: 'app-table-rows',
  templateUrl: './table-rows.component.html',
  styles: [`
    h6 span{
      color: #888;
      background-color: transparent;
      border: #b0aaaa 1px solid;
      border-radius: 5px;
      padding: 1px;
    }
  `]
})
export class TableRowsComponent {
  form = new FormGroup({})
  model = {
    showErrorState: true,
  }
  options: FormlyFormOptions = {}
  fields: FormlyFieldConfig[] = [
    {
      key: 'text',
      type: 'textarea',
      props: {
        label: 'Textarea with specified rows',
        placeholder: 'This has 10 rows',
        rows: 10,
      }
    }
  ]


  submit(){
    if(this.form.valid){
      alert(JSON.stringify(this.model))
    }
  }
}
