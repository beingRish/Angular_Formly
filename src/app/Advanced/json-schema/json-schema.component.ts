import { HttpClient } from '@angular/common/http';
import { Component, OnDestroy } from '@angular/core';
import { FormGroup } from '@angular/forms';
import { FormlyFieldConfig, FormlyFormOptions } from '@ngx-formly/core';
import { FormlyJsonschema } from '@ngx-formly/core/json-schema';

import { takeUntil, tap } from 'rxjs/operators';
import { Subject } from 'rxjs';

@Component({
  selector: 'app-json-schema',
  templateUrl: './json-schema.component.html',
  styles: [
  ]
})
export class JsonSchemaComponent implements OnDestroy{
  private destroy$: Subject<any> = new Subject<any>();
  form!: FormGroup;
  model: any;
  options!: FormlyFormOptions;
  fields!: FormlyFieldConfig[]

  type = '';
  examples = [
    'simple',
    'nested',
    'arrays',
    'numbers',
    'references',
    'schema_dependencies',
    'null_field',
    'nullable',
    'allOf',
    'anyOf',
    'oneOf',
    'select_alternatives',
  ];

  constructor(
    private formlyJsonschema: FormlyJsonschema, 
    private http: HttpClient
    ){
      this.loadExample(this.examples[0])
    }

  loadExample(type: string){
    this.http
      .get<any>(`assets/json-schema/${type}.json`)
      .pipe(
        tap(({ schema, model }) => {
          this.type = type;
          this.form = new FormGroup({});
          this.options = {};
          this.fields = [this.formlyJsonschema.toFieldConfig(schema)];
          this.model;
        }),
        takeUntil(this.destroy$),
      )
      .subscribe();
  }

  submit() {
    alert(JSON.stringify(this.model));
  }
  
  public ngOnDestroy(): void {
    this.destroy$.next(true);
    this.destroy$.complete();
  }
}
