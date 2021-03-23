import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { reducer } from './table.reducer';
import {StoreModule} from '@ngrx/store';
import { EffectsModule } from '@ngrx/effects';
import { TableEffects } from './table.effects';
import { StoreDevtoolsModule } from '@ngrx/store-devtools';



@NgModule({
  declarations: [],
  imports: [
    CommonModule,

    StoreModule.forRoot({root: reducer}),
    StoreDevtoolsModule.instrument({name: 'TableNGRXStore'}),
    EffectsModule.forRoot([TableEffects]),
  ]
})
export class TableStoreModule { }
