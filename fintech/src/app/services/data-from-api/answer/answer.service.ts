import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Dao } from 'src/app/interfaces/dao';
import { IAdaptedAnswer } from 'src/app/interfaces/object-adapted/answer-adapted';
import { IAnswer } from 'src/app/interfaces/object-from-api/answer';

@Injectable({
  providedIn: 'root'
})
export class AnswerService implements Dao<IAnswer> {

  private urlBase: string = "http://127.0.0.1/dashboard/Fintech/api/answer.php/";

  constructor(private httpClient : HttpClient) {}

  // Méthode permettant de récupérer un ensemble de réponses en consommant l'api REST
  getAll() : Observable<IAnswer[]> {
    return this.httpClient
      .get<IAnswer[]>(this.urlBase);
  }

  // Méthode permettant de récupérer une réponse grâce à son id en consommant l'api REST
  getById(id: number) : Observable<IAnswer> {
    return this.httpClient
      .get<IAnswer>(this.urlBase + `${id}`);
  }
  
  // Méthode permettant de récupérer un ensemble de réponses adaptés, i.e. que ce soit du radio ou du dropdown, avec les point obtenu ainsi que les labels correpondants au dropdowns
  getAdaptedAnswers() : Observable<IAdaptedAnswer[]> {
    return this.httpClient
      .get<IAdaptedAnswer[]>(this.urlBase + `adapt`);
  }
}
