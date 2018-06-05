import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HTTP_INTERCEPTORS } from '@angular/common/http';

import { AppComponent } from './app.component';
import { AppRoutes } from './app.routes';
import { CoreModule } from './core/core.module';
import { HomeModule } from './home/home.module';
import { SharedModule } from './shared/shared.module';
import { HotelInterceptor } from './core/services/interceptors/hotelInterceptor';

@NgModule({
    imports: [
        BrowserModule,
        AppRoutes,
        SharedModule,
        CoreModule.forRoot(),
        HomeModule
    ],

    declarations: [
        AppComponent
    ],
    providers: [
        HotelInterceptor,
        {
          provide: HTTP_INTERCEPTORS,
          useClass: HotelInterceptor,
          multi: true
        }
      ],
    bootstrap: [AppComponent],
})

export class AppModule { }
