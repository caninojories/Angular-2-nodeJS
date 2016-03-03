System.register(['angular2/core'], function(exports_1, context_1) {
    "use strict";
    var __moduleName = context_1 && context_1.id;
    var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
        var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
        if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
        else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
        return c > 3 && r && Object.defineProperty(target, key, r), r;
    };
    var __metadata = (this && this.__metadata) || function (k, v) {
        if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
    };
    var core_1;
    var EntityService;
    return {
        setters:[
            function (core_1_1) {
                core_1 = core_1_1;
            }],
        execute: function() {
            EntityService = (function () {
                function EntityService() {
                    this.clone = function (source) { return Object.assign({}, source); };
                    this.merge = function (target) {
                        var sources = [];
                        for (var _i = 1; _i < arguments.length; _i++) {
                            sources[_i - 1] = arguments[_i];
                        }
                        return Object.assign.apply(Object, [target].concat(sources));
                    };
                    this.propertiesDiffer = function (entityA, entityB) { return Object.keys(entityA).find(function (key) { return entityA[key] !== entityB[key]; }); };
                }
                EntityService = __decorate([
                    core_1.Injectable(), 
                    __metadata('design:paramtypes', [])
                ], EntityService);
                return EntityService;
            }());
            exports_1("EntityService", EntityService);
        }
    }
});
//# sourceMappingURL=entity.service.js.map