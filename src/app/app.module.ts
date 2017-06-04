import { NgModule }               from '@angular/core';
import { FormsModule }            from '@angular/forms';
import { BrowserModule }          from '@angular/platform-browser';

import { HeroDetailComponent }    from "./component/hero-detail/hero-detail.component";
import { HeroComponent }          from "./component/hero/hero.component";
import { AppComponent }           from './app.component';

import { HeroService }            from "./services/hero.service";


@NgModule({
  imports:[
    BrowserModule,
    FormsModule,
  ],
  declarations: [
    AppComponent,
    HeroDetailComponent,
    HeroComponent,
  ],
  providers: [
    HeroService,
  ],
  bootstrap: [
    AppComponent
  ]
})
export class AppModule { }
