import { RouterModule, Routes } from '@angular/router';

export const routes: Routes = [
    { path: '', redirectTo: 'home', pathMatch: 'full' },
    { path: 'almundotest', loadChildren: './hotel/hotel.module#HotelModule'}
];

export const AppRoutes = RouterModule.forRoot(routes);
