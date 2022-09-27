import { Injectable } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { QuizModel } from '../models/quiz.model';


@Injectable()
export class QuestionControlService {
  constructor() { }

  toFormGroup(questions: QuizModel<string>[] ) {
    const group: any = {};

    questions.forEach(question => {
      group[question.key] = question.required ? new FormControl(question.value || '', Validators.required)
                                              : new FormControl(question.value || '');
    });
    return new FormGroup(group);
  }
}
