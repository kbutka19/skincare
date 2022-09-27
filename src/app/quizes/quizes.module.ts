import { NgModule } from '@angular/core';

import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { DataNotImplementedDirective } from '../shared/directive/dataNotImplemented.directive';
import { HoverCardDirective } from '../shared/directive/hoverCard.directive';
import { ConvertCurrencyPipe } from '../shared/pipe/price.pipe';
import { SortByPipe } from '../shared/pipe/sortBy.pipe';
import { TruncatePipe } from '../shared/pipe/truncate.pipe';
import { SharedModule } from '../shared/shared.module';
import { DynamicFormQuestionComponent } from './components/dynamic-form-question/dynamic-form-question.component';
import { DynamicFormComponent } from './components/dynamic-form/dynamic-form.component';
import { FragranceQuizComponent } from './components/fragrance-quiz/fragrance-quiz.component';
import { HairQuizComponent } from './components/hair-quiz/hair-quiz.component';
import { QuizesComponent } from './components/quizes.component';
import { ResultsComponent } from './components/results/results.component';
import { SkincareQuizComponent } from './components/skincare-quiz/skincare-quiz.component';
import { QuizesRoutingModule } from './quizes-routing.module';
import { QuestionControlService } from './services/question-control.service';
import { QuizesService } from './services/quizes.service';
import { MatDialog } from '@angular/material';

@NgModule({
  declarations: [
    QuizesComponent,
    DynamicFormQuestionComponent,
    SkincareQuizComponent,
    DynamicFormComponent,
    HairQuizComponent,
    FragranceQuizComponent,
    ResultsComponent
    
  ],
  imports: [
    FormsModule,
    CommonModule,
    ReactiveFormsModule,
    SharedModule,
    QuizesRoutingModule
  ],
  providers: [QuizesService, QuestionControlService]

})
export class QuizesModule { }
