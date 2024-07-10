import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AbstractControl, ReactiveFormsModule } from '@angular/forms';
import { FormlyBootstrapModule } from '@ngx-formly/bootstrap';
import { FormlyFieldConfig, FormlyModule } from '@ngx-formly/core';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ExpressionPropertiesComponent } from './FieldOptions/expression-properties/expression-properties.component';
import { DefaultValueComponent } from './FieldOptions/default-value/default-value.component';
import { HomeComponent } from './home/home.component';
import { HideFieldsComponent } from './FieldOptions/hide-fields/hide-fields.component';
import { ModelOptionsComponent } from './FieldOptions/model-options/model-options.component';
import { ResetModelComponent } from './FormOptions/reset-model/reset-model.component';
import { FormStateComponent } from './FormOptions/form-state/form-state.component';
import { BuiltInValidationsComponent } from './ValidationOptions/built-in-validations/built-in-validations.component';
import { CustomValidationsComponent, ipValidator } from './ValidationOptions/custom-validations/custom-validations.component';
import { CustomValidationParametersComponent } from './ValidationOptions/custom-validation-parameters/custom-validation-parameters.component';
import { ValidationMessageComponent } from './ValidationOptions/validation-message/validation-message.component';

export function IpValidator(control: AbstractControl): any {
  return !control.value || /(\d{1,3}\.){3}\d{1,3}/.test(control.value) ? null : { ip: true };
}
export function dateFutureValidator(
  control: AbstractControl,
  field: FormlyFieldConfig,
  options = {},
  ): any {
  return { 'date-future': { message: `Validator options: ${JSON.stringify(options)}` } }
}

export function minLengthValidationMessage(error: any, field: FormlyFieldConfig){
  return `Should have atleast ${field.props?.minLength} characters`;
}
export function maxLengthValidationMessage(error: any, field: FormlyFieldConfig){
  return `This value should be less than ${field.props?.maxLength} characters`;
}
export function minValidationMessage(error: any, field: FormlyFieldConfig){
  return `This value should be more than ${field.props?.maxLength} characters`;
}
export function maxValidationMessage(error: any, field: FormlyFieldConfig){
  return `This value should be less than ${field.props?.maxLength} characters`;
}
export function IpValidatorMessage(error: any, field: FormlyFieldConfig) {
  return `"${field.formControl?.value}" is not a valid IP Address`;
}

@NgModule({
  declarations: [
    AppComponent,
    ExpressionPropertiesComponent,
    DefaultValueComponent,
    HomeComponent,
    HideFieldsComponent,
    ModelOptionsComponent,
    ResetModelComponent,
    FormStateComponent,
    BuiltInValidationsComponent,
    CustomValidationsComponent,
    CustomValidationParametersComponent,
    ValidationMessageComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule,
    FormlyBootstrapModule,
    FormlyModule.forRoot({
      validators: [
        { name: 'ip', validation: ipValidator },
        { name: 'date-future', validation: dateFutureValidator, options: { days: 2 } }
      ],
      validationMessages: [
        {name: 'ip', message: IpValidatorMessage },
        {name: 'required',message: 'This field is required' },
        {name: 'minLength', message: minLengthValidationMessage },
        {name: 'maxLength', message: maxLengthValidationMessage },
        {name: 'min', message: minValidationMessage },
        {name: 'max', message: maxValidationMessage },

      ]
    }),
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
