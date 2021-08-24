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
var router_1 = require("@angular/router");
var employee_service_1 = require("../services/employee.service");
var AboutComponent = (function () {
    function AboutComponent(employeeService, router) {
        this.employeeService = employeeService;
        this.router = router;
    }
    AboutComponent.prototype.listOfEmployees = function () {
        var _this = this;
        this.employeeService.listOfEmployees()
            .then(function (resp) { return _this.employees = resp; });
    };
    AboutComponent.prototype.ngOnInit = function () {
        this.listOfEmployees();
    };
    AboutComponent.prototype.selectedEmployee = function (employee) {
        this.router.navigate(['employee', employee.id]);
    };
    AboutComponent = __decorate([
        core_1.Component({
            // selector: 'selector-name',
            templateUrl: '/app/template/about.component.html'
        }),
        __metadata("design:paramtypes", [employee_service_1.EmployeeService,
            router_1.Router])
    ], AboutComponent);
    return AboutComponent;
}());
exports.AboutComponent = AboutComponent;
//# sourceMappingURL=about.component.js.map