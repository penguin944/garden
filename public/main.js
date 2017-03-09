System.register(['@angular/common', '@angular/platform-browser-dynamic', '@angular/core', '@angular/http', './environment', './app/app.component', './app/app.routes'], function(exports_1, context_1) {
    "use strict";
    var __moduleName = context_1 && context_1.id;
    var common_1, platform_browser_dynamic_1, core_1, http_1, environment_1, app_component_1, app_routes_1;
    return {
        setters:[
            function (common_1_1) {
                common_1 = common_1_1;
            },
            function (platform_browser_dynamic_1_1) {
                platform_browser_dynamic_1 = platform_browser_dynamic_1_1;
            },
            function (core_1_1) {
                core_1 = core_1_1;
            },
            function (http_1_1) {
                http_1 = http_1_1;
            },
            function (environment_1_1) {
                environment_1 = environment_1_1;
            },
            function (app_component_1_1) {
                app_component_1 = app_component_1_1;
            },
            function (app_routes_1_1) {
                app_routes_1 = app_routes_1_1;
            }],
        execute: function() {
            if (environment_1.environment.production) {
                core_1.enableProdMode();
            }
            platform_browser_dynamic_1.bootstrap(app_component_1.AppComponent, [
                http_1.HTTP_PROVIDERS,
                app_routes_1.appRouterProviders,
                { provide: common_1.LocationStrategy, useClass: common_1.HashLocationStrategy }
            ]);
        }
    }
});
//# sourceMappingURL=/main.js.map