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
var router_1 = require("@angular/router");
var employee_service_1 = require("../services/employee.service");
var ContactComponent = (function () {
    function ContactComponent(router, employeeService) {
        this.router = router;
        this.employeeService = employeeService;
        this.formContact = new forms_1.FormGroup({
            name: new forms_1.FormControl('', [
                forms_1.Validators.required,
                forms_1.Validators.pattern("^.{6}$")
            ]),
            email: new forms_1.FormControl('', [
                forms_1.Validators.required,
                this.uniqueEmail,
            ]),
        });
    }
    ContactComponent.prototype.sendForm = function () {
        //ir a otra pagina
        // this.router.navigate(['home']);
        this.employeeService.sendInfoEmployee({
            name: this.formContact.value.name,
            email: this.formContact.value.email
        });
        console.log('El servicio fue llamado');
    };
    ContactComponent.prototype.uniqueEmail = function (form) {
        var emails = ['jorje@email.com', 'carlos@email.com'];
        if (emails.indexOf(form.value) != -1) {
            return { uniqueEmail: true };
        }
        return null;
    };
    ContactComponent = __decorate([
        core_1.Component({
            // selector: 'selector-name',
            templateUrl: '/app/template/contact.component.html'
        }),
        __metadata("design:paramtypes", [router_1.Router,
            employee_service_1.EmployeeService])
    ], ContactComponent);
    return ContactComponent;
}());
exports.ContactComponent = ContactComponent;
//# sourceMappingURL=contact.component.js.map