import { Injectable } from "@angular/core";
import { Adapter } from "src/app/interfaces/adapter";
import { ICategory } from "src/app/interfaces/object-from-api/category";
import { Category } from "src/model/category";

@Injectable({
  providedIn: "root",
})

export class CategoryAdapter implements Adapter<Category> {

    constructor() {}

    adapt(category: ICategory): Category {
        return new Category({
            id: category.idCategorie,
            label: category.labelCategorie
        });
    }

}