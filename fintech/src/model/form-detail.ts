import { IObtainedPoint } from "src/app/interfaces/object-from-api/obtained-point";

export class FormDetail {
    idForm: number;
    idQuestion: number;
    labelQuestion: string;
    type: string;
    idCategory: number;
    labelCategory: string;
    idChosenAnswer: number;
    labelChosenAnswer: string;
    obtainedPoint: number;
    pointMax: IObtainedPoint[];
  
    constructor(options: {
        idForm?: number;
        idQuestion?: number;
        labelQuestion?: string;
        type?: string;
        idCategory?: number;
        labelCategory?: string;
        idChosenAnswer?: number;
        labelChosenAnswer?: string;
        obtainedPoint?: number;
        pointMax?: IObtainedPoint[];
    } = {}) {
        this.idForm = options.idForm === undefined ? -1 : options.idForm;
        this.idQuestion = options.idQuestion === undefined ? -1 : options.idQuestion;
        this.labelQuestion = options.labelQuestion || '';
        this.type = options.type || '';
        this.idCategory = options.idCategory === undefined ? -1 : options.idCategory;
        this.labelCategory = options.labelCategory || '';
        this.idChosenAnswer = options.idChosenAnswer === undefined ? -1 : options.idChosenAnswer;
        this.labelChosenAnswer = options.labelChosenAnswer || '';
        this.obtainedPoint = options.obtainedPoint === undefined ? 0 : options.obtainedPoint;
        this.pointMax = options.pointMax || [];
    }
}