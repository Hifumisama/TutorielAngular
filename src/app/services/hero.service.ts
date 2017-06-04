import { Injectable } from "@angular/core";
import { Hero }       from "../shared-elements/hero";

import { HEROES }     from "../data/mock-heroes";

/* lorsque on a besoin de créer un service, on cimporte
le module injectable, et on y ajoute
le décorateur correspondant*/
@Injectable()

/* ici ce que fait le service consiste à récupérer le contenu du
fichier mock-heroes puis à le retourner sous la forme de la classe
Hero*/
export class HeroService {

  /* le problème étant que les données, si elles sont très nombreuses mettront un
  certain temps à arriver, donc pour s'assurer que toutes les donnée soient prêtes,
  on utilise une fonction Asynchronen tout simplement !
  Pour cela on met le mot clé "async" devant la fonction qui sera asynchrone, puis
  le mot clé "await" sur les fonctions ou valeurs qui seront retournées en asynchrone*/

  async getHeroes() {
    return await HEROES;
  }

  /*On peut également faire de l'asynchrone en utilisant le système de promises,
  Le principe est strictement le même qu'async...await mais a une notation
  un peu différente, d'ailleurs l'appel ne se fait plus avec async,
  mais avec le mot clé "then" */

  // Cette méthode est aussi là pour tester l'effet d'une latence de connexion
  //internet
  getHeroesSlowly(): Promise<Hero[]> {
    return new Promise(resolve => {
      // Simule une latence de serveur de 2s de 2s
      setTimeout(() => resolve(this.getHeroes()), 2000);
    });
  }
}
