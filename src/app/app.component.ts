import { Component } from '@angular/core';

// ici on a créé une classe permettant de stocker les noms
//et Ids des héros

export class Hero {
  id: number;
  name: string;
}

// là on a créé un tableau contenant 10 instances de la classe
// Hero contenant nos données
//
const HEROES: Hero[] = [
  { id: 11, name: 'Mr. Nice' },
  { id: 12, name: 'Narco' },
  { id: 13, name: 'Bombasto' },
  { id: 14, name: 'Celeritas' },
  { id: 15, name: 'Magneta' },
  { id: 16, name: 'RubberMan' },
  { id: 17, name: 'Dynama' },
  { id: 18, name: 'Dr IQ' },
  { id: 19, name: 'Magma' },
  { id: 20, name: 'Tornado' }
];

// le décorateur "component", permet de définir où notre template
//sera ajouté, le template associé, mais aussi éventuellement
// la feuille de style associée
@Component({
  selector: 'my-app',
  templateUrl: "app/app.component.html",
  styleUrls: ["app/app.component.css"],
})

// app component, cette classe correspond en gros au main de l'application,
// Quand elle est chargée, les éléments à l'intérieur sont accessibles
export class AppComponent {
  title = "League des Héros";

  // On a affecté la variable heroes au Tableau de données heroes
  // ici on affecte notre tableau à un des attributs de la classe, afin de la
  // rendre appelable dans le template
  heroes = HEROES;

  // Ici on a besoin d'initialiser la variable Selectedhero afin de récupérer
  //1 et 1 seul héro provenant de l'intéraction de l'utilsateur
  // Ducoup on sait aussi que la donnée sera de type hero
  selectedHero : Hero;

  // on crée une fonction qui sera appelée ensuite dans le template
  //du composant. on affecte sa variable d'entrée à une instance de Hero
  onSelect(hero:Hero): void {
    this.selectedHero = hero;
  }
}
