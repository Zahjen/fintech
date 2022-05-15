import { Injectable } from '@angular/core';
import { FormGroup } from '@angular/forms';
import { Question } from 'src/model/question';

@Injectable({
  providedIn: 'root'
})
export class SharedFormDataService {
  questions!: Question<any>[];
  questionEntreprise!: Question<any>;

  constructor() { }

  // Méthode permettant de récuperer les données du formulaire
  getQuestions() : Question<any>[] {
    return this.questions;
  }

  // Méthode permettant de set les données du formulaire à injecter dans un autre component 
  setQuestions(questions: Question<any>[]) : void {
    this.questions = questions;
  }

  getQuestionEntreprise() : Question<any> {
    return this.questionEntreprise;
  }

  setQuestionEntreprise(questionEntreprise: Question<any>) : void {
    this.questionEntreprise = questionEntreprise;
  }

}
