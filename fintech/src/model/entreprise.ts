export class Entreprise {
    id: number;
    label: string;
  
    constructor(options: {
        id?: number;
        label?: string
    } = {}) {
        this.id = options.id === undefined ? 1 : options.id;
        this.label = options.label || '';
    }
  }