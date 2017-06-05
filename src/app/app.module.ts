import { NgModule }               from '@angular/core';
import { FormsModule }            from '@angular/forms';
import { BrowserModule }          from '@angular/platform-browser';
import { RouterModule }           from '@angular/router';

import { HeroDetailComponent }    from "./component/hero-detail/hero-detail.component";
import { HeroComponent }          from "./component/hero/hero.component";
import { DashboardComponent}      from "./component/dashboard/dashboard.component";
import { AppComponent }           from './app.component';

import { HeroService }            from "./services/hero.service";

/* on définit ici les routes de l'application :
Path étant l'adresse URL correspondante, et component,
étant le composant cible.*/

/* On peut tout à fait rediriger les utilisateurs via les url,
Ici on le fait pour gérer la page d'accueil, qui sur une URL vide
redirige directement vers dashboard */

/* Un peu plus bas on constate que la route menant vers le détail
des héros, dispose d'un paramètre, et qu'il porte le nom de "id"
Cela va nous permettre dans notre cas de cibler un élément bien particulier
pour l'afficher par la suite. */

@NgModule({
  imports:[
    BrowserModule,
    FormsModule,
    RouterModule.forRoot([
      {
        path: '',
        redirectTo: '/dashboard',
        pathMatch: 'full',
      },
      {
        path: 'heroes',
        component: HeroComponent,
      },
      {
        path: 'dashboard',
        component: DashboardComponent,
      },
      {
        path: 'detail/:id',
        component: HeroDetailComponent,
      }
    ])
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
    AppComponent
  ]
})
export class AppModule { }
