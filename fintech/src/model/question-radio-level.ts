import { Question } from "./question";

export class QuestionRadioLevel extends Question<string> {

    override controlType: string = 'radio';
    override type: string = "radio";
}