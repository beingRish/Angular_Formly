import { NgModule } from '@angular/core';
import { MatIconModule } from '@angular/material/icon';
import { MatStepperModule } from '@angular/material/stepper';
import { MatTabsModule } from '@angular/material/tabs';

const data: any = [
    MatStepperModule, 
    MatTabsModule,
    MatIconModule
]

@NgModule({
    imports: data,
    exports: data
})

export class MaterialModule{}