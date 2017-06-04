import { Injectable } from '@angular/core';
import { Jsonp, URLSearchParams } from '@angular/http';
import { Http,Response } from '@angular/http';
import 'rxjs/add/operator/map';

@Injectable()
export class JesusService {
	constructor (private http: Http) {}
	myUrl='http://localhost:62148/Api/Values';
   
  doAjaxServe() {

    let data = new URLSearchParams();
  data.append('Id', '782');
  data.append('Name', "ajay");
  data.append('Gender', "male");
  data.append('City', "kolkata");
  data.append('DepartmentId', "");

  return this.http
    .post(this.myUrl, data)
      .map(this.extractData);

  }




  private extractData(res: Response) {
    let body = res.json();
    console.log(body);
    return body || { };
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