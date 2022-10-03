import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import {LondonComponent} from "./Page/London/london.component";
import {ParisComponent} from "./Page/Paris/paris.component";
import {RomeComponent} from "./Page/Rome/rome.component";
import {RouterModule, Routes, ROUTES} from "@angular/router";
const appRoutes: Routes =[
  {path: 'Rome', component: RomeComponent},
  {path: 'Paris', component: ParisComponent},
  {path: 'London', component: LondonComponent},

]
@NgModule({
  declarations: [
    AppComponent, LondonComponent,ParisComponent,RomeComponent
  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot(appRoutes)
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
