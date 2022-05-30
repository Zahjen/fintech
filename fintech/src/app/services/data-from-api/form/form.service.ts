import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Dao } from 'src/app/interfaces/dao';
import { IAdaptedForm } from 'src/app/interfaces/object-adapted/form-adapted';
import { IForm } from 'src/app/interfaces/object-from-api/form';

@Injectable({
  providedIn: 'root'
})
export class FormService implements Dao<IForm> {

    private urlBase: string = "http://127.0.0.1/dashboard/Fintech/api/form.php/";

    constructor(private httpClient : HttpClient) {}

    // Méthode permettant de récupérer un ensemble de formulaire en consommant l'api REST
    getAll() : Observable<IForm[]> {
        return this.httpClient
            .get<IForm[]>(this.urlBase);
    }

    // Méthode permettant de récupérer un formulaire grâce à son id en consommant l'api REST
    getById(id: number) : Observable<IForm[]> {
        return this.httpClient
            .get<IForm[]>(this.urlBase + `${id}`);
    }  

    // Méthode permettant de récupérer un ensemble de formulaire adapté grâce à l'id du client en consommant l'api REST
    getFormByIdClient(idClient: number) : Observable<IAdaptedForm[]> {
        return this.httpClient
          .get<IAdaptedForm[]>(this.urlBase + `adapt` + '/' + `${idClient}`);
      }
}
