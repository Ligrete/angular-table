import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NoopAnimationsModule } from '@angular/platform-browser/animations';
import { PageTableModule } from './modules/page-table/page-table.module';
import {MatToolbarModule} from '@angular/material/toolbar';
import { reducer } from './store/table/table.reducer';
import { StoreModule } from '@ngrx/store';
import { StoreTableModule } from './store/table/store-table.module';

@NgModule({
  declarations: [
    AppComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    NoopAnimationsModule,
    PageTableModule,
    MatToolbarModule,
    StoreTableModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
