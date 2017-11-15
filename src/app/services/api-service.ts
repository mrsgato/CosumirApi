import { Injectable } from '@angular/core';
import { Http, Response, Headers, RequestOptions } from '@angular/http';
import 'rxjs/add/operator/map';
import { Observable } from 'rxjs/Observable';
import { GLOBAL } from './global';


@Injectable()
export class ApiService{
    public url: string;

    constructor(
        public _http: Http
    ){
        this.url = GLOBAL.url;
    }

    getApi(){
        return this._http.get(this.url).map(res => res.json());
    }
}
