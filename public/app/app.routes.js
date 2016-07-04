System.register(['@angular/router', './feeds/feeds.routes'], function(exports_1, context_1) {
    "use strict";
    var __moduleName = context_1 && context_1.id;
    var router_1, feeds_routes_1;
    var routes, APP_ROUTER_PROVIDERS;
    return {
        setters:[
            function (router_1_1) {
                router_1 = router_1_1;
            },
            function (feeds_routes_1_1) {
                feeds_routes_1 = feeds_routes_1_1;
            }],
        execute: function() {
            exports_1("routes", routes = [
                { path: '', redirectTo: '/feeds', pathMatch: 'full' }
            ].concat(feeds_routes_1.FeedsRoutes));
            exports_1("APP_ROUTER_PROVIDERS", APP_ROUTER_PROVIDERS = [
                router_1.provideRouter(routes)
            ]);
        }
    }
});
//# sourceMappingURL=app.routes.js.map