System.register([], function(exports_1, context_1) {
    "use strict";
    var __moduleName = context_1 && context_1.id;
    var Cursos;
    return {
        setters:[],
        execute: function() {
            Cursos = (function () {
                function Cursos(id, nombre, descripcion, precio, tutor) {
                    this.id = id;
                    this.nombre = nombre;
                    this.descripcion = descripcion;
                    this.precio = precio;
                    this.tutor = tutor;
                }
                return Cursos;
            }());
            exports_1("Cursos", Cursos);
        }
    }
});
//# sourceMappingURL=cursos.js.map