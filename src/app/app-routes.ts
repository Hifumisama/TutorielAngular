import { NgModule }             from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { DashboardComponent }   from './component/dashboard/dashboard.component';
import { HeroComponent }        from './component/hero/hero.component';
import { HeroDetailComponent }  from './component/hero-detail/hero-detail.component';

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


/* On a décidé de créer un routage directement dans son fichier personnalisé,
Cela permet d'avoir plus de facilité à gérer lles routes, mais en soi le principe
est strictement le même que précédemment.*/
const routes: Routes = [
  { path: '', redirectTo: '/dashboard', pathMatch: 'full' },
  { path: 'dashboard',  component: DashboardComponent },
  { path: 'detail/:id', component: HeroDetailComponent },
  { path: 'heroes',     component: HeroComponent }
];


@NgModule({
  imports: [ RouterModule.forRoot(routes) ],
  exports: [ RouterModule ]
})


export class AppRouteModule {}
