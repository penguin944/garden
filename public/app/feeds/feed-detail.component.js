System.register(['@angular/core', '@angular/common', "@angular2-material/card", '@angular/router', 'ng2-charts/ng2-charts', './feeds.service'], function(exports_1, context_1) {
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
    var core_1, common_1, card_1, router_1, ng2_charts_1, feeds_service_1;
    var FeedDetailComponent;
    return {
        setters:[
            function (core_1_1) {
                core_1 = core_1_1;
            },
            function (common_1_1) {
                common_1 = common_1_1;
            },
            function (card_1_1) {
                card_1 = card_1_1;
            },
            function (router_1_1) {
                router_1 = router_1_1;
            },
            function (ng2_charts_1_1) {
                ng2_charts_1 = ng2_charts_1_1;
            },
            function (feeds_service_1_1) {
                feeds_service_1 = feeds_service_1_1;
            }],
        execute: function() {
            FeedDetailComponent = (function () {
                function FeedDetailComponent(feedsService, route) {
                    this.feedsService = feedsService;
                    this.route = route;
                    this.readingData = [1, 2, 3, 4];
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
                        template: "\n  <md-card *ngIf=\"feed | async\">\n    <md-card-title>{{ (feed | async)?.name }}</md-card-title>   \n    <md-card-subtitle>Last Value: {{ (feed | async)?.last_value }}</md-card-subtitle>\n    <md-card-content>\n      \n    </md-card-content>\n  </md-card>\n  <!--<tr *ngFor=\"let reading of (feed | async)?.readings\">\n      <td>{{ reading.id }}</td>\n      <td>{{ reading.value }}%</td>\n      <td>{{ reading.created_at | date:'MM/dd/y HH:mm:ss' }} CDT</td>\n  </tr>-->\n  <base-chart class=\"chart\"\n      [data]=\"readingData\"\n      [chartType]=\"'line'\"></base-chart>\n",
                        providers: [feeds_service_1.FeedsService],
                        directives: [common_1.COMMON_DIRECTIVES, card_1.MD_CARD_DIRECTIVES, ng2_charts_1.CHART_DIRECTIVES],
                        pipes: [common_1.COMMON_PIPES, common_1.JsonPipe]
                    }), 
                    __metadata('design:paramtypes', [feeds_service_1.FeedsService, router_1.ActivatedRoute])
                ], FeedDetailComponent);
                return FeedDetailComponent;
            }());
            exports_1("FeedDetailComponent", FeedDetailComponent);
        }
    }
});
//# sourceMappingURL=feed-detail.component.js.map