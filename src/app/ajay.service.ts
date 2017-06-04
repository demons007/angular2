import { Injectable } from '@angular/core';
import { Jsonp, URLSearchParams } from '@angular/http';
import { Http,Response } from '@angular/http';
import 'rxjs/add/operator/map';

@Injectable()
export class AjayService {
	constructor (private http: Http) {}
	myUrl='http://localhost:62148/Api/Values';
   
  doAjaxServe() {

    return this.http.get(this.myUrl)
                    .map(this.extractData);
  }
  private extractData(res: Response) {
    let body = res.json();
    return body || { };
  }
  doDeleteAjax(Id:number){
  	let myxUrl=`http://localhost:62148/Api/Values/${Id}`;
  	return this.http.delete(myxUrl)
                    .map(this.extractData);
  }
  doPutAjax(Id:number){
  	let myxUrl=`http://localhost:62148/Api/Values/${Id}`;
  	 let data = new URLSearchParams();
  data.append('Id', String(Id));
  data.append('Name', "random name hh");
  data.append('Gender', "male");
  data.append('City', "random city hh");
  data.append('DepartmentId', "");
  	return this.http.put(myxUrl,data)
                    .map(this.extractData);
  }

  /*constructor(private jsonp: Jsonp) {}
  doAjaxServe(term: string) {
    let wikiUrl = 'http://en.wikipedia.org/w/api.php';
    let params = new URLSearchParams();
    params.set('search', term); // the user's search value
    params.set('action', 'opensearch');
    params.set('format', 'json');
    params.set('callback', 'JSONP_CALLBACK');
    // TODO: Add error handling
    return this.jsonp
               .get(wikiUrl, { search: params })
               .map(response => <string[]> response.json()[1]);
  }*/
}