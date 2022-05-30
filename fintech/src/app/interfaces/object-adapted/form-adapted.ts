import { IBuisnessLine } from "../object-from-api/buisness-line";
import { ICountry } from "../object-from-api/country";
import { IThirdParty } from "../object-from-api/third-party";

export interface IAdaptedForm {
    
    idForm: number,
    idClient: number,
    thirdParty: IThirdParty,
    buisnessLine: IBuisnessLine,
    country: ICountry,
    totalPoints: number

}