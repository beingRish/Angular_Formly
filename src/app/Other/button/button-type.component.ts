import { Component } from '@angular/core';
import { FieldType } from '@ngx-formly/core';

@Component({
  selector: 'formly-field-button',
  template: `
    <div>
      <button [type]="props.type" [ngClass]="'btn btn-' + props.type" (click)="onClick($event)">
        {{ props.type }}
      </button>
    </div>
  `,
})
export class FormlyFieldButton extends FieldType {
  onClick($event: Event) {
    if (this.props['onclick']) {
      this.props['onClick']($event);
    }
  }
}