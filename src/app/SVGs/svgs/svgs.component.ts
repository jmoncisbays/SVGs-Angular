import { Component, OnInit } from '@angular/core';
import { SVG } from '../../model/svg.model';
import { SVGRepository } from '../../model/svg.repository';
import { MatSnackBar } from '@angular/material';
import { Router } from "@angular/router";

declare let jsPDF;

@Component({
    selector: 'app-svgs',
    templateUrl: './svgs.component.html',
    styleUrls: ['./svgs.component.css']
})
export class SvgsComponent implements OnInit {
    public svgs: SVG[] = [];

    constructor(private repository: SVGRepository, private snackBar: MatSnackBar, private router: Router) { }

    ngOnInit() {
        this.getSVGs();
    }

    getSVGs() {
        this.repository.getAll().subscribe(data => this.svgs = data);
    }

    downloadSVGs() {
        var doc = new jsPDF();
        doc.setFontSize(16);

        this.svgs.forEach((svg, index) => {
            doc.text(35, 25, svg.title);
            doc.addImage("data:image/png;base64," + svg.pngBase64, 'PNG', 15, 40, 180, 160);
            if (index < this.svgs.length - 1) {
                doc.addPage();
            }
        });
        doc.save('SVGs.pdf');
    }

    modifySVG(id: number) {
        this.router.navigate([`/editsvg/${id}`]);
    }

    removeSVG(id: number) {
        this.repository.remove(id).subscribe(data => {
            this.snackBar.open("The SVG has been deleted", "", {
                duration: 2000
            });
            this.getSVGs();
        });
    }

    newSVG() {
        this.router.navigate(["/newsvg"]);
    }
}
