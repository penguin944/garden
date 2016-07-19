/* tslint:disable:no-unused-variable */
System.register(['@angular/core/testing', './weather.component'], function(exports_1, context_1) {
    "use strict";
    var __moduleName = context_1 && context_1.id;
    var testing_1, weather_component_1;
    return {
        setters:[
            function (testing_1_1) {
                testing_1 = testing_1_1;
            },
            function (weather_component_1_1) {
                weather_component_1 = weather_component_1_1;
            }],
        execute: function() {
            testing_1.describe('Component: Weather', function () {
                testing_1.it('should create an instance', function () {
                    var component = new weather_component_1.WeatherComponent();
                    testing_1.expect(component).toBeTruthy();
                });
            });
        }
    }
});
//# sourceMappingURL=/app/weather/weather.component.spec.js.map