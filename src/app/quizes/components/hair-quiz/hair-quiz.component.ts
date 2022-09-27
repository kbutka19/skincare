import { Component, OnInit } from '@angular/core';
import { catchError, finalize, tap } from 'rxjs/operators';
import { QuizesService } from '../../services/quizes.service';

@Component({
  selector: 'app-hair-quiz',
  templateUrl: './hair-quiz.component.html',
  styleUrls: ['./hair-quiz.component.css']
})
export class HairQuizComponent implements OnInit {
  isLoading: boolean;
  questions$: any;

  constructor(private quizesService: QuizesService) { }

  ngOnInit() {
    this.isLoading = true;
    this.questions$ = this.quizesService.getHairQuestions().pipe(
      tap(q => console.log(q)),
      finalize(() => {
        this.isLoading = false;
      }),
      catchError((err) => err)
    );
  }

}


