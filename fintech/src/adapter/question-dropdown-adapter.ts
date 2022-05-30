import { Injectable } from "@angular/core";
import { Observable } from "rxjs";
import { Adapter } from "src/app/interfaces/adapter";
import { Answer } from "src/model/answer";
import { QuestionDropdown } from "src/model/question-dropdown";

@Injectable({
  providedIn: "root",
})

export class QuestionDropdownAdapter implements Adapter<QuestionDropdown> {

    constructor() {}

    adapt(question: any, answer: Observable<Answer[]>): QuestionDropdown {
        return new QuestionDropdown({
            id: question.idQuestion,
            key: "question" + question.idQuestion,
            label: question.labelQuestion,
            type: question.type,
            idCategory: question.idCategorie,
            answers: answer
        });
    }

}