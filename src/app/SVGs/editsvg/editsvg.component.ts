import { Component, OnInit } from '@angular/core';
import { HttpErrorResponse } from '@angular/common/http';
import { NgForm, Validators } from "@angular/forms"
import { SVG } from '../../model/svg.model';
import { SVGRepository } from '../../model/svg.repository';
import { MatSnackBar } from '@angular/material';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
    selector: 'app-editsvg',
    templateUrl: './editsvg.component.html',
    styleUrls: ['./editsvg.component.css']
})
export class EditsvgComponent implements OnInit {
    public svg: SVG = new SVG();
    public saving: boolean = false;

    constructor(private svgRepository: SVGRepository, private snackBar: MatSnackBar, private router: Router, private activatedRoute: ActivatedRoute) { }

    ngOnInit() {
        let svgId: number = +this.activatedRoute.snapshot.params["svgId"] || 0;
        if (svgId != 0) {
            this.svgRepository.get(svgId).subscribe(data => {
                this.svg = data;
            });
        }
    }

    fileOnChange(event) {
        if(event.target.files && event.target.files.length == 1) {
            let file = event.target.files[0];
            if(file.type != "image/svg+xml") {
                event.target.value = "";
                this.snackBar.open("The SVG file is not valid. Please select a .SVG file", "", {
                    duration: 3000
                });
                return;                    
            }
            let reader = new FileReader();
            reader.readAsText(file);
            reader.onload = () => {
                this.svg.specification = reader.result;
            }
        }
    }

    save(form: NgForm) {
        this.saving = true;

        // ? new SVG
        if (this.svg.id == undefined) {
            this.svgRepository.add(this.svg).subscribe(response => {
                this.saving = false;
                this.snackBar.open("The SVG has been saved", "", {
                    duration: 2000
                });
                form.resetForm();
            },
            (err: HttpErrorResponse) => {
                this.snackBar.open("The SVG could not be saved due an error: ${err.message}", "", {
                    duration: 2000
                });
                console.log(err.message);
            });
        }
        else {
            this.svgRepository.update(this.svg).subscribe(response => {
                this.saving = false;
                this.snackBar.open("The SVG has been saved", "", {
                    duration: 2000
                });
            },
            (err: HttpErrorResponse) => {
                this.snackBar.open("The SVG could not be saved due an error: ${err.message}", "", {
                    duration: 2000
                });
                console.log(err.message);
            });
        }
    }

    backOrCancel(form: NgForm) {
        form.resetForm();

        this.router.navigate(["svgs"]);
    }

}
