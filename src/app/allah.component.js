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
var core_2 = require("@angular/core");
var Observable_1 = require("rxjs/Observable");
require("rxjs/add/operator/catch");
require("rxjs/add/operator/map");
var ajay_service_1 = require("./ajay.service");
var AllahComponent = (function () {
    function AllahComponent(ajayService) {
        this.ajayService = ajayService;
        this.name = 'Mahadeva + Vishnu + Bramha + Jesus + Allah +Buddha';
        this.term = "angular";
    }
    AllahComponent.prototype.ngOnInit = function () {
        this.items = this.ajayService.doAjaxServe();
    };
    AllahComponent.prototype.editHandler = function (evt) {
        //console.log(ok.value)
        console.log(evt.currentTarget.parentElement.lastChild.value);
        this.items = this.ajayService.doPutAjax(evt.currentTarget.parentElement.lastChild.value);
        //this.items = this.ajayService.doPutAjax(ok.value);
    };
    AllahComponent.prototype.delHandler = function (evt) {
        console.log(evt.currentTarget.parentElement.lastChild.value);
        this.items = this.ajayService.doDeleteAjax(evt.currentTarget.parentElement.lastChild.value);
        //this.items = this.ajayService.doPutAjax(ok.value);
    };
    return AllahComponent;
}());
__decorate([
    core_1.Input(),
    __metadata("design:type", Array)
], AllahComponent.prototype, "mapper", void 0);
__decorate([
    core_1.Input(),
    __metadata("design:type", Observable_1.Observable)
], AllahComponent.prototype, "items", void 0);
AllahComponent = __decorate([
    core_1.Component({
        selector: 'al',
        providers: [ajay_service_1.AjayService],
        template: "<h1>Hello {{name}}</h1>\n  \t\t<table>\n  \t\t\t<tr><td>Id</td><td>Name</td><td>City</td><td>Gender</td><td></td></tr>\n  \t\t\t<tr *ngFor=\"let item of items | async\"><td>{{item.Id}}</td><td>{{item.Name}}</td><td>{{item.City}}</td><td>{{item.Gender}}</td><td><button (click)=\"editHandler($event)\">Edit</button><button (click)=\"delHandler($event)\">Delete</button><input [hidden]=\"true\" [value]=\"item.Id\" /></td></tr>\n  \t\t</table>\n  ",
        styles: ['h1{font-weight: normal;}', 'table{width:100%;border:1px dashed black;border-collapse:separate;border-spacing:5em;}', 'tr{border:1px solid black;}']
    }),
    core_2.Injectable(),
    __metadata("design:paramtypes", [ajay_service_1.AjayService])
], AllahComponent);
exports.AllahComponent = AllahComponent;
//# sourceMappingURL=allah.component.js.map