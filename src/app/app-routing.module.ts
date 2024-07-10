import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DefaultValueComponent } from './FieldOptions/default-value/default-value.component';
import { ExpressionPropertiesComponent } from './FieldOptions/expression-properties/expression-properties.component';
import { HideFieldsComponent } from './FieldOptions/hide-fields/hide-fields.component';
import { ModelOptionsComponent } from './FieldOptions/model-options/model-options.component';
import { ResetModelComponent } from './FormOptions/reset-model/reset-model.component';
import { FormStateComponent } from './FormOptions/form-state/form-state.component';
import { BuiltInValidationsComponent } from './ValidationOptions/built-in-validations/built-in-validations.component';
import { CustomValidationsComponent } from './ValidationOptions/custom-validations/custom-validations.component';
import { CustomValidationParametersComponent } from './ValidationOptions/custom-validation-parameters/custom-validation-parameters.component';
import { ValidationMessageComponent } from './ValidationOptions/validation-message/validation-message.component';

const routes: Routes = [
  {path: 'expressionProperties', component: ExpressionPropertiesComponent},
  {path: 'defaultValue', component: DefaultValueComponent},
  {path: 'hideFields', component: HideFieldsComponent},
  {path: 'modelOptions', component: ModelOptionsComponent},
  {path: 'resetModel', component: ResetModelComponent},
  {path: 'formState', component: FormStateComponent},
  {path: 'builtInValidations', component: BuiltInValidationsComponent},
  {path: 'customValidations', component: CustomValidationsComponent},
  {path: 'customValidationParameters', component: CustomValidationParametersComponent},
  {path: 'validationMessage', component: ValidationMessageComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
