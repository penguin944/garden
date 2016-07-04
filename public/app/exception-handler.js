System.register(['@angular/core', './alerts.service'], function(exports_1, context_1) {
    "use strict";
    var __moduleName = context_1 && context_1.id;
    var __extends = (this && this.__extends) || function (d, b) {
        for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
    var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
        var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
        if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
        else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
        return c > 3 && r && Object.defineProperty(target, key, r), r;
    };
    var __metadata = (this && this.__metadata) || function (k, v) {
        if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
    };
    var __param = (this && this.__param) || function (paramIndex, decorator) {
        return function (target, key) { decorator(target, key, paramIndex); }
    };
    var core_1, alerts_service_1;
    var AppExceptionHandler;
    return {
        setters:[
            function (core_1_1) {
                core_1 = core_1_1;
            },
            function (alerts_service_1_1) {
                alerts_service_1 = alerts_service_1_1;
            }],
        execute: function() {
            AppExceptionHandler = (function (_super) {
                __extends(AppExceptionHandler, _super);
                function AppExceptionHandler(alertsService, injector) {
                    var _this = this;
                    _super.call(this, null, false);
                    this.alertsService = alertsService;
                    setTimeout(function () { return _this.applicationRef = injector.get(core_1.ApplicationRef); });
                }
                AppExceptionHandler.prototype.call = function (exception, stackTrace, reason) {
                    var extractedException = this.extractMessage(exception);
                    this.alertsService.triggerAlert(core_1.ExceptionHandler.exceptionToString(extractedException, stackTrace, reason));
                    if (this.applicationRef) {
                        this.applicationRef.tick();
                    }
                };
                AppExceptionHandler.prototype.extractMessage = function (exception) {
                    return exception instanceof core_1.WrappedException ? exception.wrapperMessage :
                        exception.toString();
                };
                AppExceptionHandler = __decorate([
                    __param(0, core_1.Inject(alerts_service_1.AlertsService)),
                    __param(1, core_1.Inject(core_1.Injector)), 
                    __metadata('design:paramtypes', [alerts_service_1.AlertsService, core_1.Injector])
                ], AppExceptionHandler);
                return AppExceptionHandler;
            }(core_1.ExceptionHandler));
            exports_1("AppExceptionHandler", AppExceptionHandler);
        }
    }
});
//# sourceMappingURL=exception-handler.js.map