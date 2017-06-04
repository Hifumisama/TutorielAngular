"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : new P(function (resolve) { resolve(result.value); }).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __generator = (this && this.__generator) || function (thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t;
    return { next: verb(0), "throw": verb(1), "return": verb(2) };
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (_) try {
            if (f = 1, y && (t = y[op[0] & 2 ? "return" : op[0] ? "throw" : "next"]) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [0, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
};
var core_1 = require("@angular/core");
var hero_service_1 = require("../../services/hero.service");
// le décorateur "component", permet de définir où notre template
//sera ajouté, le template associé, mais aussi éventuellement
// la feuille de style associée
var HeroComponent = (function () {
    // on crée une fonction qui sera appelée ensuite dans le template
    //du composant. on affecte sa variable d'entrée à une instance de Hero
    function HeroComponent(heroService) {
        this.heroService = heroService;
    }
    /* La fonction ngOnInit, est appelée dès l'initialisation de la page,
    ce qui permet de gérer la récolte de données avant rendu*/
    /*On peut également rajouter que la fonction est asynchrone, permettant
    de récupérer les données, et ce dans un ordre précis, donc séquentiel.*/
    HeroComponent.prototype.ngOnInit = function () {
        return __awaiter(this, void 0, void 0, function () {
            var _a;
            return __generator(this, function (_b) {
                switch (_b.label) {
                    case 0:
                        /* récupère les données provenant du mock-heroes, grâce au HeroService,
                        le tout en asynchrone */
                        _a = this;
                        return [4 /*yield*/, this.heroService.getHeroes()];
                    case 1:
                        /* récupère les données provenant du mock-heroes, grâce au HeroService,
                        le tout en asynchrone */
                        _a.heroes = _b.sent();
                        return [2 /*return*/];
                }
            });
        });
    };
    HeroComponent.prototype.onSelect = function (hero) {
        this.selectedHero = hero;
    };
    return HeroComponent;
}());
HeroComponent = __decorate([
    core_1.Component({
        selector: 'my-heroes',
        templateUrl: "app/component/hero/hero.component.html",
        styleUrls: ["app/component/hero/hero.component.css"],
    }),
    __metadata("design:paramtypes", [hero_service_1.HeroService])
], HeroComponent);
exports.HeroComponent = HeroComponent;
//# sourceMappingURL=hero.component.js.map