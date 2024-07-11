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
import { AsyncValidationOfUniqueValueComponent } from './ValidationOptions/async-validation-of-unique-value/async-validation-of-unique-value.component';
import { AsyncValidationUpdateonComponent } from './ValidationOptions/async-validation-updateon/async-validation-updateon.component';
import { MatchingTwoFieldsComponent } from './ValidationOptions/matching-two-fields/matching-two-fields.component';
import { ForceShowingErrorStateComponent } from './ValidationOptions/force-showing-error-state/force-showing-error-state.component';
import { ToggleRequiredFieldComponent } from './ValidationOptions/toggle-required-field/toggle-required-field.component';
import { DisableSubmitButtonComponent } from './ValidationOptions/disable-submit-button/disable-submit-button.component';
import { TableRowsComponent } from './BootstrapFormly/table-rows/table-rows.component';
import { SelectComponent } from './BootstrapFormly/select/select.component';
import { AdvancedLayoutComponent } from './BootstrapSpecific/advanced-layout/advanced-layout.component';
import { BootstrapHorizontalComponent } from './BootstrapSpecific/bootstrap-horizontal/bootstrap-horizontal.component';
import { InputAddOnsComponent } from './BootstrapSpecific/input-add-ons/input-add-ons.component';
import { I18nNgxTranslateComponent } from './Advanced/i18n-ngx-translate/i18n-ngx-translate.component';
import { JsonSchemaComponent } from './Advanced/json-schema/json-schema.component';
import { RepeatingSectionComponent } from './Advanced/repeating-section/repeating-section.component';
import { RepeatingSectionWithLengthInputComponent } from './Advanced/repeating-section-with-length-input/repeating-section-with-length-input.component';
import { MultiStepFormComponent } from './Advanced/multi-step-form/multi-step-form.component';
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
  {path: 'validationMessage', component: ValidationMessageComponent},
  {path : 'asyncValidationOfUniqueValue', component: AsyncValidationOfUniqueValueComponent},
  {path: 'asyncValidationuAndUpdateOn', component: AsyncValidationUpdateonComponent},
  {path: 'matchingTwoFields', component: MatchingTwoFieldsComponent},
  {path: 'forceShowingErrorState', component: ForceShowingErrorStateComponent},
  {path: 'toggleRequiredField', component: ToggleRequiredFieldComponent},
  {path: 'disableSubmitButton', component: DisableSubmitButtonComponent},
  {path: 'tableRows', component: TableRowsComponent},
  {path: 'select', component: SelectComponent},
  {path: 'advancedLayout', component: AdvancedLayoutComponent},
  {path: 'bootstrapHorizontal', component: BootstrapHorizontalComponent},
  {path: 'inputAddOns', component: InputAddOnsComponent},
  {path: 'i18nNgxTranslate', component: I18nNgxTranslateComponent},
  {path: 'jsonSchema', component: JsonSchemaComponent},
  {path: 'repeatingSection', component: RepeatingSectionComponent},
  {path: 'repeatingSectionWithLengthInput', component: RepeatingSectionWithLengthInputComponent},
  {path: 'multiStepForm', component: MultiStepFormComponent},




];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
