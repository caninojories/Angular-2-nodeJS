System.register(['angular2/core', 'angular2/router', '../blocks/blocks', '../characters/character.service'], function(exports_1, context_1) {
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
    var core_1, router_1, blocks_1, character_service_1;
    var CharacterComponent;
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
            function (character_service_1_1) {
                character_service_1 = character_service_1_1;
            }],
        execute: function() {
            CharacterComponent = (function () {
                function CharacterComponent(_characterService, _entityService, _modalService, _routeParams, _router, _toastService) {
                    this._characterService = _characterService;
                    this._entityService = _entityService;
                    this._modalService = _modalService;
                    this._routeParams = _routeParams;
                    this._router = _router;
                    this._toastService = _toastService;
                    this.editCharacter = {};
                }
                CharacterComponent.prototype.cancel = function (showToast) {
                    if (showToast === void 0) { showToast = true; }
                    this.editCharacter = this._entityService.clone(this.character);
                    if (showToast) {
                        this._toastService.activate("Cancelled changes to " + this.character.name);
                    }
                };
                CharacterComponent.prototype.delete = function () {
                    var _this = this;
                    var msg = "Do you want to delete " + this.character.name + "?";
                    this._modalService.activate(msg).then(function (responseOK) {
                        if (responseOK) {
                            _this.cancel(false);
                            _this._characterService.deleteCharacter(_this.character)
                                .subscribe(function () {
                                _this._toastService.activate("Deleted " + _this.character.name);
                                _this._gotoCharacters();
                            });
                        }
                    });
                };
                CharacterComponent.prototype.isAddMode = function () {
                    var id = +this._routeParams.get('id');
                    return isNaN(id);
                };
                CharacterComponent.prototype.ngOnDestroy = function () {
                    this._dbResetSubscription.unsubscribe();
                };
                CharacterComponent.prototype.ngOnInit = function () {
                    var _this = this;
                    componentHandler.upgradeDom();
                    this._getCharacter();
                    this._dbResetSubscription = this._characterService.onDbReset
                        .subscribe(function () { return _this._getCharacter(); });
                };
                CharacterComponent.prototype.routerCanDeactivate = function (next, prev) {
                    return !this.character ||
                        !this._isDirty() ||
                        this._modalService.activate();
                };
                CharacterComponent.prototype.save = function () {
                    var _this = this;
                    var character = this.character = this._entityService.merge(this.character, this.editCharacter);
                    if (character.id == null) {
                        this._characterService.addCharacter(character)
                            .subscribe(function (char) {
                            _this._setEditCharacter(char);
                            _this._toastService.activate("Successfully added " + char.name);
                            _this._gotoCharacters();
                        });
                        return;
                    }
                    this._characterService.updateCharacter(character)
                        .subscribe(function () { return _this._toastService.activate("Successfully saved " + character.name); });
                };
                CharacterComponent.prototype._getCharacter = function () {
                    var _this = this;
                    var id = +this._routeParams.get('id');
                    if (id === 0)
                        return;
                    if (this.isAddMode()) {
                        this.character = { name: '', side: 'dark' };
                        this.editCharacter = this._entityService.clone(this.character);
                        return;
                    }
                    this._characterService.getCharacter(id)
                        .subscribe(function (character) { return _this._setEditCharacter(character); });
                };
                CharacterComponent.prototype._gotoCharacters = function () {
                    var id = this.character ? this.character.id : null;
                    var route = ['Characters', { id: id }];
                    this._router.navigate(route);
                };
                CharacterComponent.prototype._handleServiceError = function (op, err) {
                    console.error(op + " error: " + (err.message || err));
                };
                CharacterComponent.prototype._isDirty = function () {
                    return this._entityService.propertiesDiffer(this.character, this.editCharacter);
                };
                CharacterComponent.prototype._setEditCharacter = function (character) {
                    if (character) {
                        this.character = character;
                        this.editCharacter = this._entityService.clone(this.character);
                    }
                    else {
                        this._gotoCharacters();
                    }
                };
                __decorate([
                    core_1.Input(), 
                    __metadata('design:type', Object)
                ], CharacterComponent.prototype, "character", void 0);
                CharacterComponent = __decorate([
                    core_1.Component({
                        selector: 'story-character',
                        templateUrl: 'app/characters/character.component.html',
                        styles: ['.mdl-textfield__label {top: 0;}'],
                        directives: [router_1.ROUTER_DIRECTIVES]
                    }), 
                    __metadata('design:paramtypes', [character_service_1.CharacterService, blocks_1.EntityService, blocks_1.ModalService, router_1.RouteParams, router_1.Router, blocks_1.ToastService])
                ], CharacterComponent);
                return CharacterComponent;
            }());
            exports_1("CharacterComponent", CharacterComponent);
        }
    }
});
//# sourceMappingURL=character.component.js.map