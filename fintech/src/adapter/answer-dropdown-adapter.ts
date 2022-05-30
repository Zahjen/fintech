import { Injectable } from "@angular/core";
import { Adapter } from "src/app/interfaces/adapter";
import { IObtainedPoint } from "src/app/interfaces/object-from-api/obtained-point";
import { AnswerDropdown } from "src/model/answer-dropdown";

@Injectable({
  providedIn: "root",
})

export class AnswerDropdownAdapter implements Adapter<AnswerDropdown> {

    constructor() {}

    adapt(obtainedPoint: IObtainedPoint, dropdownLabel: string, idDropdown: number): AnswerDropdown {
        return new AnswerDropdown({
            id: obtainedPoint.idReponse,
            key: "answer" + idDropdown,
            value: dropdownLabel,
            point: obtainedPoint.pointQuestion,
        }, idDropdown);
    }

}