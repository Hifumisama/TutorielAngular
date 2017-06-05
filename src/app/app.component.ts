import { Component } from '@angular/core';

@Component({
  selector: 'my-app',
  template: `
    <h1>{{title}}</h1>
    <!-- ici on indique via l'attribut router link, la route que
    l'on veut désigner, et la balise router outlet permet d'afficher
    les composants cibles des routes, tout simplement ! -->
    <nav>
      <a routerLink="/dashboard" routerLinkActive= Active>Tableau de board</a>
      <a routerLink="/heroes">Liste des Héros</a>
    </nav>
    <router-outlet></router-outlet>
  `,
  styleUrls: ['app/app.component.css'],
})
export class AppComponent {
  title = 'Justice League';
}
