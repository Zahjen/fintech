import { Injectable } from "@angular/core";
import { Adapter } from "src/app/interfaces/adapter";
import { IAdaptedFormDetail } from "src/app/interfaces/object-adapted/form-detail-adapted";
import { FormDetail } from "src/model/form-detail";
import { Utils } from "src/tools/utils";

@Injectable({
  providedIn: "root",
})

export class FormDetailAdapter implements Adapter<FormDetail> {

    utils = Utils.getInstance();

    constructor() {}

    adapt(formDetail: IAdaptedFormDetail): FormDetail {
        return new FormDetail({
            idForm: formDetail.idForm,
            idQuestion: formDetail.question.idQuestion,
            labelQuestion: formDetail.question.labelQuestion,
            type: formDetail.question.type,
            idCategory: formDetail.category.idCategorie,
            labelCategory: formDetail.category.labelCategorie,
            idChosenAnswer: formDetail.chosenAnswer.idReponse,
            labelChosenAnswer: formDetail.chosenAnswer.labelReponse,
            obtainedPoint: formDetail.obtainedPoint.pointQuestion,
            pointMax: formDetail.pointMax
        });
    }

}