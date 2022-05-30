import { Injectable } from '@angular/core';
import { Observable, Subject } from 'rxjs';
import { AnswerRadioAdapter } from 'src/adapter/answer-radio-adapter';
import { AnswerRadio } from 'src/model/answer-radio';
import { AnswerService } from '../../data-from-api/answer/answer.service';
import { ObtainedPointService } from '../../data-from-api/obtained-point/obtained-point.service';

@Injectable({
  providedIn: 'root'
})
export class AnswerRadioAdaptedService {

  constructor(
    private answerService: AnswerService,
    private obtainedPointService: ObtainedPointService,
    private answerRadioAdapter: AnswerRadioAdapter
  ) { }

  getAdaptedAnswer(idQuestion: number) : Observable<AnswerRadio[]> {
    const answers: AnswerRadio[] = [];
    // Subject va nous permettre de manipuler (adapter nos données dans nos différents objets) et sauvegarder ces données
    let subject = new Subject<AnswerRadio[]>();

    this.obtainedPointService
      // On récupère un ensemble de points obtenu via l'id d'une question donnée
      .getById(idQuestion)
      .subscribe((obtainedPointList) => {
        // À élément de l'ensemble de points obtenu, ...
        obtainedPointList.forEach((obtainedPoint: any) => {
          this.answerService
            // ... on récupère le label de la question correspondant au nombre de points obtenu
            .getById(obtainedPoint.idReponse)
            .subscribe((answer) => {
              // On adapte alors les données obtenues dans notre objet AnswerRadio
              answers.push(
                this.answerRadioAdapter.adapt(answer, obtainedPoint)
              )
              // On enregistre en quelque sorte le tableau de réponses obtenues
              subject.next(answers)
            })
        });
      })
    
    // On retourne un Observable de tableau d'objets AnswerRadio
    return subject.asObservable();
  }

}
