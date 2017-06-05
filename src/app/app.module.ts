import { NgModule }               from '@angular/core';
import { FormsModule }            from '@angular/forms';
import { BrowserModule }          from '@angular/platform-browser';
import { RouterModule }           from '@angular/router';
import { AppRouteModule }         from "./app-routes";

import { HeroDetailComponent }    from "./component/hero-detail/hero-detail.component";
import { HeroComponent }          from "./component/hero/hero.component";
import { DashboardComponent}      from "./component/dashboard/dashboard.component";
import { AppComponent }           from './app.component';


import { HeroService }            from "./services/hero.service";



@NgModule({
  imports:[
    BrowserModule,
    FormsModule,
    AppRouteModule,
  ],
  declarations: [
    AppComponent,
    HeroDetailComponent,
    HeroComponent,
    DashboardComponent,
  ],
  providers: [
    HeroService,
  ],
  bootstrap: [
    AppComponent,
  ]
})
export class AppModule { }
