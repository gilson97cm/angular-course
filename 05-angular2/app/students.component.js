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
var students_service_1 = require("./students.service");
var StudentsComponent = (function () {
    function StudentsComponent(studentsService) {
        this.selected = new core_1.EventEmitter();
        this.title = "Lista de Estudiantes";
        this.rounded = true;
        this.padding = true;
        this.students = studentsService.listOfStudents("Universidad Nacional");
    }
    StudentsComponent.prototype.change = function (e) {
        this.title = e.target.value;
    };
    StudentsComponent.prototype.clickOnStudent = function (e) {
        this.selected.emit({ name: e.target.textContent });
    };
    __decorate([
        core_1.Input(),
        __metadata("design:type", String)
    ], StudentsComponent.prototype, "university", void 0);
    __decorate([
        core_1.Output(),
        __metadata("design:type", Object)
    ], StudentsComponent.prototype, "selected", void 0);
    StudentsComponent = __decorate([
        core_1.Component({
            selector: "students",
            templateUrl: 'app/templates/students.template.html',
            providers: [students_service_1.StudentsService],
        }),
        __metadata("design:paramtypes", [students_service_1.StudentsService])
    ], StudentsComponent);
    return StudentsComponent;
}());
exports.StudentsComponent = StudentsComponent;
//# sourceMappingURL=students.component.js.map