import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { reducer } from './table.reducer';
import { StoreModule } from '@ngrx/store';
import { EffectsModule } from '@ngrx/effects';
import { StoreRouterConnectingModule } from '@ngrx/router-store';
import { StoreDevtoolsModule } from '@ngrx/store-devtools';
import { TableStoreReducer } from '.';
import { TableEffects } from './table.effects';



@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    // StoreModule.forFeature('app', reducer),
    // StoreModule.forRoot({}, {}),
    // StoreRouterConnectingModule.forRoot(),
    // StoreDevtoolsModule.instrument({name: 'Mouse Store'}),
    // EffectsModule.forRoot([]),
    StoreModule.forRoot({ table: TableStoreReducer.reducer }),
    EffectsModule.forFeature([
      TableEffects
    ]),
    
    // StoreModule.forRoot({}, {}),
    // StoreRouterConnectingModule.forRoot(),
    StoreDevtoolsModule.instrument({name: 'TableNGRXStore'}),
    // EffectsModule.forRoot([ TableEffects ]),
  ]
})
export class StoreTableModule { }
