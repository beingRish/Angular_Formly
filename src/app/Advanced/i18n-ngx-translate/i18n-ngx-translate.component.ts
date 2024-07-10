import { Component } from '@angular/core';
import { FormGroup } from '@angular/forms';
import { FormlyFormOptions, FormlyFieldConfig } from '@ngx-formly/core';
import { TranslateService } from '@ngx-translate/core';

@Component({
  selector: 'app-i18n-ngx-translate',
  templateUrl: './i18n-ngx-translate.component.html',
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
export class I18nNgxTranslateComponent {
  form = new FormGroup({})
  model: any = {}
  options: FormlyFormOptions = {}
  fields: FormlyFieldConfig[] = [
    {
      key: 'lang',
      type: 'select',
      props: {
        required: true,
        change: (field) => this.translate.use(field.formControl?.value),
        options: [
          { label: 'fr', value: 'fr' },
          { label: 'en', value: 'fr' },
        ],
      },
      expressions: {
        'props.label': this.translate.stream('FORM.LANG'),
      },
    },
    {
      key: 'name',
      type: 'input',
      props: { required: true },
      expressions: {
        'props.label': this.translate.stream('FORM.NAME'),
      },
    },
  ]

  constructor(public translate: TranslateService) {
    translate.addLangs(['en', 'fr']);
    translate.setDefaultLang('en');

    const browserLang = translate.getBrowserLang();

    translate.use(browserLang?.match(/en|fr/) ? browserLang : 'en');
    this.model.lang = translate.currentLang;
  }
  
  submit() {
    alert(JSON.stringify(this.model));
  }
}

