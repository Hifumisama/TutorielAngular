"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var core_1 = require("@angular/core");
// ici on a créé une classe permettant de stocker les noms
//et Ids des héros
var Hero = (function () {
    function Hero() {
    }
    return Hero;
}());
exports.Hero = Hero;
// là on a créé un tableau contenant 10 instances de la classe
// Hero contenant nos données
//
var HEROES = [
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
var AppComponent = (function () {
    function AppComponent() {
        this.title = "League des Héros";
        // On a affecté la variable heroes au Tableau de données heroes
        // ici on affecte notre tableau à un des attributs de la classe, afin de la
        // rendre appelable dans le template
        this.heroes = HEROES;
    }
    // on crée une fonction qui sera appelée ensuite dans le template
    //du composant. on affecte sa variable d'entrée à une instance de Hero
    AppComponent.prototype.onSelect = function (hero) {
        this.selectedHero = hero;
    };
    return AppComponent;
}());
AppComponent = __decorate([
    core_1.Component({
        selector: 'my-app',
        templateUrl: "app/app.component.html",
        styleUrls: ["app/app.component.css"],
    })
], AppComponent);
exports.AppComponent = AppComponent;
//# sourceMappingURL=app.component.js.map