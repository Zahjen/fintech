import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { map, Observable } from 'rxjs';
import { Dao } from 'src/app/interfaces/dao';
import { IQuestion } from 'src/app/interfaces/object-from-api/question';

@Injectable({
  providedIn: 'root'
})
export class QuestionService implements Dao<IQuestion> {

    private urlBase: string = "http://127.0.0.1/dashboard/Fintech/api/question.php/";

    constructor(private httpClient : HttpClient) {}

    // Méthode permettant de récupérer un ensemble de questions en consommant l'api REST
    getAll() : Observable<IQuestion[]> {
        return this.httpClient
            .get<IQuestion[]>(this.urlBase);
    }

    // Méthode permettant de récupérer une question grâce à son id en consommant l'api REST
    getById(id: number) : Observable<IQuestion> {
        return this.httpClient
            .get<IQuestion>(this.urlBase + `${id}`);
    }  

}
