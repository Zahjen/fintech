import { IAnswerForm } from "../object-from-api/answer-form";
import { IForm } from "../object-from-api/form";
import { IThirdParty } from "../object-from-api/third-party";

export interface IFormToApi {

    thirdParty: IThirdParty,
    form: IForm,
    formAnswer: IAnswerForm[]

}