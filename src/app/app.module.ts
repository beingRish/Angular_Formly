import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AbstractControl, ReactiveFormsModule } from '@angular/forms';
import { FormlyBootstrapModule } from '@ngx-formly/bootstrap';
import { FORMLY_CONFIG, FormlyFieldConfig, FormlyModule } from '@ngx-formly/core';
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
import { FormlyHorizontalWrapper } from './BootstrapSpecific/horizontal-wrapper/horizontal-wrapper';
import { InputAddOnsComponent } from './BootstrapSpecific/input-add-ons/input-add-ons.component';
import { I18nNgxTranslateComponent } from './Advanced/i18n-ngx-translate/i18n-ngx-translate.component';
import { HttpClient, HttpClientModule } from '@angular/common/http';
import { TranslateHttpLoader } from '@ngx-translate/http-loader';
import { TranslateLoader, TranslateModule, TranslateService } from '@ngx-translate/core';
import { JsonSchemaComponent } from './Advanced/json-schema/json-schema.component';

import { ArrayTypeComponent } from '../app/Advanced/json-schema/array.type';
import { ObjectTypeComponent } from '../app/Advanced/json-schema/object.type';
import { MultiSchemaTypeComponent } from '../app/Advanced/json-schema/multischema.type';
import { NullTypeComponent } from '../app/Advanced/json-schema/null.type';
import { RepeatingSectionComponent } from './Advanced/repeating-section/repeating-section.component';
import { RepeatTypeComponent } from './Advanced/repeating-section/repeat-section.type';
import { RepeatLengthInputTypeComponent } from './Advanced/repeating-section-with-length-input/repeat-section.type';
import { RepeatingSectionWithLengthInputComponent } from './Advanced/repeating-section-with-length-input/repeating-section-with-length-input.component';
import { MultiStepFormComponent } from './Advanced/multi-step-form/multi-step-form.component';
import { MaterialModule } from './material.module';
import { FormlyFieldStepper } from './Advanced/multi-step-form/stepper.type';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { TabsFormComponent } from './Advanced/tabs-form/tabs-form.component';
import { FormlyFieldTabs } from './Advanced/tabs-form/tab.type';
import { AgGridIntegrationComponent } from './Advanced/ag-grid-integration/ag-grid-integration.component';
import { GridTypeComponent } from './Advanced/ag-grid-integration/grid.type';
import { GridFormlyCellComponent } from './Advanced/ag-grid-integration/grid-formly-cell.component';
import { AgGridModule } from 'ag-grid-angular';
import { ExtendingFieldTypesComponent } from './Advanced/extending-field-types/extending-field-types.component';
import { CascadedSelectUsingObservableComponent } from './Other/cascaded-select-using-observable/cascaded-select-using-observable.component';
import { CascadedSelectJsonpowereedComponent } from './Other/cascaded-select-jsonpowereed/cascaded-select-jsonpowereed.component';
import { BindObservableToSelectComponent } from './Other/bind-observable-to-select/bind-observable-to-select.component';
import { DataService } from './Service/data.service';
import { AdvancedLayoutFlexComponent } from './Other/advanced-layout-flex/advanced-layout-flex.component';
import { NestedFormsComponent } from './Other/nested-forms/nested-forms.component';
import { PanelWrapperComponent } from './Other/nested-forms/panel-wrapper.component';
import { MaterialFieldPrefixSufixComponent } from './Other/material-field-prefix-sufix/material-field-prefix-sufix.component';
import { FormlyWrapperAddons } from './Other/material-field-prefix-sufix/addons.wrapper';
import { addonsExtension } from './Other/material-field-prefix-sufix/addons.extension';
import { FormlyMaterialModule } from '@ngx-formly/material';
import { MatIconModule } from '@angular/material/icon';
import { MaterialFieldHintAlignmentComponent } from './Other/material-field-hint-alignment/material-field-hint-alignment.component';
import { HideFieldsWithAngularAnimationsComponent } from './Other/hide-fields-with-angular-animations/hide-fields-with-angular-animations.component';
import { AnimationWrapperComponent } from './Other/hide-fields-with-angular-animations/animation-wrapper.component';
import { ButtonComponent } from './Other/button/button.component';
import { FormlyFieldButton } from './Other/button/button-type.component';
import { JsonPoweredComponent } from './Other/json-powered/json-powered.component';
import { FileInputComponent } from './Other/file-input/file-input.component';
import { FormlyFieldFile } from './Other/file-input/file-type.component';
import { FileValueAccessor } from './Other/file-input/file-value-accessor';
import { PresetsComponent } from './Other/presets/presets.component';
import { registerSalutationPreset, SALUTATION_OPTIONS } from './Other/presets/salutation.preset';
import { FormlyPresetModule } from '@ngx-formly/core/preset';


export function animationExtension(field: FormlyFieldConfig) {
  if (field.wrappers && field.wrappers.includes('animation')) {
    return;
  }

  field.wrappers = ['animation', ...(field.wrappers || [])];
}

// AoT requires an exported function for factories
export function HttpLoaderFactory(httpClient: HttpClient) {
  return new TranslateHttpLoader(httpClient, 'assets/i18n/', '.json');
}

export function formlyValidationConfig(translate: TranslateService) {
  return {
    validationMessages: [
      {
        name: 'required',
        message() {
          return translate.stream('FORM.VALIDATION.REQUIRED');
        },
      },
    ],
  };
}

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

export function fieldMatchValidator(control: AbstractControl) {
  const { password, passwordConfirm } = control.value;

  // avoid displaying the message error when values are empty
  if (!passwordConfirm || !password) {
    return null;
  }

  if (passwordConfirm === password) {
    return null;
  }

  return { fieldMatch: { message: 'Password Not Matching' } };
}

export function minLengthValidationMessage(error: any, field: FormlyFieldConfig) {
  return `Should have atleast ${field.props?.minLength} characters`;
}
export function maxLengthValidationMessage(error: any, field: FormlyFieldConfig) {
  return `This value should be less than ${field.props?.maxLength} characters`;
}
export function minValidationMessage(error: any, field: FormlyFieldConfig) {
  return `This value should be more than ${field.props?.maxLength} characters`;
}
export function maxValidationMessage(error: any, field: FormlyFieldConfig) {
  return `This value should be less than ${field.props?.maxLength} characters`;
}
export function IpValidatorMessage(error: any, field: FormlyFieldConfig) {
  return `"${field.formControl?.value}" is not a valid IP Address`;
}
export function typeValidationMessage({ schemaType }: any) {
  return `should be "${schemaType[0]}".`;
}
export function multipleOfValidationMessage(error: any, field: FormlyFieldConfig) {
  return `should be multiple of ${field.props?.step}`;
}
export function exclusiveMinimumValidationMessage(error: any, field: FormlyFieldConfig) {
  return `should be > ${field.props?.step}`;
}
export function exclusiveMaximumValidationMessage(error: any, field: FormlyFieldConfig) {
  return `should be < ${field.props?.step}`;
}
export function constValidationMessage(error: any, field: FormlyFieldConfig) {
  return `should be equal to constant "${field.props?.['const']}"`;
}
export function minItemsValidationMessage(error: any, field: FormlyFieldConfig) {
  return `should NOT have fewer than ${field.props?.['minItems']} items`;
}

export function maxItemsValidationMessage(error: any, field: FormlyFieldConfig) {
  return `should NOT have more than ${field.props?.['maxItems']} items`;
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
    ValidationMessageComponent,
    AsyncValidationOfUniqueValueComponent,
    AsyncValidationUpdateonComponent,
    MatchingTwoFieldsComponent,
    ForceShowingErrorStateComponent,
    ToggleRequiredFieldComponent,
    DisableSubmitButtonComponent,
    TableRowsComponent,
    SelectComponent,
    AdvancedLayoutComponent,
    BootstrapHorizontalComponent,
    FormlyHorizontalWrapper,
    InputAddOnsComponent,
    I18nNgxTranslateComponent,
    JsonSchemaComponent,
    ArrayTypeComponent,
    ObjectTypeComponent,
    MultiSchemaTypeComponent,
    NullTypeComponent,
    RepeatingSectionComponent,
    RepeatTypeComponent,
    RepeatingSectionWithLengthInputComponent,
    RepeatLengthInputTypeComponent,
    MultiStepFormComponent,
    FormlyFieldStepper,
    TabsFormComponent,
    FormlyFieldTabs,
    AgGridIntegrationComponent,
    GridTypeComponent,
    GridFormlyCellComponent,
    ExtendingFieldTypesComponent,
    CascadedSelectUsingObservableComponent,
    CascadedSelectJsonpowereedComponent,
    BindObservableToSelectComponent,
    AdvancedLayoutFlexComponent,
    NestedFormsComponent,
    PanelWrapperComponent,
    MaterialFieldPrefixSufixComponent,
    MaterialFieldHintAlignmentComponent,
    HideFieldsWithAngularAnimationsComponent,
    ButtonComponent,
    FormlyFieldButton,
    JsonPoweredComponent,
    FileInputComponent,
    FormlyFieldFile,
    FileValueAccessor,
    PresetsComponent
  ],

  imports: [
    BrowserAnimationsModule,
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule,
    FormlyBootstrapModule,
    FormlyBootstrapModule,
    MaterialModule,
    MatIconModule,
    FormlyMaterialModule,
    FormlyPresetModule,
    AgGridModule,
    FormlyModule.forRoot({
      extras: { lazyRender: false },
      wrappers: [
        { name: 'form-field-horizontal', component: FormlyHorizontalWrapper },
        { name: 'panel', component: PanelWrapperComponent },
        { name: 'addons', component: FormlyWrapperAddons },
        { name: 'animation', component: AnimationWrapperComponent }
      ],
      extensions: [
        { name: 'addons', extension: { onPopulate: addonsExtension } },
        { name: 'animation', extension: { onPopulate: animationExtension } }
      ],
      validators: [
        { name: 'ip', validation: ipValidator },
        { name: 'date-future', validation: dateFutureValidator, options: { days: 2 } },
        { name: 'fieldMatch', validation: fieldMatchValidator }
      ],
      validationMessages: [
        { name: 'required', message: 'This field is required' },
        { name: 'type', message: typeValidationMessage },
        { name: 'ip', message: IpValidatorMessage },
        { name: 'minLength', message: minLengthValidationMessage },
        { name: 'maxLength', message: maxLengthValidationMessage },
        { name: 'min', message: minValidationMessage },
        { name: 'max', message: maxValidationMessage },
        { name: 'multipleOf', message: multipleOfValidationMessage },
        { name: 'exclusiveMinimum', message: exclusiveMinimumValidationMessage },
        { name: 'exclusiveMaximum', message: exclusiveMaximumValidationMessage },
        { name: 'minItems', message: minItemsValidationMessage },
        { name: 'maxItems', message: maxItemsValidationMessage },
        { name: 'uniqueItems', message: 'should NOT have duplicate items' },
        { name: 'const', message: constValidationMessage },
        { name: 'enum', message: `must be equal to one of the allowed values` },

      ],
      types: [
        { name: 'null', component: NullTypeComponent, wrappers: ['form-field'] },
        { name: 'array', component: ArrayTypeComponent },
        { name: 'object', component: ObjectTypeComponent },
        { name: 'multischema', component: MultiSchemaTypeComponent },
        { name: 'repeat', component: RepeatTypeComponent },
        { name: 'repeatLengthInput', component: RepeatLengthInputTypeComponent },
        { name: 'stepper', component: FormlyFieldStepper, wrappers: [] },
        { name: 'tabs', component: FormlyFieldTabs },
        { name: 'grid', component: GridTypeComponent, defaultOptions: { props: { width: '100%', height: '400px' } } },
        { name: 'password', extends: 'input', defaultOptions: { props: { type: 'password', label: 'Default Password Field' } } },
        {
          name: 'button',
          component: FormlyFieldButton,
          wrappers: ['form-field'],
          defaultOptions: {
            props: {
              btnType: 'default',
              type: 'button',
            },
          },
        },
        { name: 'file', component: FormlyFieldFile, wrappers: ['form-field'] },
      ],

      presets: [
        {
          name: 'firstName',
          config: {
            key: 'firstName',
            type: 'input',
            props: {
              label: 'First Name',
            },
          },
        },
        {
          name: 'lastName',
          config: {
            key: 'lastName',
            type: 'input',
            props: {
              label: 'Last Name',
            },
          },
        },
      ]
    }),
    HttpClientModule,
    TranslateModule.forRoot({
      loader: {
        provide: TranslateLoader,
        useFactory: HttpLoaderFactory,
        deps: [HttpClient],
      },
    }),
    BrowserAnimationsModule,
  ],

  providers: [
    DataService,
    { 
      provide: FORMLY_CONFIG, 
      multi: true, 
      useFactory: formlyValidationConfig,
      deps: [TranslateService],
    },
    {
      provide: SALUTATION_OPTIONS,
      useValue: ['Mr.', 'Ms.', 'Dr.', 'Dude'],
    },
    {
      provide: FORMLY_CONFIG,
      useFactory: registerSalutationPreset,
      deps: [SALUTATION_OPTIONS],
      multi: true,
    },
  ],

  schemas: [CUSTOM_ELEMENTS_SCHEMA],

  bootstrap: [AppComponent]
})
export class AppModule { }
