import { Injectable } from '@angular/core';
import { map, Observable } from 'rxjs';
import { CategoryAdapter } from 'src/adapter/category-adapter';
import { ICategory } from 'src/app/interfaces/object-from-api/category';
import { Category } from 'src/model/category';
import { CategoryService } from '../../data-from-api/category/category.service';

@Injectable({
  providedIn: 'root'
})
export class CategoryAdaptedService {

  constructor(
    private categoryService: CategoryService,
    private categoryAdapter: CategoryAdapter
  ) {}

  // Méthode permettant de récupérer et d'adapter toutes les catégories de la BdD
  getAll() : Observable<Category[]> {
    return this.categoryService
      .getAll()
      .pipe(
        map((categories: ICategory[]) => {
          return categories.map((category: ICategory) => {
            return this.categoryAdapter.adapt(category);
          })
        })
      )
  }

  // Méthode permettant de récupérer et d'adapter une catégorie grace à son id
  getById(idClient: number) : Observable<Category> {
    return this.categoryService
      .getById(idClient)
      .pipe(
        map((category: ICategory) => {
          return this.categoryAdapter.adapt(category);
        })
      )
  }
  
}
