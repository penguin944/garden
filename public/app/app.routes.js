System.register(['@angular/router', './home/home.component', './data/data.component', './weather/weather.component', './about/about.component'], function(exports_1, context_1) {
    "use strict";
    var __moduleName = context_1 && context_1.id;
    var router_1, home_component_1, data_component_1, weather_component_1, about_component_1;
    var routes, appRouterProviders;
    return {
        setters:[
            function (router_1_1) {
                router_1 = router_1_1;
            },
            function (home_component_1_1) {
                home_component_1 = home_component_1_1;
            },
            function (data_component_1_1) {
                data_component_1 = data_component_1_1;
            },
            function (weather_component_1_1) {
                weather_component_1 = weather_component_1_1;
            },
            function (about_component_1_1) {
                about_component_1 = about_component_1_1;
            }],
        execute: function() {
            routes = [
                { path: '', component: home_component_1.HomeComponent },
                { path: 'data', component: data_component_1.DataComponent },
                { path: 'weather', component: weather_component_1.WeatherComponent },
                { path: 'about', component: about_component_1.AboutComponent }
            ];
            exports_1("appRouterProviders", appRouterProviders = [
                router_1.provideRouter(routes)
            ]);
        }
    }
});
//# sourceMappingURL=/app/app.routes.js.map