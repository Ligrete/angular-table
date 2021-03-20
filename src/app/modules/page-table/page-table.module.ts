import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PageTableComponent } from './page-table.component';
import { MatSliderModule, MatButtonModule, MatIconModule, MatDividerModule, MatCardModule } from '@angular/material';
import { UiTableModule } from 'src/app/ui/ui-table/ui-table.module';
import {MatSelectModule} from '@angular/material/select';
import {MatSlideToggleModule} from '@angular/material/slide-toggle';
import { UiSelectorModule } from 'src/app/ui/ui-selector/ui-selector.module';



@NgModule({
  declarations: [PageTableComponent],
  imports: [
    CommonModule,
    MatSliderModule,
    MatButtonModule,
    MatIconModule,
    MatDividerModule,
    UiTableModule,
    UiSelectorModule,
    MatSlideToggleModule,
    MatCardModule,
    MatSelectModule 
  ],
  exports: [PageTableComponent]
})
export class PageTableModule { }
