import { NgModule } from "@angular/core";
import { WebAPIDataSource } from "./webapi.datasource";
import { SVGRepository } from "./svg.repository";

@NgModule({
    providers: [SVGRepository, WebAPIDataSource]
})
export class ModelModule { }