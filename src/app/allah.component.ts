import { Component, Input, OnInit } from '@angular/core';
import { Injectable } from '@angular/core';

import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/catch';
import 'rxjs/add/operator/map';
import { AjayService } from './ajay.service';


@Component({
  selector: 'al',
  providers: [AjayService],
  template: `<h1>Hello {{name}}</h1>
  		<table>
  			<tr><td>Id</td><td>Name</td><td>City</td><td>Gender</td><td></td></tr>
  			<tr *ngFor="let item of items | async"><td>{{item.Id}}</td><td>{{item.Name}}</td><td>{{item.City}}</td><td>{{item.Gender}}</td><td><button (click)="editHandler($event)">Edit</button><button (click)="delHandler($event)">Delete</button><input [hidden]="true" [value]="item.Id" /></td></tr>
  		</table>
  `,
  styles:['h1{font-weight: normal;}','table{width:100%;border:1px dashed black;border-collapse:separate;border-spacing:5em;}','tr{border:1px solid black;}']
})

@Injectable()
export class AllahComponent implements OnInit  { name = 'Mahadeva + Vishnu + Bramha + Jesus + Allah +Buddha';
@Input() mapper: string[];
@Input() items: Observable<string[]>;
term: string="angular";
 constructor (private ajayService: AjayService) { }
 ngOnInit(){
 	this.items = this.ajayService.doAjaxServe();
 }
 editHandler(evt:any){
 	//console.log(ok.value)
 	console.log(evt.currentTarget.parentElement.lastChild.value);
 	this.items = this.ajayService.doPutAjax(evt.currentTarget.parentElement.lastChild.value);
	//this.items = this.ajayService.doPutAjax(ok.value);
 }

 delHandler(evt:any){
 	console.log(evt.currentTarget.parentElement.lastChild.value);
 	this.items = this.ajayService.doDeleteAjax(evt.currentTarget.parentElement.lastChild.value);
	//this.items = this.ajayService.doPutAjax(ok.value);
 }

 }
