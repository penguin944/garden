/* tslint:disable:no-unused-variable */
System.register(['@angular/core/testing', './about.component'], function(exports_1, context_1) {
    "use strict";
    var __moduleName = context_1 && context_1.id;
    var testing_1, about_component_1;
    return {
        setters:[
            function (testing_1_1) {
                testing_1 = testing_1_1;
            },
            function (about_component_1_1) {
                about_component_1 = about_component_1_1;
            }],
        execute: function() {
            testing_1.describe('Component: About', function () {
                testing_1.it('should create an instance', function () {
                    var component = new about_component_1.AboutComponent();
                    testing_1.expect(component).toBeTruthy();
                });
            });
        }
    }
});
//# sourceMappingURL=/app/about/about.component.spec.js.map