import { Component, OnInit } from '@angular/core';
import { catchError, finalize, tap } from 'rxjs/operators';
import { QuizesService } from '../../services/quizes.service';

@Component({
  selector: 'app-fragrance-quiz',
  templateUrl: './fragrance-quiz.component.html',
  styleUrls: ['./fragrance-quiz.component.css']
})
export class FragranceQuizComponent implements OnInit {
  isLoading: boolean;
  questions$;
  constructor(private quizesService: QuizesService) { }

  ngOnInit() {
    this.isLoading = true;
    this.questions$ = this.quizesService.getFragranceQuestions().pipe(
      tap(q => console.log(q)),
      finalize(() => {
        this.isLoading = false;
      }),
      catchError((err) => err)
    );
  }
}


