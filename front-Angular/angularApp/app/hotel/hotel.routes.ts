import { RouterModule, Routes } from '@angular/router';

import { HotelComponent } from './components/hotel.component';

const routes: Routes = [
    { path: '', component: HotelComponent }
];

export const HotelRoutes = RouterModule.forChild(routes);
