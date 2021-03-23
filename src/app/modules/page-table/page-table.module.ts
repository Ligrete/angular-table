import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PageTableComponent } from './page-table.component';
import {MatSelectModule} from '@angular/material/select';
import {MatSlideToggleModule} from '@angular/material/slide-toggle';
import { MatButtonModule } from '@angular/material/button';
import { MatTableModule } from '@angular/material/table';
import {MatCardModule} from '@angular/material/card';
import {MatSliderModule} from '@angular/material/slider';
import {MatIconModule} from '@angular/material/icon';
import {MatDividerModule} from '@angular/material/divider';
import {MatChipsModule} from '@angular/material/chips';
import {MatExpansionModule} from '@angular/material/expansion';
import {MatInputModule} from '@angular/material/input';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';



@NgModule({
  declarations: [PageTableComponent],
  imports: [
    CommonModule,
    MatSlideToggleModule,
    MatCardModule,
    MatSelectModule,
    MatTableModule,
    MatSliderModule,
    MatButtonModule,
    MatIconModule,
    MatDividerModule,
    MatChipsModule,
    MatExpansionModule,
    MatInputModule,
    FormsModule, ReactiveFormsModule
  ],
  exports: [PageTableComponent]
})
export class PageTableModule { }
