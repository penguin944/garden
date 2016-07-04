System.register(['@angular/platform-browser-dynamic', '@angular/http', '@angular/core', './app.routes', './app.component', './exception-handler', './alerts.service'], function(exports_1, context_1) {
    "use strict";
    var __moduleName = context_1 && context_1.id;
    var platform_browser_dynamic_1, http_1, core_1, app_routes_1, app_component_1, exception_handler_1, alerts_service_1;
    return {
        setters:[
            function (platform_browser_dynamic_1_1) {
                platform_browser_dynamic_1 = platform_browser_dynamic_1_1;
            },
            function (http_1_1) {
                http_1 = http_1_1;
            },
            function (core_1_1) {
                core_1 = core_1_1;
            },
            function (app_routes_1_1) {
                app_routes_1 = app_routes_1_1;
            },
            function (app_component_1_1) {
                app_component_1 = app_component_1_1;
            },
            function (exception_handler_1_1) {
                exception_handler_1 = exception_handler_1_1;
            },
            function (alerts_service_1_1) {
                alerts_service_1 = alerts_service_1_1;
            }],
        execute: function() {
            platform_browser_dynamic_1.bootstrap(app_component_1.AppComponent, [
                http_1.HTTP_PROVIDERS,
                app_routes_1.APP_ROUTER_PROVIDERS,
                { provide: core_1.ExceptionHandler, useClass: exception_handler_1.AppExceptionHandler },
                { provide: alerts_service_1.AlertsService, useClass: alerts_service_1.AlertsService }
            ])
                .catch(function (err) { return console.error(err); });
        }
    }
});
//# sourceMappingURL=boot.js.map