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
var AjayService = (function () {
    function AjayService(http) {
        this.http = http;
        this.myUrl = 'http://localhost:62148/Api/Values';
    }
    AjayService.prototype.doAjaxServe = function () {
        return this.http.get(this.myUrl)
            .map(this.extractData);
    };
    AjayService.prototype.extractData = function (res) {
        var body = res.json();
        return body || {};
    };
    AjayService.prototype.doDeleteAjax = function (Id) {
        var myxUrl = "http://localhost:62148/Api/Values/" + Id;
        return this.http.delete(myxUrl)
            .map(this.extractData);
    };
    AjayService.prototype.doPutAjax = function (Id) {
        var myxUrl = "http://localhost:62148/Api/Values/" + Id;
        var data = new http_1.URLSearchParams();
        data.append('Id', String(Id));
        data.append('Name', "random name hh");
        data.append('Gender', "male");
        data.append('City', "random city hh");
        data.append('DepartmentId', "");
        return this.http.put(myxUrl, data)
            .map(this.extractData);
    };
    return AjayService;
}());
AjayService = __decorate([
    core_1.Injectable(),
    __metadata("design:paramtypes", [http_2.Http])
], AjayService);
exports.AjayService = AjayService;
//# sourceMappingURL=ajay.service.js.map