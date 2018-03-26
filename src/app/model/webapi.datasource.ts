import { Injectable } from "@angular/core";
import { HttpClient, HttpParams, HttpHeaders } from '@angular/common/http';
import { SVG } from "./svg.model";
import { Observable } from "rxjs/Observable";
import { environment } from '../../environments/environment';
import "rxjs/add/observable/from";
import 'rxjs/add/operator/map';

const url = environment.webapiUrl;

@Injectable()
export class WebAPIDataSource {
    constructor(private httpClient: HttpClient) { }
    
    getSVGs(): Observable<SVG[]> {
        return this.httpClient.get<SVG[]>(`${url}/svgs`);
    }

    getSVGById(id: number): Observable<SVG> {
        return this.httpClient.get<SVG>(`${url}/svgs/${id}`);
    }

    addSVG(svg: SVG): Observable<string> {
        const headers = new HttpHeaders().set('Content-Type', 'application/json').set("crossDomain", "true");

        return this.httpClient.post(url + "/svgs", svg, { 
            headers: headers, 
            responseType: 'text' });
    }

    updateSVG(svg: SVG): Observable<string> {
        const headers = new HttpHeaders().set('Content-Type', 'application/json').set("crossDomain", "true");

        return this.httpClient.put(url + "/svgs", svg, { 
            headers: headers,
            responseType: 'text'
        });
    }

    deleteSVG(id: number): Observable<string> {
        const headers = new HttpHeaders().set('Content-Type', 'application/json').set("crossDomain", "true");
        
        return this.httpClient.delete(`${url}/svgs/${id}`, { headers: headers, responseType: 'text' });                
    }

}
