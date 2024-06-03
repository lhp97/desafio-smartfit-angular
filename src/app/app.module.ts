import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';

import { AppComponent } from './app.component';
import { HeaderModule } from './components/header/header.module';
import { FormsModule } from './components/forms/forms.module';
import { CardsListComponent } from './components/cards-list/cards-list.component';
import { CardComponent } from './components/card/card.component';

@NgModule({
  declarations: [
    AppComponent,
    CardsListComponent,
    CardComponent,
  ],
  imports: [
    BrowserModule,
    HeaderModule,
    FormsModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
