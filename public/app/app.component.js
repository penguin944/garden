System.register(['@angular/core', '@angular/router', "@angular/common", '@angular2-material/button', '@angular2-material/sidenav', '@angular2-material/icon', './feeds/feed-list.component', './feeds/feed-detail.component', './alerts.service'], function(exports_1, context_1) {
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
    var core_1, router_1, common_1, button_1, sidenav_1, icon_1, feed_list_component_1, feed_detail_component_1, alerts_service_1;
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
            function (button_1_1) {
                button_1 = button_1_1;
            },
            function (sidenav_1_1) {
                sidenav_1 = sidenav_1_1;
            },
            function (icon_1_1) {
                icon_1 = icon_1_1;
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
                    this.title = "Pleimann - Garden Dashboard";
                    this.views = [
                        {
                            name: 'feeds',
                            description: 'Current weather in St. Louis',
                            icon: 'receipt'
                        },
                    ];
                    alertsService.alerts.subscribe(function (alert) { return _this.alerts.push(alert); });
                }
                AppComponent = __decorate([
                    core_1.Component({
                        selector: 'mp-garden',
                        template: "\n<header>\n\t<md-toolbar [color]=\"'accent'\">\n\t  <md-toolbar-row>{{ title }}</md-toolbar-row>\n\t  \n\t  <md-toolbar-row>\n      <md-nav-list>\n        <button md-button *ngFor=\"let view of views\" [routerLink]=\"[ view.name ]\">\n          <md-icon md-list-icon fontIcon=\"{{ view.icon }}\"></md-icon>\n          <span>{{ view.name | uppercase }}</span>\n          <span>{{ view.description }}</span>\n        </button>\n      </md-nav-list>\n\t\t</md-toolbar-row>\n\t\t\n\t\t<span class=\"app-toolbar-filler\"></span>\n\t</md-toolbar>\n\t<div class=\"app-content\">\n    <section>\n      <div class=\"alert\" *ngFor=\"let alert of alerts\">\n        {{ alert.message }}\n      </div>    \n    </section>\n\n\t\t<router-outlet></router-outlet>\n\t</div>\n</header>\n",
                        pipes: [common_1.COMMON_PIPES, common_1.UpperCasePipe],
                        directives: [router_1.ROUTER_DIRECTIVES, common_1.COMMON_DIRECTIVES, icon_1.MD_ICON_DIRECTIVES, sidenav_1.MD_SIDENAV_DIRECTIVES, button_1.MD_BUTTON_DIRECTIVES],
                        providers: [icon_1.MdIconRegistry],
                        precompile: [feed_list_component_1.FeedListComponent, feed_detail_component_1.FeedDetailComponent] // required for @angular/router
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