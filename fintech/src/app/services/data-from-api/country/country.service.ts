import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Dao } from 'src/app/interfaces/dao';
import { ICountry } from 'src/app/interfaces/object-from-api/country';

@Injectable({
  providedIn: 'root'
})
export class CountryService implements Dao<ICountry> {

  private urlBase: string = "http://127.0.0.1/dashboard/Fintech/api/country.php/";

  constructor(private httpClient : HttpClient) {}

  // Méthode permettant de récuperer un ensemble de pays en consommant l'api REST
  getAll() : Observable<ICountry[]> {
    return this.httpClient
      .get<ICountry[]>(this.urlBase);
  }

  // Méthode permettant de récuperer un pays grâce à son id en consommant l'api REST
  getById(id: number) : Observable<ICountry> {
    return this.httpClient
      .get<ICountry>(this.urlBase + `${id}`);
  }
  
}
