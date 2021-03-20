import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { UiSelectorComponent } from './ui-selector.component';
import {MatFormFieldModule} from '@angular/material/form-field';
import {MatSelectModule} from '@angular/material/select';



@NgModule({
  declarations: [UiSelectorComponent],
  imports: [
    CommonModule,
    MatFormFieldModule,
    MatSelectModule
  ],
  exports: [UiSelectorComponent]
})
export class UiSelectorModule { }
