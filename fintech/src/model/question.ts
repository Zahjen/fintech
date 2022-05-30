import { Observable } from "rxjs";
import { Answer } from "./answer";

// Notons que le T correspond a un type de données. Par exemple il peut s'agir d'un string, d'un int, d'un boolean, et

// !: -> signifie qu'il y a obligation de définition
// ?: -> signifie qu'il y a possibilité d'undefined
export class Question<T> {
    value: T | undefined;
    key: string;
    label: string;
    required: boolean;
    isHidden: boolean;
    id: number;
    controlType: string;
    type: string;
    answers: Observable<Answer[]>;
    answersLoaded: Answer[];
    obtainedPoints: number;
    idCategory: number;
  
    constructor(options: {
        value?: T, 
        key?: string, 
        label?: string, 
        required?: boolean, 
        isHidden?: boolean, 
        id?: number, 
        controlType?: string, 
        type?: string, 
        answers?: Observable<Answer[]>,
        answersLoaded?: Answer[],
        obtainedPoints?: number,
        idCategory?: number,
    } = {}) {
        this.value = options.value;
        this.key = options.key || '';
        this.label = options.label || '';
        this.required = options.required === undefined ? true : options.required;
        this.isHidden = options.isHidden === undefined ? true : options.isHidden;
        this.id = options.id === undefined ? 1 : options.id;
        this.controlType = options.controlType || '';
        this.type = options.type || '';
        this.answers = options.answers || new Observable<Answer[]>();
        this.answersLoaded = options.answersLoaded || [];
        this.obtainedPoints = options.obtainedPoints === undefined ? 0 : options.obtainedPoints;
        this.idCategory = options.idCategory === undefined ? 0 : options.idCategory;
    }
}