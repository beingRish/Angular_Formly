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
import { TabsFormComponent } from './Advanced/tabs-form/tabs-form.component';
import { AgGridIntegrationComponent } from './Advanced/ag-grid-integration/ag-grid-integration.component';
import { ExtendingFieldTypesComponent } from './Advanced/extending-field-types/extending-field-types.component';
import { CascadedSelectUsingObservableComponent } from './Other/cascaded-select-using-observable/cascaded-select-using-observable.component';
import { CascadedSelectJsonpowereedComponent } from './Other/cascaded-select-jsonpowereed/cascaded-select-jsonpowereed.component';
import { BindObservableToSelectComponent } from './Other/bind-observable-to-select/bind-observable-to-select.component';
import { AdvancedLayoutFlexComponent } from './Other/advanced-layout-flex/advanced-layout-flex.component';
import { NestedFormsComponent } from './Other/nested-forms/nested-forms.component';
import { MaterialFieldPrefixSufixComponent } from './Other/material-field-prefix-sufix/material-field-prefix-sufix.component';
import { MaterialFieldHintAlignmentComponent } from './Other/material-field-hint-alignment/material-field-hint-alignment.component';
import { HideFieldsWithAngularAnimationsComponent } from './Other/hide-fields-with-angular-animations/hide-fields-with-angular-animations.component';
import { ButtonComponent } from './Other/button/button.component';
import { JsonPoweredComponent } from './Other/json-powered/json-powered.component';
import { FileInputComponent } from './Other/file-input/file-input.component';
import { PresetsComponent } from './Other/presets/presets.component';
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
  {path: 'tabForm', component: TabsFormComponent},
  {path: 'agGridIntegration', component: AgGridIntegrationComponent},
  {path: 'extendingFieldTypes', component: ExtendingFieldTypesComponent},
  {path: 'cascadedSelectUsingObservable', component: CascadedSelectUsingObservableComponent},
  {path: 'cascadedSelectJSONPowered', component: CascadedSelectJsonpowereedComponent},
  {path: 'bindObservableToSelect', component: BindObservableToSelectComponent},
  {path: 'advancedLayoutFlex', component: AdvancedLayoutFlexComponent},
  {path: 'nestedForms', component: NestedFormsComponent},
  {path: 'materialFieldPrefixSufix', component: MaterialFieldPrefixSufixComponent},
  {path: 'materialFieldHintAlignment', component: MaterialFieldHintAlignmentComponent},
  {path: 'hideFieldWithAngularAnimation', component: HideFieldsWithAngularAnimationsComponent},
  {path: 'buttonType', component: ButtonComponent},
  {path: 'jsonPowered', component: JsonPoweredComponent},
  {path: 'fileInput', component: FileInputComponent},
  {path: 'presets', component: PresetsComponent},




];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
