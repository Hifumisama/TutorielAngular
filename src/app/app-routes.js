"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var core_1 = require("@angular/core");
var router_1 = require("@angular/router");
var dashboard_component_1 = require("./component/dashboard/dashboard.component");
var hero_component_1 = require("./component/hero/hero.component");
var hero_detail_component_1 = require("./component/hero-detail/hero-detail.component");
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
var routes = [
    { path: '', redirectTo: '/dashboard', pathMatch: 'full' },
    { path: 'dashboard', component: dashboard_component_1.DashboardComponent },
    { path: 'detail/:id', component: hero_detail_component_1.HeroDetailComponent },
    { path: 'heroes', component: hero_component_1.HeroComponent }
];
var AppRouteModule = (function () {
    function AppRouteModule() {
    }
    return AppRouteModule;
}());
AppRouteModule = __decorate([
    core_1.NgModule({
        imports: [router_1.RouterModule.forRoot(routes)],
        exports: [router_1.RouterModule]
    })
], AppRouteModule);
exports.AppRouteModule = AppRouteModule;
//# sourceMappingURL=app-routes.js.map