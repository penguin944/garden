System.register(['@angular/core', '@angular/common', '@angular/router', 'rxjs/Rx', 'rxjs/add/operator/first', '@angular2-material/toolbar', '@angular2-material/button', '@angular2-material/tabs', '@angular2-material/icon', './about/about.component', './data/data.component', './home/home.component', './moisture-chart/moisture-chart.component', './weather/weather.component'], function(exports_1, context_1) {
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
    var core_1, common_1, router_1, Rx_1, toolbar_1, button_1, tabs_1, icon_1;
    var AppComponent;
    return {
        setters:[
            function (core_1_1) {
                core_1 = core_1_1;
            },
            function (common_1_1) {
                common_1 = common_1_1;
            },
            function (router_1_1) {
                router_1 = router_1_1;
            },
            function (Rx_1_1) {
                Rx_1 = Rx_1_1;
            },
            function (_1) {},
            function (toolbar_1_1) {
                toolbar_1 = toolbar_1_1;
            },
            function (button_1_1) {
                button_1 = button_1_1;
            },
            function (tabs_1_1) {
                tabs_1 = tabs_1_1;
            },
            function (icon_1_1) {
                icon_1 = icon_1_1;
            },
            function (_2) {},
            function (_3) {},
            function (_4) {},
            function (_5) {},
            function (_6) {}],
        execute: function() {
            AppComponent = (function () {
                function AppComponent(router) {
                    this.router = router;
                    this.toolbarColor = 'primary';
                    this.pages = Rx_1.Observable.of([
                        {
                            name: 'HOME',
                            link: '/home'
                        }, {
                            name: 'DATA',
                            link: '/data'
                        }, {
                            name: 'WEATHER',
                            link: '/weather'
                        }, {
                            name: 'ABOUT',
                            link: '/about'
                        }
                    ]);
                }
                AppComponent.prototype.selectTab = function (event) {
                    var _this = this;
                    this.pages.map(function (pages) { return pages.filter(function (pages, index) { return index === event.index; })[0]; })
                        .subscribe(function (page) { return _this.router.navigateByUrl(page.link); });
                };
                AppComponent = __decorate([
                    core_1.Component({
                        selector: 'app-root',
                        templateUrl: 'app/app.component.html',
                        styleUrls: ['app/app.component.css'],
                        directives: [
                            common_1.NgFor,
                            router_1.ROUTER_DIRECTIVES,
                            button_1.MD_BUTTON_DIRECTIVES,
                            toolbar_1.MD_TOOLBAR_DIRECTIVES,
                            icon_1.MD_ICON_DIRECTIVES,
                            button_1.MD_BUTTON_DIRECTIVES,
                            tabs_1.MD_TABS_DIRECTIVES
                        ],
                        providers: [icon_1.MdIconRegistry],
                        pipes: [common_1.UpperCasePipe, common_1.AsyncPipe],
                        encapsulation: core_1.ViewEncapsulation.None
                    }), 
                    __metadata('design:paramtypes', [router_1.Router])
                ], AppComponent);
                return AppComponent;
            }());
            exports_1("AppComponent", AppComponent);
        }
    }
});
//# sourceMappingURL=/app/app.component.js.map