import { NgModule } from '@angular/core';
import { MatIconModule } from '@angular/material/icon';
import { MatStepperModule } from '@angular/material/stepper';

const data: any = [
    MatStepperModule, 
    MatIconModule
]

@NgModule({
    imports: data,
    exports: data
})

export class MaterialModule{}