import { Injectable } from '@angular/core';

import { HttpClient } from '@angular/common/http';
import { Subject } from 'rxjs/Subject';


@Injectable()
export class QuizesService {
  constructor(private http: HttpClient) { }

  getSkinQuestions() {
    return this.http
      .get(
        'https://ng-skincare-6e924-default-rtdb.firebaseio.com/skincare.json'
      );
  }

  getHairQuestions() {
    return this.http
      .get(
        'https://ng-skincare-6e924-default-rtdb.firebaseio.com/hair.json'
      );

  }


  getFragranceQuestions() {
    return this.http
      .get(
        'https://ng-skincare-6e924-default-rtdb.firebaseio.com/fragrance.json'
      );

  }

  getResults(){
    return this.http
    .get(
      'https://ng-skincare-6e924-default-rtdb.firebaseio.com/results.json'
    );
  }
}
