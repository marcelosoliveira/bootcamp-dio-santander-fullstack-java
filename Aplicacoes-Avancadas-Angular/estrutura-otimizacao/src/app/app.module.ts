import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FetureComponent } from './src/app/shared/feture/feture.component';

@NgModule({
  declarations: [
    AppComponent,
    FetureComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    // FetureAModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
