import { Injectable } from "@angular/core";
import { Adapter } from "src/app/interfaces/adapter";
import { ThirdParty } from "src/model/third-party";

@Injectable({
  providedIn: "root",
})
export class ThirdPartyAdapter implements Adapter<ThirdParty> {

    constructor() {}

    adapt(thirdParty: any): ThirdParty {
        return new ThirdParty({
            id: thirdParty.idPrestataire,
            label: thirdParty.nomPrestataire
        });
    }

}