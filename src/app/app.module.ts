import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AudioComponent } from './audio/audio.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { ShareModule } from './share/share.module';

@NgModule({
  declarations: [
    AppComponent,
    AudioComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    ShareModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
