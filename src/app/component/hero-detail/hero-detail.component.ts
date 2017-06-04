import { Component, Input } from '@angular/core';

import { Hero } from '../../shared-elements/hero';

@Component({
  selector: 'hero-detail',
  templateUrl: "app/component/hero-detail/hero-detail.component.html"
})
// dans la classe, on peut y définir des variables d'entrées, en utilisant le
// décorateur nommé "Input", qui permet de récupérer des variables provenant
// d'autres composants directement depuis les templates

export class HeroDetailComponent {
  /* Cette propriété sert à récupérer l'input fourni par le template père, et
  de l'affecter à une variable utilisable par le template courant */
  @Input() hero: Hero;
}
