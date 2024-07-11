import { NgModule } from '@angular/core';
import { MatStepperModule } from '@angular/material/stepper';
import { MatTabsModule } from '@angular/material/tabs';

const data: any = [
    MatStepperModule, 
    MatTabsModule
]

@NgModule({
    imports: data,
    exports: data
})

export class MaterialModule{}