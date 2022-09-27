import { QuizModel } from './quiz.model';

export class RadioButtonQuestion extends QuizModel<string> {
    controlType = 'radiobutton';
}
