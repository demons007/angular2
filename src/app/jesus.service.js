"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var core_1 = require("@angular/core");
var http_1 = require("@angular/http");
var http_2 = require("@angular/http");
require("rxjs/add/operator/map");
var JesusService = (function () {
    function JesusService(http) {
        this.http = http;
        this.myUrl = 'http://localhost:62148/Api/Values';
    }
    JesusService.prototype.doAjaxServe = function () {
        var data = new http_1.URLSearchParams();
        data.append('Id', '782');
        data.append('Name', "ajay");
        data.append('Gender', "male");
        data.append('City', "kolkata");
        data.append('DepartmentId', "");
        return this.http
            .post(this.myUrl, data)
            .map(this.extractData);
    };
    JesusService.prototype.extractData = function (res) {
        var body = res.json();
        console.log(body);
        return body || {};
    };
    return JesusService;
}());
JesusService = __decorate([
    core_1.Injectable(),
    __metadata("design:paramtypes", [http_2.Http])
], JesusService);
exports.JesusService = JesusService;
//# sourceMappingURL=jesus.service.js.map