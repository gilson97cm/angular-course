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
var core_1 = require('@angular/core');
var AppComponent = (function () {
    function AppComponent() {
    }
    AppComponent = __decorate([
        core_1.Component({
            selector: 'mi-aplicacion',
            template: "<div class=\"container\">\n                    <ul class=\"nav nav-tabs\">\n                        <li (click)=\"pais='argentina'\"><a>Argentina</a></li>\n                        <li (click)=\"pais='bolivia'\"><a>Bolivia</a></li>\n                        <li (click)=\"pais='brazil'\"><a>Brazil</a></li>\n                        <li (click)=\"pais='chile'\"><a>Chile</a></li>\n                        <li (click)=\"pais='colombia'\"><a>Colombia</a></li>\n                    </ul>\n                </div>\n                <div class=\"container\" [ngSwitch]=\"pais\">\n                    <div *ngSwitchCase=\"'argentina'\">Informaci\u00F3n sobre Argentina.</div>\n                    <div *ngSwitchCase=\"'bolivia'\">Informaci\u00F3n sobre Bolivia.</div>\n                    <div *ngSwitchCase=\"'brazil'\">Informaci\u00F3n sobre Brazil.</div>\n                    <div *ngSwitchCase=\"'chile'\">Informaci\u00F3n sobre Chile.</div>\n                    <div *ngSwitchCase=\"'colombia'\">Informaci\u00F3n sobre Colombia.</div>\n                    <div *ngSwitchDefault>Haz click sobre alg\u00FAn pais</div>\n                </div>\n                "
        }), 
        __metadata('design:paramtypes', [])
    ], AppComponent);
    return AppComponent;
}());
exports.AppComponent = AppComponent;
//# sourceMappingURL=app.component.js.map