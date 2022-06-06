import { Injectable } from "@angular/core";
import { Adapter } from "src/app/interfaces/adapter";
import { IAnswerForm } from "src/app/interfaces/object-from-api/answer-form";
import { IForm } from "src/app/interfaces/object-from-api/form";
import { IFormToApi } from "src/app/interfaces/object-send-to-api/form";
import { Question } from "src/model/question";
import { ThirdParty } from "src/model/third-party";

@Injectable({
  providedIn: "root",
})

export class FormToApiAdapter implements Adapter<IFormToApi> {

    constructor() {}

    adapt(thirdParty: ThirdParty, form: IForm, questions: Question<any>[]): IFormToApi {

        let formAnswer : IAnswerForm[] = this.fillFormanswer(questions);

        return {
            thirdParty: {
                idPrestataire: thirdParty.id,
                nomPrestataire: thirdParty.label
            },
            form: {
                idFormulaire: -1,
                idClient: form.idClient,
                idPrestataire: -1,
                idSecteur: form.idSecteur,
                idPays: form.idPays,
                totalPoints: form.totalPoints
            },
            formAnswer: formAnswer
        };
    }

    private fillFormanswer(questions: Question<any>[]) : IAnswerForm[] {
        let formAnswer: IAnswerForm[] = [];

        questions.forEach((question: Question<any>) => {
            let idAnswer: number = -1;

            if (question.type === 'radio') {
                idAnswer = question.value.idAnswer;
            } else if (question.type === 'dropdown') {
                idAnswer = JSON.parse(question.value).idAnswer
            }

            formAnswer.push({
                idFormulaire: -1,
                idQuestion: question.id,
                idReponsePresta: idAnswer
            })
        })

        return formAnswer;
    }

}