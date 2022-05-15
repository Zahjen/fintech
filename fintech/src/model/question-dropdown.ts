import { Question } from "./question";

export class QuestionDropdown extends Question<string> {

    override controlType: string = 'dropdown';

}