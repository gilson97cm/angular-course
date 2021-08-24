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
// import { EMPLOYEES } from '../resource/arrayEmployees';
var http_1 = require("@angular/http");
require("rxjs/add/operator/toPromise");
var core_1 = require("@angular/core");
var EmployeeService = (function () {
    function EmployeeService(http) {
        this.http = http;
    }
    EmployeeService.prototype.listOfEmployees = function () {
        // return EMPLOYEES;
        var URL = 'https://jsonplaceholder.typicode.com/users';
        return this.http.get(URL)
            .toPromise()
            .then(function (resp) { return resp.json(); })
            .catch(this.ocurredAnError);
    };
    EmployeeService.prototype.infoEmployee = function (id) {
        // return EMPLOYEES.find(employee => employee.id === id);
        var URL = "https://jsonplaceholder.typicode.com/users/" + id;
        return this.http.get(URL)
            .toPromise()
            .then(function (resp) { return resp.json(); })
            .catch(this.ocurredAnError);
    };
    EmployeeService.prototype.ocurredAnError = function (error) {
        console.log('Ocurrio un error en el llamado HTTP ', error.message);
        return Promise.reject(error.message || error);
    };
    EmployeeService.prototype.sendInfoEmployee = function (employee) {
        var info = JSON.stringify(employee);
        var URL = "https://angular-2-2c255-default-rtdb.firebaseio.com/data.json";
        return this.http.post(URL, info)
            .toPromise()
            .then(function (resp) { return console.log(resp); });
    };
    EmployeeService = __decorate([
        core_1.Injectable(),
        __metadata("design:paramtypes", [http_1.Http])
    ], EmployeeService);
    return EmployeeService;
}());
exports.EmployeeService = EmployeeService;
//# sourceMappingURL=employee.service.js.map