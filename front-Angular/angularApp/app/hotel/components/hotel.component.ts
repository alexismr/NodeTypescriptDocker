import { Component , OnInit } from '@angular/core';
import { HotelService } from '../../core/services/hotels.service';


@Component({
    selector: 'app-hotel-component',
    templateUrl: './hotel.component.html'
})

export class HotelComponent implements  OnInit {
    dataHospital: any;
    listStart: number [] = [5,4,3,2,1];

     filterStar: number;
     filterName:string;

    constructor(private _HotelService: HotelService) {  
        this.filterStar = 0;
        this.filterName = '';
    }

    ngOnInit() {
      this._HotelService.getAll()
      .subscribe((resp:any) =>{
          this.dataHospital = resp.response;
      });
    }

    starFilter(star:any){
             this.filterStar = star;
             this._HotelService.getFilters(this.filterStar ,this.filterName )
              .subscribe((resp:any) =>{
                this.dataHospital = resp.response;
              });
     }

    nameFilter() {
        this._HotelService.getFilters(this.filterStar ,this.filterName )
        .subscribe((resp:any) =>{
          this.dataHospital = resp.response;
        });
    }

     
       

}
