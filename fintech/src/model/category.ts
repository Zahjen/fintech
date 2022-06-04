export class Category {
    id: number;
    label: string;
    point: number;
    pointMax: number;
    nbQuestion: number;
  
    constructor(options: {
        id?: number,
        label?: string,
        point?: number,
        pointMax?: number,
        nbQuestion?: number,
    } = {}) {
        this.id = options.id === undefined ? -1 : options.id;
        this.label = options.label || '';
        this.point = options.point === undefined ? 0 : options.point;
        this.pointMax = options.pointMax === undefined ? 0 : options.pointMax;
        this.nbQuestion = options.nbQuestion === undefined ? 0 : options.nbQuestion;
    }
}