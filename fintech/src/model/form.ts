export class Form {
    id: number;
    idClient: number;
    idThirdParty: number;
    labelThirdParty: string;
    idBuisnessLine: number;
    labelBuisnessLine: string;
    idCountry: number;
    labelCountry: string;
    totalPoint: number;
  
    constructor(options: {
        id?: number;
        idClient?: number;
        idThirdParty?: number;
        labelThirdParty?: string;
        idBuisnessLine?: number;
        labelBuisnessLine?: string;
        idCountry?: number;
        labelCountry?: string;
        totalPoint?: number;
    } = {}) {
        this.id = options.id === undefined ? -1 : options.id;
        this.idClient = options.idClient === undefined ? -1 : options.idClient;
        this.idThirdParty = options.idThirdParty === undefined ? -1 : options.idThirdParty;
        this.labelThirdParty = options.labelThirdParty || '';
        this.idBuisnessLine = options.idBuisnessLine === undefined ? -1 : options.idBuisnessLine;
        this.labelBuisnessLine = options.labelBuisnessLine || '';
        this.idCountry = options.idCountry === undefined ? -1 : options.idCountry;
        this.labelCountry = options.labelCountry || '';
        this.totalPoint = options.totalPoint === undefined ? -1 : options.totalPoint;
    }
}