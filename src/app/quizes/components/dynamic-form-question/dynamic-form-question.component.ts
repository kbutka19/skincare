import { Component, Input, OnInit } from '@angular/core';
import { FormGroup } from '@angular/forms';
import { QuizModel } from '../../models/quiz.model';

@Component({
  selector: 'app-question',
  templateUrl: './dynamic-form-question.component.html',
  styleUrls: ['./dynamic-form-question.component.css']
})
export class DynamicFormQuestionComponent implements OnInit {

  constructor() { }
  @Input() question: QuizModel<string>;
  @Input() form: FormGroup;
  get isValid() { return this.form.controls[this.question.key].valid; }


  ngOnInit() {
  }

}
