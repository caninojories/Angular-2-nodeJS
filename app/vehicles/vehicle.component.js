System.register(['angular2/core', 'angular2/router', '../blocks/blocks', '../vehicles/vehicle.service'], function(exports_1, context_1) {
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
    var VehicleComponent;
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
            VehicleComponent = (function () {
                function VehicleComponent(_entityService, _modalService, _routeParams, _router, _toastService, _vehicleService) {
                    this._entityService = _entityService;
                    this._modalService = _modalService;
                    this._routeParams = _routeParams;
                    this._router = _router;
                    this._toastService = _toastService;
                    this._vehicleService = _vehicleService;
                    this.editVehicle = {};
                }
                VehicleComponent.prototype.cancel = function (showToast) {
                    if (showToast === void 0) { showToast = true; }
                    this.editVehicle = this._entityService.clone(this.vehicle);
                    if (showToast) {
                        this._toastService.activate("Cancelled changes to " + this.vehicle.name);
                    }
                };
                VehicleComponent.prototype.delete = function () {
                    var _this = this;
                    var msg = "Do you want to delete the " + this.vehicle.name + "?";
                    this._modalService.activate(msg).then(function (responseOK) {
                        if (responseOK) {
                            _this.cancel(false);
                            _this._vehicleService.deleteVehicle(_this.vehicle)
                                .subscribe(function () {
                                _this._toastService.activate("Deleted " + _this.vehicle.name);
                                _this._gotoVehicles();
                            }, function (err) { return _this._handleServiceError('Delete', err); }, // Failure path
                            function () { return console.log('Delete Completed'); } // Completed actions
                             // Completed actions
                            );
                        }
                    });
                };
                VehicleComponent.prototype.isAddMode = function () {
                    var id = +this._routeParams.get('id');
                    return isNaN(id);
                };
                VehicleComponent.prototype.ngOnDestroy = function () {
                    this._dbResetSubscription.unsubscribe();
                };
                VehicleComponent.prototype.ngOnInit = function () {
                    var _this = this;
                    componentHandler.upgradeDom();
                    this._getVehicle();
                    this._dbResetSubscription = this._vehicleService.onDbReset
                        .subscribe(function () {
                        _this._getVehicle();
                    });
                };
                VehicleComponent.prototype.routerCanDeactivate = function (next, prev) {
                    return !this.vehicle ||
                        !this._isDirty() ||
                        this._modalService.activate();
                };
                VehicleComponent.prototype.save = function () {
                    var _this = this;
                    var vehicle = this.vehicle = this._entityService.merge(this.vehicle, this.editVehicle);
                    if (vehicle.id == null) {
                        this._vehicleService.addVehicle(vehicle)
                            .subscribe(function (v) {
                            _this._setEditVehicle(v);
                            _this._toastService.activate("Successfully added " + v.name);
                            _this._gotoVehicles();
                        });
                        return;
                    }
                    this._vehicleService.updateVehicle(this.vehicle)
                        .subscribe(function () { return _this._toastService.activate("Successfully saved " + _this.vehicle.name); });
                };
                VehicleComponent.prototype._getVehicle = function () {
                    var _this = this;
                    var id = +this._routeParams.get('id');
                    if (id === 0)
                        return;
                    if (this.isAddMode()) {
                        this.vehicle = { name: '', type: '' };
                        this.editVehicle = this._entityService.clone(this.vehicle);
                        return;
                    }
                    this._vehicleService.getVehicle(id)
                        .subscribe(function (vehicle) { return _this._setEditVehicle(vehicle); });
                };
                VehicleComponent.prototype._gotoVehicles = function () {
                    var id = this.vehicle ? this.vehicle.id : null;
                    var route = ['Vehicles', { id: id }];
                    this._router.navigate(route);
                };
                VehicleComponent.prototype._handleServiceError = function (op, err) {
                    console.error(op + " error: " + (err.message || err));
                };
                VehicleComponent.prototype._isDirty = function () {
                    return this._entityService.propertiesDiffer(this.vehicle, this.editVehicle);
                };
                VehicleComponent.prototype._setEditVehicle = function (vehicle) {
                    if (vehicle) {
                        this.vehicle = vehicle;
                        this.editVehicle = this._entityService.clone(this.vehicle);
                    }
                    else {
                        this._gotoVehicles();
                    }
                };
                __decorate([
                    core_1.Input(), 
                    __metadata('design:type', Object)
                ], VehicleComponent.prototype, "vehicle", void 0);
                VehicleComponent = __decorate([
                    core_1.Component({
                        selector: 'story-vehicle',
                        templateUrl: 'app/vehicles/vehicle.component.html',
                        styles: ['.mdl-textfield__label {top: 0;}'],
                        directives: [router_1.ROUTER_DIRECTIVES]
                    }), 
                    __metadata('design:paramtypes', [blocks_1.EntityService, blocks_1.ModalService, router_1.RouteParams, router_1.Router, blocks_1.ToastService, vehicle_service_1.VehicleService])
                ], VehicleComponent);
                return VehicleComponent;
            }());
            exports_1("VehicleComponent", VehicleComponent);
        }
    }
});
//# sourceMappingURL=vehicle.component.js.map