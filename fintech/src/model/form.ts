export class Form {
    id: number;
    idClient: number;
    idThirdParty: number;
    labelThirdParty: string;
    idBuisnessLine: number;
    totalPoint: number;
  
    constructor(options: {
        id?: number;
        idClient?: number;
        idThirdParty?: number;
        labelThirdParty?: string;
        idBuisnessLine?: number;
        totalPoint?: number;
    } = {}) {
        this.id = options.id === undefined ? 1 : options.id;
        this.idClient = options.idClient === undefined ? 1 : options.idClient;
        this.idThirdParty = options.idThirdParty === undefined ? 1 : options.idThirdParty;
        this.labelThirdParty = options.labelThirdParty || '';
        this.idBuisnessLine = options.idBuisnessLine === undefined ? 1 : options.idBuisnessLine;
        this.totalPoint = options.totalPoint === undefined ? 1 : options.totalPoint;
    }
}