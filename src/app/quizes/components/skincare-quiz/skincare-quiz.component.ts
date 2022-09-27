import { Component, OnInit } from '@angular/core';
import { FormGroup } from '@angular/forms';
import { catchError, finalize, tap } from 'rxjs/operators';
import { QuizesService } from '../../services/quizes.service';

@Component({
  selector: 'app-skincare-quiz',
  templateUrl: './skincare-quiz.component.html',
  styleUrls: ['./skincare-quiz.component.css']
})
export class SkincareQuizComponent implements OnInit {
  questions$;
  form: FormGroup;
  isLoading: boolean;
  isSubmmited: boolean;
  currencyForm: string;
  sortBy: string;
  column = [];
  constructor(
    private quizesService: QuizesService,
  ) { }

  ngOnInit() {
    this.currencyForm = 'EUR';
    this.isLoading = true;
    this.questions$ = this.quizesService.getSkinQuestions().pipe(
      tap(q => console.log(q)),
      finalize(() => {
        this.isLoading = false;
      }),
      catchError((err) => err)
    );
  }

  onSubmitClicked() {
    this.isSubmmited = true;
  }

  changeSort() {
    this.column = this.sortBy.split('-');
  }
}
