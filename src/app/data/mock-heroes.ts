import {Hero} from "../shared-elements/hero";

// là on a créé un tableau contenant 10 instances de la classe
// Hero contenant nos données

/* On  peut également rajouter le fait que les données sont maintenant
exportées et utilisable partout dans le programme. pour peu qu'on
déclare son importation bien évidemment !*/


export const HEROES: Hero[] = [
  {id: 11, name: 'Mr. Nice'},
  {id: 12, name: 'Narco'},
  {id: 13, name: 'Bombasto'},
  {id: 14, name: 'Celeritas'},
  {id: 15, name: 'Magneta'},
  {id: 16, name: 'RubberMan'},
  {id: 17, name: 'Dynama'},
  {id: 18, name: 'Dr IQ'},
  {id: 19, name: 'Magma'},
  {id: 20, name: 'Tornado'}
];
