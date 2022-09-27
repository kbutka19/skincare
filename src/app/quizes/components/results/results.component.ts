import { Component, Input, OnDestroy, OnInit } from '@angular/core';
import { catchError, tap } from 'rxjs/operators';
import { QuizesService } from '../../services/quizes.service';

@Component({
  selector: 'app-results',
  templateUrl: './results.component.html',
  styleUrls: ['./results.component.css']
})
export class ResultsComponent implements OnInit, OnDestroy {
  quizResults: Array<any>;
  constructor(private quizesService: QuizesService) { }

  @Input() currency: string;
  @Input() column: string;
  @Input() order: string;

  ngOnInit() {
    this.quizesService.getResults().pipe(
      tap((result: Array<any>) => this.quizResults = result),
      catchError(err => err))
      .subscribe();
  }

  ngOnDestroy() {

  }

}
