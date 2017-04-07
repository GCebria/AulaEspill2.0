System.register(["angular2/core", "rxjs/add/operator/map"], function(exports_1, context_1) {
    "use strict";
    var __moduleName = context_1 && context_1.id;
    var core_1;
    var CursoService;
    return {
        setters:[
            function (core_1_1) {
                core_1 = core_1_1;
            },
            function (_1) {}],
        execute: function() {
            core_1.Injectable();
            CursoService = (function () {
                function CursoService() {
                }
                return CursoService;
            }());
            exports_1("CursoService", CursoService);
        }
    }
});
//# sourceMappingURL=curso.service.js.map