import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';


import { AppComponent } from './app.component';
import { NgScormPlayerModule } from 'ng-scorm-player';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    NgScormPlayerModule.forChild({debug : true})
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
