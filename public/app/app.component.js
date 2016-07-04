System.register(['@angular/core', '@angular/router', "@angular/common", './feeds/feed-list.component', './feeds/feed-detail.component', './alerts.service'], function(exports_1, context_1) {
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
    var core_1, router_1, common_1, feed_list_component_1, feed_detail_component_1, alerts_service_1;
    var AppComponent;
    return {
        setters:[
            function (core_1_1) {
                core_1 = core_1_1;
            },
            function (router_1_1) {
                router_1 = router_1_1;
            },
            function (common_1_1) {
                common_1 = common_1_1;
            },
            function (feed_list_component_1_1) {
                feed_list_component_1 = feed_list_component_1_1;
            },
            function (feed_detail_component_1_1) {
                feed_detail_component_1 = feed_detail_component_1_1;
            },
            function (alerts_service_1_1) {
                alerts_service_1 = alerts_service_1_1;
            }],
        execute: function() {
            AppComponent = (function () {
                function AppComponent(alertsService) {
                    var _this = this;
                    this.alerts = [];
                    alertsService.alerts.subscribe(function (alert) { return _this.alerts.push(alert); });
                }
                AppComponent = __decorate([
                    core_1.Component({
                        selector: 'mp-garden',
                        template: "\n<h1 class='title'>The Pleimanns' - Garden Info</h1>\n\n<nav>\n    <a [routerLink]=\"['/feeds']\">Feeds</a>\n</nav>\n\n<section *ngIf=\"alerts.size > 0\">\n  <div class=\"alert\" *ngFor=\"let alert of alerts\">\n    {{alert.message}}\n  </div>    \n</section>\n\n<router-outlet></router-outlet>\n  ",
                        directives: [router_1.ROUTER_DIRECTIVES, common_1.COMMON_DIRECTIVES],
                        precompile: [feed_list_component_1.FeedListComponent, feed_detail_component_1.FeedDetailComponent]
                    }), 
                    __metadata('design:paramtypes', [alerts_service_1.AlertsService])
                ], AppComponent);
                return AppComponent;
            }());
            exports_1("AppComponent", AppComponent);
        }
    }
});
//# sourceMappingURL=app.component.js.map