System.register(['angular2/core', 'angular2/http', '../blocks/blocks', '../shared/shared'], function(exports_1, context_1) {
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
    var core_1, http_1, blocks_1, shared_1;
    var charactersUrl, CharacterService;
    return {
        setters:[
            function (core_1_1) {
                core_1 = core_1_1;
            },
            function (http_1_1) {
                http_1 = http_1_1;
            },
            function (blocks_1_1) {
                blocks_1 = blocks_1_1;
            },
            function (shared_1_1) {
                shared_1 = shared_1_1;
            }],
        execute: function() {
            charactersUrl = shared_1.CONFIG.baseUrls.characters;
            CharacterService = (function () {
                function CharacterService(_http, _exceptionService, _messageService, _spinnerService) {
                    var _this = this;
                    this._http = _http;
                    this._exceptionService = _exceptionService;
                    this._messageService = _messageService;
                    this._spinnerService = _spinnerService;
                    this.onDbReset = this._messageService.state;
                    this._messageService.state.subscribe(function (state) { return _this.getCharacters(); });
                }
                CharacterService.prototype.addCharacter = function (character) {
                    var _this = this;
                    var body = JSON.stringify(character);
                    this._spinnerService.show();
                    return this._http
                        .post("" + charactersUrl, body)
                        .map(function (res) { return res.json().data; })
                        .catch(this._exceptionService.catchBadResponse)
                        .finally(function () { return _this._spinnerService.hide(); });
                };
                CharacterService.prototype.deleteCharacter = function (character) {
                    var _this = this;
                    this._spinnerService.show();
                    return this._http
                        .delete(charactersUrl + "/" + character.id)
                        .catch(this._exceptionService.catchBadResponse)
                        .finally(function () { return _this._spinnerService.hide(); });
                };
                CharacterService.prototype.getCharacters = function () {
                    var _this = this;
                    this._spinnerService.show();
                    return this._http.get(charactersUrl)
                        .map(function (response) { return response.json().data; })
                        .catch(this._exceptionService.catchBadResponse)
                        .finally(function () { return _this._spinnerService.hide(); });
                };
                CharacterService.prototype.getCharacter = function (id) {
                    var _this = this;
                    this._spinnerService.show();
                    return this._http.get(charactersUrl + "/" + id)
                        .map(function (response) { return response.json().data; })
                        .catch(this._exceptionService.catchBadResponse)
                        .finally(function () { return _this._spinnerService.hide(); });
                };
                CharacterService.prototype.updateCharacter = function (character) {
                    var _this = this;
                    var body = JSON.stringify(character);
                    this._spinnerService.show();
                    return this._http
                        .put(charactersUrl + "/" + character.id, body)
                        .catch(this._exceptionService.catchBadResponse)
                        .finally(function () { return _this._spinnerService.hide(); });
                };
                CharacterService = __decorate([
                    core_1.Injectable(), 
                    __metadata('design:paramtypes', [http_1.Http, blocks_1.ExceptionService, shared_1.MessageService, blocks_1.SpinnerService])
                ], CharacterService);
                return CharacterService;
            }());
            exports_1("CharacterService", CharacterService);
        }
    }
});
//# sourceMappingURL=character.service.js.map