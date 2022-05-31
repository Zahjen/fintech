import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Dao } from 'src/app/interfaces/dao';
import { ICategory } from 'src/app/interfaces/object-from-api/category';

@Injectable({
  providedIn: 'root'
})
export class CategoryService implements Dao<ICategory> {

  private urlBase: string = "http://127.0.0.1/dashboard/Fintech/api/category.php/";

  constructor(private httpClient : HttpClient) {}

  // Méthode permettant de récuperer un ensemble de catégorie en consommant l'api REST
  getAll() : Observable<ICategory[]> {
    return this.httpClient
      .get<ICategory[]>(this.urlBase);
  }

  // Méthode permettant de récuperer un catégories grâce à son id en consommant l'api REST
  getById(id: number) : Observable<ICategory> {
    return this.httpClient
      .get<ICategory>(this.urlBase + `${id}`);
  }
  
}
