import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Dao } from 'src/app/interfaces/dao';
import { IThirdParty } from 'src/app/interfaces/object-from-api/third-party';

@Injectable({
  providedIn: 'root'
})
export class ThirdPartyService implements Dao<IThirdParty> {

    private urlBase: string = "http://127.0.0.1/dashboard/Fintech/api/third-party.php/";

    constructor(private httpClient : HttpClient) {}

    // Méthode permettant de récupérer un ensemble de prestataires en consommant l'api REST
    getAll() : Observable<IThirdParty[]> {
        return this.httpClient
            .get<IThirdParty[]>(this.urlBase);
    }

    // Méthode permettant de récupérer un prestataire grace à son id en consommant l'api REST
    getById(id: number) : Observable<IThirdParty> {
        return this.httpClient
            .get<IThirdParty>(this.urlBase + `${id}`);
    }  

}
