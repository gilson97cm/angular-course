"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var router_1 = require("@angular/router");
var about_component_1 = require("./components/about.component");
var contact_component_1 = require("./components/contact.component");
var employee_component_1 = require("./components/employee.component");
var home_compinent_1 = require("./components/home.compinent");
var services_component_1 = require("./components/services.component");
var APP_ROUTES = [
    { path: 'home', component: home_compinent_1.HomeComponent },
    { path: 'about', component: about_component_1.AboutComponent },
    { path: 'contact', component: contact_component_1.ContactComponent },
    { path: 'services', component: services_component_1.ServicesComponent },
    //ruta con parametros
    { path: 'employee/:id', component: employee_component_1.EmployeeComponent },
];
exports.routing = router_1.RouterModule.forRoot(APP_ROUTES);
//# sourceMappingURL=app.routing.js.map