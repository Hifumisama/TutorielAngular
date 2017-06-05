import { Component, Input, OnInit } from '@angular/core';
import { ActivatedRoute, Params}    from "@angular/router";
import { Location }                 from "@angular/common";

import { HeroService}               from "../../services/hero.service";

import { Hero }                     from '../../shared-elements/hero';

import 'rxjs/add/operator/switchMap';


@Component({
  selector: 'hero-detail',
  templateUrl: "app/component/hero-detail/hero-detail.component.html"
})
// dans la classe, on peut y définir des variables d'entrées, en utilisant le
// décorateur nommé "Input", qui permet de récupérer des variables provenant
// d'autres composants directement depuis les templates

export class HeroDetailComponent implements OnInit{
  /* Cette propriété sert à récupérer l'input fourni par le template père, et
  de l'affecter à une variable utilisable par le template courant */
  @Input() hero: Hero;

  constructor (
    private heroService:  HeroService,
    private route:        ActivatedRoute,
    private location:     Location,
  ) {}

  async ngOnInit() {
    /* j'ai du mal à définir ce que ces fonctions font réellement maintenant...
    Il semblerait que les Observables et les opérators permettent de récupérer
    des flux de données, mais j'ai pas plus de précisions que cela */
    this.route.params
    .switchMap((params: Params) => this.heroService.getHero(+params['id']))
    .subscribe(hero => this.hero = hero);

  }
  /* cette fonction  permet simplement de reculer dans la navigation de la page,
  rien de plus, ce qui peut être bien pratique pour un bouton retour
  par exemple °° */
  
  goBack(): void {
    this.location.back();
  }
}
