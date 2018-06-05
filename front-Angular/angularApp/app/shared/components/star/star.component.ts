import { Component , Input , OnInit } from '@angular/core';

@Component({
    selector: 'app-star',
    templateUrl: 'star.component.html'
})

export class StarComponent implements OnInit  {
    starlist:any;
     @Input()
     starTotal: number;
     numberslist: any;

     constructor(){
     this.starTotal = 0;
     }

     ngOnInit()
     {
        this.numberslist = Array(this.starTotal).fill(0);
     }
 }
