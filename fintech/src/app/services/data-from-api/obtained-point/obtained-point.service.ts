import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Dao } from 'src/app/interfaces/dao';
import { IObtainedPoint } from 'src/app/interfaces/object-from-api/obtained-point';

@Injectable({
  providedIn: 'root'
})
export class ObtainedPointService implements Dao<IObtainedPoint> {

  private urlBase: string = "http://127.0.0.1/dashboard/Fintech/api/obtained-point.php/";

  constructor(private httpClient : HttpClient) {}

  // Méthode permettant de récupérer un ensemble de points attribué à une question et réponse associées en consommant l'api REST
  getAll() : Observable<IObtainedPoint[]> {
    return this.httpClient
      .get<IObtainedPoint[]>(this.urlBase);
  }

  // Méthode permettant de récupérer l'ensemble des points que l'on peut attribuer à une question donnée 
  // Par exmple pour la question 2, on obtiendra quelque chose comme : 
  // [{"idQuestion":2,"idReponse":3,"pointQuestion":0},
  //  {"idQuestion":2,"idReponse":4,"pointQuestion":4},
  //  {"idQuestion":2,"idReponse":5,"pointQuestion":9},
  //  {"idQuestion":2,"idReponse":6,"pointQuestion":18}]
  getById(idQuestion: number) : Observable<IObtainedPoint[]> {
    return this.httpClient
      .get<IObtainedPoint[]>(this.urlBase + `${idQuestion}`);
  }

  // Méthode permettant de récupérer un nombre de point que l'on peut attribuer à une question et réponse données
  // Par exmple pour la question 2, réponse 5, on obtiendra quelque chose comme : 
  // {"idQuestion":2,"idReponse":5,"pointQuestion":9}
  getObtainedPointByIdQuestionAndAnswer(idQuestion: number, idAnswer: number) : Observable<IObtainedPoint> {
    return this.httpClient
      .get<IObtainedPoint>(this.urlBase + `${idQuestion}` + '/' + `${idAnswer}`);
  }
  
}
