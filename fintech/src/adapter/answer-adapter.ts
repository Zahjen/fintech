import { Injectable } from "@angular/core";
import { Adapter } from "src/app/interfaces/adapter";
import { IAdaptedAnswer } from "src/app/interfaces/object-adapted/answer-adapted";
import { Answer } from "src/model/answer";

@Injectable({
  providedIn: "root",
})

export class AnswerAdapter implements Adapter<Answer> {

    constructor() {}

    adapt(answer: IAdaptedAnswer): Answer {
        return new Answer({
            idQuestion: answer.idQuestion,
            idAnswer: answer.idAnswer,
            key: "answer" + (answer.idDropdown === undefined ? answer.idAnswer : answer.idDropdown),
            value: answer.labelAnswer,
            point: answer.obtainedPoint,
            idDropdown: answer.idDropdown,
        });
    }

}