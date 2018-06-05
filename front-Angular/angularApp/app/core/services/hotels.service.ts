import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

import { Configuration } from './../../app.constants';
import { IOperation } from '../../interfaces/operation.interface';

@Injectable()
export class HotelService {

    private actionUrl: string;

    constructor(private http: HttpClient, configuration: Configuration) {
        this.actionUrl = configuration.Server + 'hotel';
    }

    getAll(): Observable<any[]> {
        return this.http.get<any[]>(this.actionUrl);
    }
    getFilters(start:number ,name?:string   ): Observable<IOperation[]> {
        return this.http.get<IOperation[]>(this.actionUrl + '/'+start +'/'+name);
    }

}
