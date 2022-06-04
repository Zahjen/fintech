import { Answer } from "src/model/answer";
import { Category } from "src/model/category";
import { Question } from "src/model/question";

export class Utils {

    // ----------------
    // Déclaration d'attribut
    // ----------------

    private static instance: Utils;

    // ----------------
    // Constructeur
    // ----------------

    private constructor() { }

    // ----------------
    // Récupération de l'instance de la classe Utils 
    // pour l'implémentation du design pattern Singleton
    // ----------------

    public static getInstance() : Utils {
        if (!Utils.instance) {
            Utils.instance = new Utils();
        }

        return Utils.instance;
    }

    // ----------------
    // Méthode
    // ----------------

    /**
     * Méthode permettant de calculer le nombre total de points obtenus via les questions du formulaire.
     * 
     * @param questions : questions du formulaire
     * @returns points (number) 
    */ 
    public totalPoints(questions: Question<any>[]) : number {
        let points: number = 0;

        questions.forEach((question: Question<any>) => {
            points += question.obtainedPoints;
        });

        return points;
    }


    /**
     * Méthode permettant de déterminer le risque inhérent à une entreprise via un formulaire.
     * 
     * @param point : nombre de point obtenu lors du formulaire
     * @returns risk (string)
    */
    public inherentRisk(point: number) : string {
        let risk: string = "";

        if (0 <= point && point <= 10) {
            risk = "low";
        } else if (11 <= point && point <= 18) {
            risk = "Medium";
        } else if (19 <= point && point <= 24) {
            risk = "High";
        } else if (point > 24) {
            risk = "Critical";
        } else {
            risk = "error";
        }

        return risk;
    }

    /**
     * Méthode permettant de faire une recherche dichotomique sur une tableau d'objets selon un attribut donné.
     * 
     * Soit un tableau composé d'objets du type : 
     * 
     * {id: number, label: string, score: number}. 
     * 
     * Cette méthode permettra de faire une recherche uniquement sur l'id, ou uniquement sur le label, ou uniquement sur le score à condition que l'on ait au préalable trier le tableau d'ojets selon l'attribut souhaité. 
     * 
     * @param array : tableau d'objet dans lequel s'opère la recherche
     * @param target : l'élément que l'on recherche
     * @param key : la clé sur laquelle la recherche va s'opérer
     * @param start : la borne inf de l'intervalle de recherche
     * @param end : la borne sup de l'intervalle de recherche
     * @returns indice ou -1 selon que la recherche ait aboutit
    */
    public binarySearchOverObject(array: any[], target: any, key: any, start: number, end: number) : any {
        if (start >= end) {
            return -1;
        } else {
            let mean: number = Math.floor((start + end - 1) / 2);
        
            if (target === array[mean][key]) {
                return mean;
            } else if (target < array[mean][key]) {
                return this.binarySearchOverObject(array, target, key, start, mean);
            } else {
                return this.binarySearchOverObject(array, target, key, mean + 1, end);
            }
        }
    }

    /**
     * Méthode permettant de trier un tableau d'objets selon un attribut donné.
     * 
     * Soit un tableau composé d'objets du type : 
     * 
     * {id: number, label: string, score: number}. 
     * 
     * Cette méthode permettra d'opérer un tri selon l'id, ou selon le label, ou selon le score. 
     * 
     * @param array : tableau d'objet que l'on souhaite trier
     * @param key : l'attribut selon lequel la recherche va s'opérer
     * @returns any[] : tableau d'objets trier
    */
    public sortByKey(array: any[], key: any) : any[] {
        return array.sort((obj_1: any, obj_2: any) => {
            let element_1 = obj_1[key];
            let element_2 = obj_2[key];
        
            return (element_1 < element_2) ? -1 : ((element_1 > element_2) ? 1 : 0);
        })
    }

    /**
     * Méthode permettant de remplir les champs necessaire à la bonne utilisation d'une catégorie avec les données récoltés lors du formulaire.
     * 
     * @param questions : questions provenant du formulaire
     * @param categories : différentes cattégories de questions
     * @returns Category[] : Tableau de categories remplis avec les données récoltées lors du formulaire
    */
    public fillCategories(questions: Question<any>[], categories: Category[]) : Category[] {
        categories = this.sortByKey(categories, 'id');    
    
        questions.forEach((question) => {
            let categoryIndex = this.binarySearchOverObject(categories, question.idCategory, "id", 0, categories.length);
            
            categories[categoryIndex]["point"] += question.obtainedPoints;
            categories[categoryIndex]["nbQuestion"] += 1;
            categories[categoryIndex]["pointMax"] += this.getMaxPointForAnswer(question.answersLoaded);
        })
    
        return categories;
    }

    /**
     * Méthode permettant de déterminer le nombre de point maximum qu'il est possible d'obtenir à une question donnée. 
     * 
     * @param answers : réponses possibles pour une question données
     * @returns number : Correpond au nombre de point maximum que l'on peut obtenir pour une question donnée
    */
    public getMaxPointForAnswer(answers: Answer[]) : number {
        return Math.max.apply(
            Math,
            answers.map((answer: Answer) => {
                return answer.point;
            })
        );
    }

    /**
     * Méthode permettant de rationner chacune des catégories afin de récupérer des résultats lisibles et homogènes.
     * 
     * @param categories : Tableau de Category correctement renseignées
     * @returns number[] : Tableau de point par catégorie rationné
     */
    ratio(categories: Category[]) : number[] {
        let res: number[] = [];
    
        categories.forEach((category: Category) => {
          const ratio: number = category.point / category.pointMax * 10;
          res.push(ratio);
        })
    
        return res;
    }

}