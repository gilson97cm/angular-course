"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
var platform_browser_1 = require("@angular/platform-browser");
var forms_1 = require("@angular/forms");
var app_component_1 = require("./app.component");
var home_compinent_1 = require("./components/home.compinent");
var about_component_1 = require("./components/about.component");
var contact_component_1 = require("./components/contact.component");
var app_routing_1 = require("./app.routing");
var services_component_1 = require("./components/services.component");
var employee_service_1 = require("./services/employee.service");
var employee_component_1 = require("./components/employee.component");
var http_1 = require("@angular/http");
var AppModule = (function () {
    function AppModule() {
    }
    AppModule = __decorate([
        core_1.NgModule({
            imports: [
                platform_browser_1.BrowserModule,
                forms_1.FormsModule,
                forms_1.ReactiveFormsModule,
                http_1.HttpModule,
                app_routing_1.routing
            ],
            declarations: [
                app_component_1.AppComponent,
                home_compinent_1.HomeComponent,
                about_component_1.AboutComponent,
                contact_component_1.ContactComponent,
                services_component_1.ServicesComponent,
                employee_component_1.EmployeeComponent,
            ],
            bootstrap: [app_component_1.AppComponent],
            providers: [employee_service_1.EmployeeService],
        })
    ], AppModule);
    return AppModule;
}());
exports.AppModule = AppModule;
//# sourceMappingURL=app.module.js.map