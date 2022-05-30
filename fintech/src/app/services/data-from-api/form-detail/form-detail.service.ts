import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { IAdaptedFormDetail } from 'src/app/interfaces/object-adapted/form-detail-adapted';

@Injectable({
  providedIn: 'root'
})
export class FormDetailService {

  private urlBase: string = "http://127.0.0.1/dashboard/Fintech/api/form-detail.php/";

  constructor(private httpClient : HttpClient) {}

  // Méthode permettant de récupérer tous les détails de tous les formulaires pour tous les clients
  getAll() : Observable<IAdaptedFormDetail[]> {
    return this.httpClient
      .get<IAdaptedFormDetail[]>(this.urlBase);
  }

  // Méthode permettant de récupérer le détail d'un formulaire grace à l'id du formulaire
  getById(idForm: number) : Observable<IAdaptedFormDetail[]> {
    return this.httpClient
      .get<IAdaptedFormDetail[]>(this.urlBase + `${idForm}`);
  }

}
