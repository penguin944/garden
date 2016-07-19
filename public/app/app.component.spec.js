/* tslint:disable:no-unused-variable */
System.register(['@angular/core/testing', './app.component'], function(exports_1, context_1) {
    "use strict";
    var __moduleName = context_1 && context_1.id;
    var testing_1, app_component_1;
    return {
        setters:[
            function (testing_1_1) {
                testing_1 = testing_1_1;
            },
            function (app_component_1_1) {
                app_component_1 = app_component_1_1;
            }],
        execute: function() {
            testing_1.beforeEachProviders(function () { return [app_component_1.AppComponent]; });
            testing_1.describe('App: PleimannGarden', function () {
                testing_1.it('should create the app', testing_1.inject([app_component_1.AppComponent], function (app) {
                    testing_1.expect(app).toBeTruthy();
                }));
            });
        }
    }
});
//# sourceMappingURL=/app/app.component.spec.js.map