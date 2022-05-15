import { Question } from "./question";

export class QuestionText extends Question<string> {

    override controlType: string = 'text';
    override type: string = 'text'; 

}