import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatMenuModule } from '@angular/material/menu';
import { MatButtonModule } from '@angular/material/button';
import { routing } from './app.routing';

import { AppComponent } from './app.component';
import { NavComponent} from './components/nav/nav.component';
import { HomeComponent} from './components/home/home.component';
import { SunComponent } from './components/sun/sun.component';

@NgModule({
  declarations: [
    AppComponent,
    NavComponent,
    HomeComponent,
    SunComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    routing,
    MatMenuModule,
    MatButtonModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
