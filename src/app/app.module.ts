import { cardsReducer } from './app-state-store/app.reducers';
import { CardListComponent } from './card-list/card-list.component';
import { CatCardComponent } from './cat-card/cat-card.component';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';

import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {MatCardModule} from '@angular/material/card';
import {MatButtonModule} from '@angular/material/button';
import {MatToolbarModule} from '@angular/material/toolbar';
import { StoreModule } from '@ngrx/store';
import { StoreDevtoolsModule } from '@ngrx/store-devtools/src';
import {MatSelectModule} from '@angular/material/select';
import { ReactiveFormsModule } from '@angular/forms';


@NgModule({
  declarations: [
    AppComponent,
    CatCardComponent,
    CardListComponent
  ],
  imports: [
    ReactiveFormsModule,
    MatSelectModule,
    MatToolbarModule,
    MatCardModule,
    MatButtonModule,
    BrowserModule,
    BrowserAnimationsModule,
    HttpClientModule,
    StoreModule.forRoot({allCards: cardsReducer}),
    // StoreDevtoolsModule.instrument()
  ],
  providers: [],
  bootstrap: [AppComponent, ]
})
export class AppModule { }
