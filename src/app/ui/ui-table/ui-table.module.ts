import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { UiTableComponent } from './ui-table.component';
import {MatTableModule} from '@angular/material/table';



@NgModule({
  declarations: [UiTableComponent],
  imports: [
    CommonModule,
    MatTableModule
  ],
  exports: [UiTableComponent]
})
export class UiTableModule { }
