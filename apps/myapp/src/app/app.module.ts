import { CoreAngularModule } from '@agnostic-library/core-angular';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';

@NgModule({
  declarations: [AppComponent],
  imports: [BrowserModule, CoreAngularModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
