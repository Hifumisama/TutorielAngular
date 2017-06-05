"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var core_1 = require("@angular/core");
var forms_1 = require("@angular/forms");
var platform_browser_1 = require("@angular/platform-browser");
var router_1 = require("@angular/router");
var hero_detail_component_1 = require("./component/hero-detail/hero-detail.component");
var hero_component_1 = require("./component/hero/hero.component");
var dashboard_component_1 = require("./component/dashboard/dashboard.component");
var app_component_1 = require("./app.component");
var hero_service_1 = require("./services/hero.service");
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
var AppModule = (function () {
    function AppModule() {
    }
    return AppModule;
}());
AppModule = __decorate([
    core_1.NgModule({
        imports: [
            platform_browser_1.BrowserModule,
            forms_1.FormsModule,
            router_1.RouterModule.forRoot([
                {
                    path: '',
                    redirectTo: '/dashboard',
                    pathMatch: 'full',
                },
                {
                    path: 'heroes',
                    component: hero_component_1.HeroComponent,
                },
                {
                    path: 'dashboard',
                    component: dashboard_component_1.DashboardComponent,
                },
                {
                    path: 'detail/:id',
                    component: hero_detail_component_1.HeroDetailComponent,
                }
            ])
        ],
        declarations: [
            app_component_1.AppComponent,
            hero_detail_component_1.HeroDetailComponent,
            hero_component_1.HeroComponent,
            dashboard_component_1.DashboardComponent,
        ],
        providers: [
            hero_service_1.HeroService,
        ],
        bootstrap: [
            app_component_1.AppComponent
        ]
    })
], AppModule);
exports.AppModule = AppModule;
//# sourceMappingURL=app.module.js.map