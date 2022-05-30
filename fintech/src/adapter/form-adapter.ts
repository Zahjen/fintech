import { Injectable } from "@angular/core";
import { Adapter } from "src/app/interfaces/adapter";
import { IAdaptedForm } from "src/app/interfaces/object-adapted/form-adapted";
import { Form } from "src/model/form";

@Injectable({
  providedIn: "root",
})

export class FormAdapter implements Adapter<Form> {

    constructor() {}

    adapt(form: IAdaptedForm): Form {
        return new Form({
            id: form.idForm,
            idClient: form.idClient,
            idThirdParty: form.thirdParty.idPrestataire,
            labelThirdParty: form.thirdParty.nomPrestataire,
            idBuisnessLine: form.buisnessLine.idSecteur,
            labelBuisnessLine: form.buisnessLine.labelSecteur,
            idCountry: form.country.idPays,
            labelCountry: form.country.nomPays,
            totalPoint: form.totalPoints
        });
    }

}