import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HotelRoutes } from './hotel.routes';
import { HotelComponent } from './components/hotel.component';
import { SharedModule } from '../shared/shared.module';

@NgModule({
    imports: [
        CommonModule,
        HotelRoutes,
        FormsModule,
        SharedModule     
    ],

    declarations: [
        HotelComponent
    ],

})

export class HotelModule { }
