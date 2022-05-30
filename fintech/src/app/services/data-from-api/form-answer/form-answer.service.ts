import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Dao } from 'src/app/interfaces/dao';
import { IAnswerForm } from 'src/app/interfaces/object-from-api/answer-form';

@Injectable({
  providedIn: 'root'
})
export class FormAnswerService implements Dao<IAnswerForm> {

  private urlBase: string = "http://127.0.0.1/dashboard/Fintech/api/form-answer.php/";

  constructor(private httpClient : HttpClient) {}

  // Méthode permettant de récupérer un ensemble de réponses données aux différentes questions pour tous les formulaires
  getAll() : Observable<IAnswerForm[]> {
    return this.httpClient
      .get<IAnswerForm[]>(this.urlBase);
  }

  // Méthode permettant de récupérer un ensemble de réponses données aux différentes questions pour un formulaire donné formulaires
  getById(idForm: number) : Observable<IAnswerForm[]> {
    return this.httpClient
      .get<IAnswerForm[]>(this.urlBase + `${idForm}`);
  }

  // Méthode permettant de récupérer une réponse pour une question et un formulaire donné
  getAnswerFormByIdFormIdQuestion(idForm: number, idQuestion: number) : Observable<IAnswerForm> {
    return this.httpClient
      .get<IAnswerForm>(this.urlBase + `${idForm}` + '/' + `${idQuestion}`);
  }
}
