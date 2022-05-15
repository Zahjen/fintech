import { Question } from "./question";

export class QuestionRadioLevel extends Question<string> {

    override controlType: string = 'radio';
    override type: string = "radio";

    override answers: {key: string, value: string}[] = [
        {
            key: "low",  
            value: "Low"
        },
        {
            key: "medium",  
            value: "Medium"
        },
        {
            key: "high",  
            value: "High"
        },
        {
            key: "critical",  
            value: "Critical"
        }
    ];   
}