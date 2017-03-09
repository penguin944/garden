System.register(['@angular/core', '@angular2-material/tabs', '@angular2-material/button', '@angular2-material/icon'], function(exports_1, context_1) {
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
    var core_1, tabs_1, button_1, icon_1;
    var MoistureChartComponent;
    return {
        setters:[
            function (core_1_1) {
                core_1 = core_1_1;
            },
            function (tabs_1_1) {
                tabs_1 = tabs_1_1;
            },
            function (button_1_1) {
                button_1 = button_1_1;
            },
            function (icon_1_1) {
                icon_1 = icon_1_1;
            }],
        execute: function() {
            MoistureChartComponent = (function () {
                function MoistureChartComponent() {
                }
                MoistureChartComponent.prototype.ngOnInit = function () {
                };
                MoistureChartComponent = __decorate([
                    core_1.Component({
                        selector: 'app-moisture-chart',
                        templateUrl: 'app/moisture-chart/moisture-chart.component.html',
                        styleUrls: ['app/moisture-chart/moisture-chart.component.css'],
                        directives: [tabs_1.MD_TABS_DIRECTIVES, button_1.MD_BUTTON_DIRECTIVES, icon_1.MD_ICON_DIRECTIVES]
                    }), 
                    __metadata('design:paramtypes', [])
                ], MoistureChartComponent);
                return MoistureChartComponent;
            }());
            exports_1("MoistureChartComponent", MoistureChartComponent);
        }
    }
});
//# sourceMappingURL=/app/moisture-chart/moisture-chart.component.js.map