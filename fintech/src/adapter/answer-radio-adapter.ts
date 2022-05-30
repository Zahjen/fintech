import { Injectable } from "@angular/core";
import { Adapter } from "src/app/interfaces/adapter";
import { AnswerRadio } from "src/model/answer-radio";

@Injectable({
  providedIn: "root",
})

export class AnswerRadioAdapter implements Adapter<AnswerRadio> {

    constructor() {}

    adapt(answer: any, obtainedPoint: any): AnswerRadio {
        return new AnswerRadio({
            id: answer.idReponse,
            key: "answer" + answer.idReponse,
            value: answer.labelReponse,
            point: obtainedPoint.pointQuestion
        });
    }

}