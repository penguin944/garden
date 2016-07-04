System.register(['@angular/core', '@angular/router', './feeds.service'], function(exports_1, context_1) {
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
    var core_1, router_1, feeds_service_1;
    var FeedDetailComponent;
    return {
        setters:[
            function (core_1_1) {
                core_1 = core_1_1;
            },
            function (router_1_1) {
                router_1 = router_1_1;
            },
            function (feeds_service_1_1) {
                feeds_service_1 = feeds_service_1_1;
            }],
        execute: function() {
            FeedDetailComponent = (function () {
                function FeedDetailComponent(route, feedsService) {
                    this.route = route;
                    this.feedsService = feedsService;
                }
                FeedDetailComponent.prototype.ngOnInit = function () {
                    var _this = this;
                    this.route.params.subscribe(function (params) {
                        var name = params['name'];
                        _this.feed = _this.feedsService.details(name);
                    });
                };
                FeedDetailComponent = __decorate([
                    core_1.Component({
                        selector: 'mp-garden-feed',
                        template: "\n<table>\n    <thead>\n        <tr><th>Id</th><th>Name</th></tr>\n    </thead>\n    <tr>\n        <td>{{ feed.id | async }}</td>\n    </tr>\n</table> \n  ",
                        providers: [feeds_service_1.FeedsService],
                    }), 
                    __metadata('design:paramtypes', [router_1.ActivatedRoute, feeds_service_1.FeedsService])
                ], FeedDetailComponent);
                return FeedDetailComponent;
            }());
            exports_1("FeedDetailComponent", FeedDetailComponent);
        }
    }
});
//# sourceMappingURL=feed-detail.component.js.map