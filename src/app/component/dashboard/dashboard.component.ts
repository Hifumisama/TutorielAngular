import { Component, OnInit}          from '@angular/core';

import { HeroService }        from "../../services/hero.service";

import { Hero }               from "../../shared-elements/hero";


@Component({
  selector: 'dashboard',
  templateUrl: 'app/component/dashboard/dashboard.component.html',
  styleUrls: ["app/component/dashboard/dashboard.component.css"],
})

export class DashboardComponent implements OnInit {
  heroes : Hero [];

  constructor (
   private heroService: HeroService,
 ) {}
 async ngOnInit() {
   // on récupère la liste de héros via le service getHeroes
   this.heroes = await this.heroService.getHeroes();

   // puis on y ressort les 4 premiers de la liste
   this.heroes = this.heroes.slice(1, 5);

   console.log(this.heroes);
 }
}
