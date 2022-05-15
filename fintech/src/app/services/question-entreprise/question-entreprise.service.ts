import { Injectable } from '@angular/core';
import { Question } from 'src/model/question';
import { QuestionText } from 'src/model/question-text';

@Injectable({
  providedIn: 'root'
})
export class QuestionEntrepriseService {

  constructor() {}

    // Méthode permettant de récuperer un ensemble de question
    getEntrepriseQuestions() {
        const questions: Question<string>[] = [

            new QuestionText({
                id: 1,
                key: "question1Entreprise1",
                label: "Before starting, let us check if the company you are looking for has already been registered.",
                isHidden: false
            }),

            new QuestionText({
              id: 1,
              key: "question1Entreprise2",
              label: "Please enter the new compagny name.",
              isHidden: false
          }),

        ];

        return questions;
    }

}
