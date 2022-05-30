import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Dao } from 'src/app/interfaces/dao';
import { IBuisnessLine } from 'src/app/interfaces/object-from-api/buisness-line';

@Injectable({
  providedIn: 'root'
})
export class BuisnessLineService implements Dao<IBuisnessLine> {

  private urlBase: string = "http://127.0.0.1/dashboard/Fintech/api/buisness-line.php/";

  constructor(private httpClient : HttpClient) {}

  // Méthode permettant de récuperer un ensemble de secteur d'activité en consommant l'api REST
  getAll() : Observable<IBuisnessLine[]> {
    return this.httpClient
      .get<IBuisnessLine[]>(this.urlBase);
  }

  // Méthode permettant de récuperer un secteur d'activité grâce à son id en consommant l'api REST
  getById(id: number) : Observable<IBuisnessLine> {
    return this.httpClient
      .get<IBuisnessLine>(this.urlBase + `${id}`);
  }
}
