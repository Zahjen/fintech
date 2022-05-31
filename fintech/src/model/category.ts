export class Category {
    id: number;
    label: string;
    point: number;
  
    constructor(options: {
        id?: number;
        label?: string;
        point?: number;
    } = {}) {
        this.id = options.id === undefined ? -1 : options.id;
        this.label = options.label || '';
        this.point = options.point === undefined ? 0 : options.point;
    }
}