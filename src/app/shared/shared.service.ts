import { HttpClient, HttpHeaders } from "@angular/common/http";
import { EventEmitter, Injectable } from "@angular/core";
import { MatDialog } from "@angular/material";
import { BehaviorSubject, Observable } from "rxjs";
import { Subject } from 'rxjs/Subject';

@Injectable()
export class SharedService {
    constructor(private http: HttpClient, private dialog: MatDialog) { }

    getBrands(): Observable<any> {
        return this.http.get('https://ng-skincare-6e924-default-rtdb.firebaseio.com/brands.json');
    }


    getCurrency() {
        return this.http.get('https://ng-skincare-6e924-default-rtdb.firebaseio.com/currency.json');

    }

    getModal(event) {
        this.dialog.open(event, {
            height: '400px',
            width: '600px',
        });

    }
}
