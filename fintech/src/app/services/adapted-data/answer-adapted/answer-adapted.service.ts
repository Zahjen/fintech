import { Injectable } from '@angular/core';
import { filter, map, Observable } from 'rxjs';
import { AnswerAdapter } from 'src/adapter/answer-adapter';
import { IAdaptedAnswer } from 'src/app/interfaces/object-adapted/answer-adapted';
import { Answer } from 'src/model/answer';
import { AnswerService } from '../../data-from-api/answer/answer.service';

@Injectable({
  providedIn: 'root'
})
export class AnswerAdaptedService {

  constructor(
    private answerService: AnswerService,
    private answerAdapter: AnswerAdapter
  ) { }

  // Méthode permettant d'adapter les réponses reçues via l'api à notre objet Answer
  getAdaptedAnswers() : Observable<Answer[]> {
    return this.answerService
      .getAdaptedAnswers()
      .pipe(
        map((answers: IAdaptedAnswer[]) => {
          return answers.map((answer: IAdaptedAnswer) => {
            return this.answerAdapter.adapt(answer);
          })
        })
      )
  }

  // Méthode permettant d'adapter les réponses reçues via l'api à notre objet Answer et de pouvoir ne récupérer que les réponses concernant la question données
  getAdaptedByIdQuestion(idQuestion: number) {
    return this.getAdaptedAnswers()
      .pipe(
        map((data: Answer[]) => {
          return data.filter((answer: Answer) => {
            return answer.idQuestion === idQuestion;
          })
        })
      )
  }

}
