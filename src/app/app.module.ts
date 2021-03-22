import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NoopAnimationsModule } from '@angular/platform-browser/animations';
import { PageTableModule } from './modules/page-table/page-table.module';
import {MatToolbarModule} from '@angular/material/toolbar';
import { reducer } from './store/table/table.reducer';
import { StoreModule } from '@ngrx/store';
import {  TableStoreModule } from './store/table/store-table.module';
import { EffectsModule } from '@ngrx/effects';
import { StoreRouterConnectingModule } from '@ngrx/router-store';
import { StoreDevtoolsModule } from '@ngrx/store-devtools';
import { environment } from '../environments/environment';
import { HttpClientModule } from '@angular/common/http';

@NgModule({
  declarations: [
    AppComponent,
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    AppRoutingModule,
    NoopAnimationsModule,
    PageTableModule,
    MatToolbarModule,
    TableStoreModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
