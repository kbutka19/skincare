import { Component, EventEmitter, Input, OnChanges, Output } from '@angular/core';
import { FormGroup } from '@angular/forms';
import { MatDialog } from '@angular/material';
import { QuizModel } from '../../models/quiz.model';
import { QuestionControlService } from '../../services/question-control.service';

@Component({
  selector: 'app-dynamic-form',
  templateUrl: './dynamic-form.component.html',
  styleUrls: ['./dynamic-form.component.css']
})
export class DynamicFormComponent implements OnChanges {

  @Input() questions: QuizModel<string>[] | null = [];
  @Input() type: string;
  form: FormGroup = new FormGroup({});
  payLoad = '';
  @Output() isSubmmited = new EventEmitter<boolean>();
  constructor(private qcs: QuestionControlService, private dialog: MatDialog) { }

  ngOnChanges() {
    if (this.questions && this.questions.length) {
      this.form = this.qcs.toFormGroup(this.questions as QuizModel<string>[]);
    }
  }


  submit() {
    this.isSubmmited.emit(true);
  }

  notImplemented() {
    alert('Results not implemented');
  }
}
