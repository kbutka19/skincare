import { QuizModel } from './quiz.model';

export class TextboxQuestion extends QuizModel<string> {
    controlType = 'textbox';
}
