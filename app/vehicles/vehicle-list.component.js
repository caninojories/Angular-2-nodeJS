System.register(['angular2/core', 'angular2/router', '../blocks/blocks', './vehicle.service'], function(exports_1, context_1) {
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
    var core_1, router_1, blocks_1, vehicle_service_1;
    var VehicleListComponent;
    return {
        setters:[
            function (core_1_1) {
                core_1 = core_1_1;
            },
            function (router_1_1) {
                router_1 = router_1_1;
            },
            function (blocks_1_1) {
                blocks_1 = blocks_1_1;
            },
            function (vehicle_service_1_1) {
                vehicle_service_1 = vehicle_service_1_1;
            }],
        execute: function() {
            VehicleListComponent = (function () {
                function VehicleListComponent(_filterService, _vehicleService) {
                    this._filterService = _filterService;
                    this._vehicleService = _vehicleService;
                    this.filteredVehicles = this.vehicles;
                }
                VehicleListComponent.prototype.filterChanged = function (searchText) {
                    this.filteredVehicles = this._filterService.filter(searchText, ['id', 'name', 'type'], this.vehicles);
                };
                VehicleListComponent.prototype.getVehicles = function () {
                    var _this = this;
                    this.vehicles = [];
                    this._vehicleService.getVehicles()
                        .subscribe(function (vehicles) {
                        _this.vehicles = _this.filteredVehicles = vehicles;
                        _this.filterComponent.clear();
                    });
                };
                VehicleListComponent.prototype.ngOnDestroy = function () {
                    this._dbResetSubscription.unsubscribe();
                };
                VehicleListComponent.prototype.ngOnInit = function () {
                    var _this = this;
                    componentHandler.upgradeDom();
                    this.getVehicles();
                    this._dbResetSubscription = this._vehicleService.onDbReset
                        .subscribe(function () { return _this.getVehicles(); });
                };
                __decorate([
                    core_1.ViewChild(blocks_1.FilterTextComponent), 
                    __metadata('design:type', blocks_1.FilterTextComponent)
                ], VehicleListComponent.prototype, "filterComponent", void 0);
                VehicleListComponent = __decorate([
                    core_1.Component({
                        selector: 'story-vehicles',
                        templateUrl: './app/vehicles/vehicle-list.component.html',
                        directives: [blocks_1.FilterTextComponent, router_1.ROUTER_DIRECTIVES],
                        styleUrls: ['./app/vehicles/vehicle-list.component.css'],
                        pipes: [blocks_1.InitCapsPipe],
                        providers: [blocks_1.FilterService]
                    }), 
                    __metadata('design:paramtypes', [blocks_1.FilterService, vehicle_service_1.VehicleService])
                ], VehicleListComponent);
                return VehicleListComponent;
            }());
            exports_1("VehicleListComponent", VehicleListComponent);
        }
    }
});
//# sourceMappingURL=vehicle-list.component.js.map