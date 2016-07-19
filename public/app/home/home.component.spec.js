/* tslint:disable:no-unused-variable */
System.register(['@angular/core/testing', './home.component'], function(exports_1, context_1) {
    "use strict";
    var __moduleName = context_1 && context_1.id;
    var testing_1, home_component_1;
    return {
        setters:[
            function (testing_1_1) {
                testing_1 = testing_1_1;
            },
            function (home_component_1_1) {
                home_component_1 = home_component_1_1;
            }],
        execute: function() {
            testing_1.describe('Component: Home', function () {
                testing_1.it('should create an instance', function () {
                    var component = new home_component_1.HomeComponent();
                    testing_1.expect(component).toBeTruthy();
                });
            });
        }
    }
});
//# sourceMappingURL=/app/home/home.component.spec.js.map