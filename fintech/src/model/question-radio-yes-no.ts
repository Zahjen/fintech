import { Question } from "./question";

export class QuestionRadioYesNo extends Question<string> {

    override controlType: string = "radio";
    override type: string = "radio";

}