"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
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
var mock_heroes_1 = require("../data/mock-heroes");
/* lorsque on a besoin de créer un service, on cimporte
le module injectable, et on y ajoute
le décorateur correspondant*/
var HeroService = (function () {
    /* ici ce que fait le service consiste à récupérer le contenu du
    fichier mock-heroes puis à le retourner sous la forme de la classe
    Hero*/
    function HeroService() {
    }
    /* le problème étant que les données, si elles sont très nombreuses mettront un
    certain temps à arriver, donc pour s'assurer que toutes les donnée soient prêtes,
    on utilise une fonction Asynchronen tout simplement !
    Pour cela on met le mot clé "async" devant la fonction qui sera asynchrone, puis
    le mot clé "await" sur les fonctions ou valeurs qui seront retournées en asynchrone*/
    HeroService.prototype.getHeroes = function () {
        return __awaiter(this, void 0, void 0, function () {
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, mock_heroes_1.HEROES];
                    case 1: return [2 /*return*/, _a.sent()];
                }
            });
        });
    };
    /* on se sert de la fonction getHeroes pour avoir la liste de tous les héros,
    puis dans le tableau de héros, on y extrait le héros contenu dans
    l'ID passé en paramètre*/
    HeroService.prototype.getHero = function (id) {
        return __awaiter(this, void 0, void 0, function () {
            var heroesArray;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this.getHeroes()];
                    case 1:
                        heroesArray = _a.sent();
                        return [2 /*return*/, heroesArray.find(function (hero) { return hero.id === id; })];
                }
            });
        });
    };
    /*On peut également faire de l'asynchrone en utilisant le système de promises,
    Le principe est strictement le même qu'async...await mais a une notation
    un peu différente, d'ailleurs l'appel ne se fait plus avec async,
    mais avec le mot clé "then" */
    // Cette méthode est aussi là pour tester l'effet d'une latence de connexion
    //internet
    HeroService.prototype.getHeroesSlowly = function () {
        var _this = this;
        return new Promise(function (resolve) {
            // Simule une latence de serveur de 2s de 2s
            setTimeout(function () { return resolve(_this.getHeroes()); }, 2000);
        });
    };
    return HeroService;
}());
HeroService = __decorate([
    core_1.Injectable()
], HeroService);
exports.HeroService = HeroService;
//# sourceMappingURL=hero.service.js.map