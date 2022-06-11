import { Question } from "./question";

export class QuestionPassword extends Question<string> {

    override controlType: string = 'string';
    override type: string = 'password'; 

}