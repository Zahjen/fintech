import { IAnswer } from "../object-from-api/answer";
import { ICategory } from "../object-from-api/category";
import { IObtainedPoint } from "../object-from-api/obtained-point";
import { IQuestion } from "../object-from-api/question";

export interface IAdaptedFormDetail {
    
    idForm: number,
    question: IQuestion,
    chosenAnswer: IAnswer,
    category: ICategory,
    obtainedPoint: IObtainedPoint

}