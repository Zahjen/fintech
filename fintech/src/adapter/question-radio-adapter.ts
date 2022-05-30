import { Injectable } from "@angular/core";
import { Observable } from "rxjs";
import { Adapter } from "src/app/interfaces/adapter";
import { Answer } from "src/model/answer";
import { QuestionRadio } from "src/model/question-radio";

@Injectable({
  providedIn: "root",
})

export class QuestionRadioAdapter implements Adapter<QuestionRadio> {

    constructor() {}

    adapt(question: any, answer: Observable<Answer[]>): QuestionRadio {
        return new QuestionRadio({
            id: question.idQuestion,
            key: "question" + question.idQuestion,
            label: question.labelQuestion,
            type: question.type,
            idCategory: question.idCategorie,
            answers: answer
        });
    }

}