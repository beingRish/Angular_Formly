import { Component } from '@angular/core';
import { FieldType, FormlyFieldConfig } from '@ngx-formly/core';

@Component({
  selector: 'formly-field-tabs',
  template: `
    <mat-tab-group>
      <mat-tab
        *ngFor="let tab of field.fieldGroup; let i = index; let last = last"
        [label]="tab.props!.label || 'Default Label'"
      >
        <formly-field [field]="tab"></formly-field>

        <button *ngIf="last" class="btn btn-primary" [disabled]="!form.valid" type="submit">Submit</button>
      </mat-tab>
    </mat-tab-group>
  `,
})
export class FormlyFieldTabs extends FieldType {
  isValid(field: FormlyFieldConfig): boolean {
    if (field.key && field.formControl) {
      return field.formControl.valid;
    }
 
    return field.fieldGroup ? field.fieldGroup.every((f) => this.isValid(f)) : true;
  }
}