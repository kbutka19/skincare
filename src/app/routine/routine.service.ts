import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Observable } from "rxjs";
import { map } from "rxjs/operators";

@Injectable()
export class RoutineService {
    constructor(private http: HttpClient) { }

    saveRoutine(request): Observable<any> {
        return this.http.post('https://ng-skincare-6e924-default-rtdb.firebaseio.com/routine.json',
            request
        );
    }

    deleteRoutine(){
        return this.http.delete('https://ng-skincare-6e924-default-rtdb.firebaseio.com/routine.json'
    );
    }


    getRoutine(): Observable<any> {
        return this.http.get('https://ng-skincare-6e924-default-rtdb.firebaseio.com/routine.json').pipe(
            map(r => r)
        );
    }
}
