import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import { SignUpComponent } from './app.component';
import { LogInComponent } from './log-in/log-in.component';

@NgModule({
  declarations: [
    SignUpComponent,
    LogInComponent
  ],
  imports: [
    BrowserModule,
    ReactiveFormsModule,
    FormsModule,
    HttpModule
  ],
  providers: [],
  bootstrap: [SignUpComponent]
})
export class AppModule { }
