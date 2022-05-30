import { Injectable } from '@angular/core';
import { Question } from 'src/model/question';
import { QuestionText } from 'src/model/question-text';

@Injectable({
  providedIn: 'root'
})
export class QuestionThirdPartyService {

  constructor() { }

  // Méthode permettant de récuperer un ensemble de question
  getEntrepriseQuestions() {
    const questions: Question<string>[] = [

        new QuestionText({
          id: 1,
          key: "questionThirdParty1",
          label: "Before starting, let us check if the company you are looking for has already been registered.",
          isHidden: false,
          required: false
        }),

        new QuestionText({
          id: 1,
          key: "questionThirdParty2",
          label: "Please enter the new company name.",
          isHidden: false
        }),

        new QuestionText({
          id: 3,
          key: "questionThirdParty3",
          label: "For which company would you like to know the inherent risk ?",
          isHidden: false,
          required: false
        })

    ];

    return questions;
  }
}
