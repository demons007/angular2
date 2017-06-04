import { Component, Input, OnInit } from '@angular/core';
import { Injectable } from '@angular/core';

import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/catch';
import 'rxjs/add/operator/map';
import { JesusService } from './jesus.service';
import { ByBody } from './makeBody';

@Component({
  selector: 'jesus',
  providers: [JesusService],
  template: `<button (click)="postJesus($event)">Try Post</button>
  		<table [hidden]="!dis">
  			<tr><td>Id</td><td>Name</td><td>City</td><td>Gender</td></tr>
  			<tr *ngFor="let item of items | async"><td>{{item.Id}}</td><td>{{item.Name}}</td><td>{{item.City}}</td><td>{{item.Gender}}</td></tr>
  		</table>
  `,
  styles:['h1{font-weight: normal;}','table{width:100%;border:1px dashed black;border-collapse:separate;border-spacing:5em;}','tr{border:1px solid black;}']
})

@Injectable()
export class JesusComponent implements OnInit  { name = 'Jesus';

@Input() mappr: string[];
@Input() items: Observable<string[]>;
dis:boolean =false;
term: string="angular";
 constructor (private jService: JesusService) { }
 ngOnInit(){
 	//this.items = this.jService.doAjaxServe();
 }
 postJesus(evt:any){
 	this.items = this.jService.doAjaxServe();
 	
 	this.dis=true;
 }

 }
