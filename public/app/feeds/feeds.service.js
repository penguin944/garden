System.register(['@angular/core', '@angular/http', 'rxjs/observable/ErrorObservable', 'rxjs/add/operator/catch', 'rxjs/add/observable/throw'], function(exports_1, context_1) {
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
    var core_1, http_1, ErrorObservable_1;
    var FeedsService;
    return {
        setters:[
            function (core_1_1) {
                core_1 = core_1_1;
            },
            function (http_1_1) {
                http_1 = http_1_1;
            },
            function (ErrorObservable_1_1) {
                ErrorObservable_1 = ErrorObservable_1_1;
            },
            function (_1) {},
            function (_2) {}],
        execute: function() {
            FeedsService = (function () {
                function FeedsService(http) {
                    this.http = http;
                    this.feedsUrl = 'api/feeds';
                }
                FeedsService.prototype.all = function () {
                    return this.http.get(this.feedsUrl)
                        .map(function (res) { return res.json() || {}; })
                        .map(function (data) { return data.sort(function (feed1, feed2) { return feed1.name.localeCompare(feed2.name); }); })
                        .catch(this.handleError);
                };
                FeedsService.prototype.details = function (idOrName) {
                    return this.http.get(this.feedsUrl + "/" + idOrName)
                        .map(function (res) { return res.json() || {}; })
                        .catch(this.handleError);
                };
                FeedsService.prototype.handleError = function (error) {
                    return ErrorObservable_1.ErrorObservable.create(error.status + " - " + error.statusText + ": " + error.text());
                };
                FeedsService = __decorate([
                    core_1.Injectable(), 
                    __metadata('design:paramtypes', [http_1.Http])
                ], FeedsService);
                return FeedsService;
            }());
            exports_1("FeedsService", FeedsService);
        }
    }
});
//# sourceMappingURL=feeds.service.js.map