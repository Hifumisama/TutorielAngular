import { Component, OnInit }            from '@angular/core';
import { HeroDetailComponent }          from "../hero-detail/hero-detail.component";
import { Router }                       from "@angular/router";
import { Hero }                         from '../../shared-elements/hero';

import { HeroService }                  from "../../services/hero.service";




// le décorateur "component", permet de définir où notre template
//sera ajouté, le template associé, mais aussi éventuellement
// la feuille de style associée
@Component({
  selector: 'my-heroes',
  templateUrl: "app/component/hero/hero.component.html",
  styleUrls: ["app/component/hero/hero.component.css"],
})

// app component, cette classe correspond en gros au main de l'application,
// Quand elle est chargée, les éléments à l'intérieur sont accessibles

/*On y ajoute l'interface nommée on Init, afin de pouvoir exécuter des fonctions
quand la page s'initialise. Cela permet notamment de récupérer des données qui
seront ensuite envoyées pour le rendu.*/

export class HeroComponent implements OnInit {

  // On a affecté la variable heroes au Tableau de données heroes
  // ici on affecte notre tableau à un des attributs de la classe, afin de la
  // rendre appelable dans le template
  heroes : Hero[];

  // Ici on a besoin d'initialiser la variable Selectedhero afin de récupérer
  //1 et 1 seul héro provenant de l'intéraction de l'utilsateur
  // Ducoup on sait aussi que la donnée sera de type hero
  selectedHero : Hero;

  // on crée une fonction qui sera appelée ensuite dans le template
  //du composant. on affecte sa variable d'entrée à une instance de Hero

  constructor(
    private router: Router,
    private heroService: HeroService,
  ) { }

  /* La fonction ngOnInit, est appelée dès l'initialisation de la page,
  ce qui permet de gérer la récolte de données avant rendu*/

  /*On peut également rajouter que la fonction est asynchrone, permettant
  de récupérer les données, et ce dans un ordre précis, donc séquentiel.*/

  async ngOnInit() {

    /* récupère les données provenant du mock-heroes, grâce au HeroService,
    le tout en asynchrone */
    this.heroes =  await this.heroService.getHeroes();


    // Cette méthode est là pour tester l'effet d'une latence de connexion
    //internet

    /*this.heroService.getHeroesSlowly()
    .then(heroes => this.heroes = heroes);
    */
  }

  onSelect(hero:Hero): void {
    this.selectedHero = hero;
  }

  gotoDetail() : void {
    this.router.navigate(['/detail',this.selectedHero.id]);
  }

}
