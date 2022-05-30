import { Injectable } from "@angular/core";
import { Adapter } from "src/app/interfaces/adapter";
import { Form } from "src/model/form";

@Injectable({
  providedIn: "root",
})

export class FormAdapter implements Adapter<Form> {

    constructor() {}

    adapt(form: any, labelThirdParty: string): Form {
        return new Form({
            id: form.idform,
            idClient: form.idClient,
            idThirdParty: form.idPrestataire,
            labelThirdParty: labelThirdParty,
            idBuisnessLine: form.idSecteur,
            totalPoint: form.totalPoints
        });
    }

}