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
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
var forms_1 = require("@angular/forms");
var FormComponent = (function () {
    function FormComponent() {
        this.form = new forms_1.FormGroup({
            name: new forms_1.FormControl('Juan', [
                forms_1.Validators.required,
                forms_1.Validators.pattern("^.{4}$")
            ]),
            email: new forms_1.FormControl('', [
                forms_1.Validators.required,
                this.uniqueEmail,
            ], this.uniqueEmailAsync),
        });
    }
    FormComponent.prototype.sendForm = function (form) {
        console.log(this.form);
    };
    //validacion personalizada 
    FormComponent.prototype.uniqueEmail = function (control) {
        var emails = ['jose@email.com', 'carlos@email.com'];
        if (emails.indexOf(control.value) != -1) {
            return { uniqueEmail: true };
        }
        return null;
    };
    //validacion personalizada asincrona
    FormComponent.prototype.uniqueEmailAsync = function (control) {
        return new Promise(function (solve, refuse) {
            setTimeout(function () {
                if (control.value === 'diego@email.com') {
                    solve({ uniqueEmailAsync: true });
                }
                else {
                    solve(null);
                }
            }, 2000);
        });
    };
    FormComponent = __decorate([
        core_1.Component({
            selector: 'my-form',
            templateUrl: 'app/templates/form.template.html',
        }),
        __metadata("design:paramtypes", [])
    ], FormComponent);
    return FormComponent;
}());
exports.FormComponent = FormComponent;
//# sourceMappingURL=form.component.js.map