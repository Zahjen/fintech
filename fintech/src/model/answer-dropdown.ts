import { Answer } from "./answer";

// Notons que le T correspond a un type de données. Par exemple il peut s'agir d'un string, d'un int, d'un boolean, etc

// !: -> signifie qu'il y a obligation de définition
// ?: -> signifie qu'il y a possibilité d'undefined
export class AnswerDropdown extends Answer {
    // Pas d'inspiration pour le nom de l'attribut, mais supposons que l'on souhaite une liste déroulante de pays, on a stocké dans la BdD les pays dans une table avec un idPays et un labelPays, ici idDropdown = idPays
    //idDropdown: number;
  
    constructor(
        options: {
            id?: number, 
            key?: string, 
            value?: string, 
            point?: number,
        } = {},
        idDropdown?: number
    ) {
        super(options);
        this.idDropdown = idDropdown === undefined ? 0 : idDropdown;
    }
    
}