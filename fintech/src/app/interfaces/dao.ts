import { Observable } from "rxjs";

export interface Dao<T> {

    // Méthode permettant de récupérer toutes les occurences d'une table. On en ressort un tableau d'observables
    getAll() : Observable<T[]>;

    // Permet de récupérer les occurences d'une table ayant un id donné. Selon la conception de la tableon peut en ressortir un tableau ou une unique occurence
    getById(id: number) : Observable<T> | Observable<T[]>;

}