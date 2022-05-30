export interface Adapter<T> {

    // ...args: any[] : Permet de passer un nombre n variables de paramètre dans une fonction. On impose ici Observable<any> car on va entrer les donnée récupérer via l'api. Le type de retour de ces méthodes sont Observable<any>.
    adapt(...args: any) : T;

}
