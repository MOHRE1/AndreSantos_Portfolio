import {bootstrapApplication, BrowserModule} from '@angular/platform-browser';
import { AppComponent } from './app/app.component';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';

bootstrapApplication(AppComponent, {
  providers: [BrowserAnimationsModule, BrowserModule]
}).catch(err => console.error(err));
