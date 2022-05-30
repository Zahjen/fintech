// Notons que le T correspond a un type de données. Par exemple il peut s'agir d'un string, d'un int, d'un boolean, etc

// !: -> signifie qu'il y a obligation de définition
// ?: -> signifie qu'il y a possibilité d'undefined
export class Answer {
    idQuestion: number;
    idAnswer: number;
    key: string;
    value: string;
    point: number;
    idDropdown: number;
  
    constructor(options: {
        idQuestion?: number,
        idAnswer?: number, 
        key?: string, 
        value?: string, 
        point?: number,
        idDropdown?: number
    } = {}) {
        this.idQuestion = options.idQuestion === undefined ? -1 : options.idQuestion;
        this.idAnswer = options.idAnswer === undefined ? -1 : options.idAnswer;
        this.key = options.key || '';
        this.value = options.value || '';
        this.point = options.point === undefined ? 0 : options.point;
        this.idDropdown = options.idDropdown === undefined ? -1 : options.idDropdown;
    }
}