"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var StudentsService = (function () {
    function StudentsService() {
    }
    StudentsService.prototype.listOfStudents = function (university) {
        if (university == "Universidad Nacional") {
            return ['Studetn1 UN', 'student2 UN'];
            // return [];
        }
        return ['Student3', 'Student5'];
    };
    return StudentsService;
}());
exports.StudentsService = StudentsService;
//# sourceMappingURL=students.service.js.map