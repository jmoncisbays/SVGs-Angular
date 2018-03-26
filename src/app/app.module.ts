import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from "@angular/forms";
import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';
import { HttpClientModule } from '@angular/common/http';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { RouterModule, Routes } from "@angular/router";
import { ModelModule } from "./model/model.module";
import { MatFormFieldModule, MatInputModule, MatSnackBarModule } from '@angular/material';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import { SvgsComponent } from './SVGs/svgs/svgs.component';
import { EditsvgComponent } from './SVGs/editsvg/editsvg.component';

@NgModule({
    declarations: [
        AppComponent, PageNotFoundComponent, SvgsComponent, EditsvgComponent
    ],
    imports: [
        BrowserModule,
        FormsModule,
        AppRoutingModule,
        HttpClientModule,
        BrowserAnimationsModule,
        ModelModule,
        MatFormFieldModule,
        MatInputModule,
        MatSnackBarModule,
        RouterModule
    ],
    providers: [],
    bootstrap: [AppComponent]
})
export class AppModule { }
