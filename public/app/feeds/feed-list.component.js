System.register(['@angular/core', "@angular/common", '@angular/router', './feeds.service'], function(exports_1, context_1) {
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
    var core_1, common_1, router_1, feeds_service_1;
    var FeedListComponent;
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
            function (feeds_service_1_1) {
                feeds_service_1 = feeds_service_1_1;
            }],
        execute: function() {
            FeedListComponent = (function () {
                function FeedListComponent(feedService) {
                    this.feedService = feedService;
                }
                FeedListComponent.prototype.ngOnInit = function () {
                    this.feeds = this.feedService.all();
                };
                FeedListComponent = __decorate([
                    core_1.Component({
                        selector: 'mp-garden-feeds',
                        template: "\n<table>\n    <thead>\n        <tr><th>Id</th><th>Name</th></tr>\n    </thead>\n    <tr *ngFor=\"let feed of feeds | async\">\n        <td>{{ feed.id }}</td>\n        <td><a [routerLink]=\"['/feeds', feed.name]\">{{ feed.name }}</a></td>\n    </tr>\n</table>        \n    ",
                        providers: [feeds_service_1.FeedsService],
                        directives: [common_1.COMMON_DIRECTIVES, router_1.ROUTER_DIRECTIVES],
                        pipes: [common_1.COMMON_PIPES]
                    }), 
                    __metadata('design:paramtypes', [feeds_service_1.FeedsService])
                ], FeedListComponent);
                return FeedListComponent;
            }());
            exports_1("FeedListComponent", FeedListComponent);
        }
    }
});
//# sourceMappingURL=feed-list.component.js.map