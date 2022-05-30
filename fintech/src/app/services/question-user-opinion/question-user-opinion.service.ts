import { Injectable } from '@angular/core';
import { Question } from 'src/model/question';
import { QuestionRadio } from 'src/model/question-radio';

@Injectable({
  providedIn: 'root'
})
export class QuestionUserOpinionService {

  // Méthode permettant de récuperer un ensemble de question
  getUserOpinionQuestion() {
    const questions: Question<string>[] = [

        new QuestionRadio({
          id: 1,
          key: "questionUserOpinion1",
          label: "Do you agree with the result of the analysis ?",
          isHidden: false, 
          answersLoaded: [
            {
              id: 1,
              key: "answerUserAgree1",
              value: "Yes",
              point: 0,
            },
            {
              id: 2,
              key: "answerUserAgree2",
              value: "No",
              point: 0,
            },
          ]
        }),

        new QuestionRadio({
          id: 2,
          key: "questionUserOpinion2",
          label: "What is your opinion ?",
          isHidden: false,
          answersLoaded: [
            {
              id: 3,
              key: "answerUserOpinion3",
              value: "Low",
              point: 0,
            },
            {
              id: 4,
              key: "answerUserOpinion4",
              value: "Medium",
              point: 0,
            },
            {
              id: 5,
              key: "answerUserOpinion5",
              value: "High",
              point: 0,
            },
            {
              id: 6,
              key: "answerUserOpinion6",
              value: "Critical",
              point: 0,
            },
          ]
        }),
      ];

      return questions;
  }
}
