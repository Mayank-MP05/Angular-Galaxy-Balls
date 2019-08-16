import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BNavComponent } from './b-nav/b-nav.component';
import { BFootComponent } from './b-foot/b-foot.component';
import { BBodyComponent } from './b-body/b-body.component';

@NgModule({
  declarations: [
    AppComponent,
    BNavComponent,
    BFootComponent,
    BBodyComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
