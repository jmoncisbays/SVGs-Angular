import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { SvgsComponent } from './SVGs/svgs/svgs.component';
import { EditsvgComponent } from './SVGs/editsvg/editsvg.component';
import { PageNotFoundComponent } from "./page-not-found/page-not-found.component";

const routes: Routes = [
    { path: '', redirectTo: '/svgs', pathMatch: 'full' },
    { path: 'svgs', component: SvgsComponent },
    { path: 'newsvg', component: EditsvgComponent },
    { path: 'editsvg/:svgId', component: EditsvgComponent },
    { path: 'notfound', component: PageNotFoundComponent },
    { path: '**', redirectTo: "notfound" }
];

@NgModule({
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule]
})
export class AppRoutingModule { }
