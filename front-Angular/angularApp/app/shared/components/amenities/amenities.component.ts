import { Component , Input , OnInit } from '@angular/core';

@Component({
    selector: 'app-aminities',
    templateUrl: './amenities.component.html'
})

export class AmenitiesFooterComponent implements OnInit {
 @Input()
 listAmenities: any;
 listData:any;

    ngOnInit(){
        this.listData = this.listAmenities;
    }
}
