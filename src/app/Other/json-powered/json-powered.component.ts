import { Component, OnDestroy } from '@angular/core';
import { FormGroup } from '@angular/forms';
import { FormlyFormOptions, FormlyFieldConfig } from '@ngx-formly/core';
import { Subject, takeUntil } from 'rxjs';
import { UserService } from 'src/app/Service/user.service';

@Component({
  selector: 'app-json-powered',
  templateUrl: './json-powered.component.html',
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
export class JsonPoweredComponent implements OnDestroy {

  private destroy$: Subject<any> = new Subject<any>();
  form = new FormGroup({});
  options: FormlyFormOptions = {};
  model: any;
  fields: FormlyFieldConfig[] = [] ;

  constructor(private userService: UserService) {
    this.userService
      .getUserData()
      .pipe(takeUntil(this.destroy$))
      .subscribe(([model, fields]) => {
        this.model = model;
        this.fields = this.mapFields(fields);
      });
  }

  submit() {
    if (this.form.valid) {
      alert(JSON.stringify(this.model));
    }
  }


  /**
    * Adjust the JSON fields loaded from the server.
    */
  mapFields(fields: FormlyFieldConfig[]) {
    return fields.map((f) => {
      // Bind an observable to `color` field.
      if (f.key === 'color' && f.props) {
        f.type = 'radio';
        f.props.options = this.userService.getColors();
      }

      return f;
    });
  }

  public ngOnDestroy(): void {
    this.destroy$.next(true);
    this.destroy$.complete();
  }
}