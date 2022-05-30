import { Question } from "./question";

export class QuestionRadio extends Question<string> {

  override controlType = 'radio';
  override type = 'radio'

}