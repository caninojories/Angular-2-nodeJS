System.register(['angular2/core', 'angular2/http', 'angular2/router', 'rxjs/Rx', 'a2-in-memory-web-api/core', '../api/in-memory-story.service', './characters/characters', './dashboard/dashboard', './vehicles/vehicles', './shared/shared', './blocks/blocks'], function(exports_1, context_1) {
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
    var core_1, http_1, router_1, core_2, in_memory_story_service_1, characters_1, dashboard_1, vehicles_1, shared_1, blocks_1;
    var AppComponent;
    return {
        setters:[
            function (core_1_1) {
                core_1 = core_1_1;
            },
            function (http_1_1) {
                http_1 = http_1_1;
            },
            function (router_1_1) {
                router_1 = router_1_1;
            },
            function (_1) {},
            function (core_2_1) {
                core_2 = core_2_1;
            },
            function (in_memory_story_service_1_1) {
                in_memory_story_service_1 = in_memory_story_service_1_1;
            },
            function (characters_1_1) {
                characters_1 = characters_1_1;
            },
            function (dashboard_1_1) {
                dashboard_1 = dashboard_1_1;
            },
            function (vehicles_1_1) {
                vehicles_1 = vehicles_1_1;
            },
            function (shared_1_1) {
                shared_1 = shared_1_1;
            },
            function (blocks_1_1) {
                blocks_1 = blocks_1_1;
            }],
        execute: function() {
            AppComponent = (function () {
                function AppComponent(_messageService, _modalService) {
                    this._messageService = _messageService;
                    this._modalService = _modalService;
                    this.menuItems = [
                        { caption: 'Dashboard', link: ['Dashboard'] },
                        { caption: 'Characters', link: ['Characters'] },
                        { caption: 'Vehicles', link: ['Vehicles'] }
                    ];
                }
                AppComponent.prototype.resetDb = function () {
                    var _this = this;
                    var msg = 'Are you sure you want to reset the database?';
                    this._modalService.activate(msg).then(function (responseOK) {
                        if (responseOK) {
                            _this._messageService.resetDb();
                        }
                    });
                };
                AppComponent = __decorate([
                    core_1.Component({
                        selector: 'story-app',
                        templateUrl: 'app/app.component.html',
                        styleUrls: ['app/app.component.css'],
                        directives: [router_1.ROUTER_DIRECTIVES, blocks_1.ModalComponent, blocks_1.SpinnerComponent, blocks_1.ToastComponent],
                        providers: [
                            http_1.HTTP_PROVIDERS,
                            core_1.provide(http_1.XHRBackend, { useClass: core_2.InMemoryBackendService }),
                            core_1.provide(core_2.SEED_DATA, { useClass: in_memory_story_service_1.InMemoryStoryService }),
                            core_1.provide(core_2.InMemoryBackendConfig, { useValue: { delay: 600 } }),
                            router_1.ROUTER_PROVIDERS,
                            characters_1.CharacterService,
                            blocks_1.EntityService,
                            blocks_1.ExceptionService,
                            shared_1.MessageService,
                            blocks_1.ModalService,
                            blocks_1.SpinnerService,
                            blocks_1.ToastService
                        ]
                    }),
                    router_1.RouteConfig([
                        new router_1.Redirect({ path: '/', redirectTo: ['Dashboard'] }),
                        // { path: '/dashboard',  redirectTo: ['/Dashboard']  },
                        new router_1.Route({ path: '/dashboard', name: 'Dashboard', component: dashboard_1.DashboardComponent }),
                        new router_1.Route({ path: '/vehicles/...', name: 'Vehicles', component: vehicles_1.VehiclesComponent }),
                        new router_1.Route({ path: '/characters/...', name: 'Characters', component: characters_1.CharactersComponent }),
                    ]), 
                    __metadata('design:paramtypes', [shared_1.MessageService, blocks_1.ModalService])
                ], AppComponent);
                return AppComponent;
            }());
            exports_1("AppComponent", AppComponent);
        }
    }
});
//# sourceMappingURL=app.component.js.map