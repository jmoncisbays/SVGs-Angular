import { Injectable } from "@angular/core";
import { SVG } from "./svg.model"
import { Observable } from "rxjs/Observable";
import { WebAPIDataSource } from "./webapi.datasource";

@Injectable()
export class SVGRepository {

    constructor(private dataSource: WebAPIDataSource) { }

    getAll(): Observable<SVG[]> {
        return this.dataSource.getSVGs();
    }

    get(id: number): Observable<SVG> {
        return this.dataSource.getSVGById(id);
    }

    add(svg: SVG): Observable<string> {
        return this.dataSource.addSVG(svg);
    }

    update(svg: SVG): Observable<string> {
        return this.dataSource.updateSVG(svg);
    }

    remove(id: number): Observable<string> {
        return this.dataSource.deleteSVG(id);
    }
}