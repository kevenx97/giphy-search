import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import { AppComponent } from './app.component';
import { GiphySearchManualModule } from './giphy/giphy-search-manual/giphy-search-manual.module';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports : [
    BrowserModule,
    FormsModule,
    HttpModule,
    GiphySearchManualModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }