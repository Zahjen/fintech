import { Injectable } from '@angular/core';
import { Observable, Subject } from 'rxjs';
import { AnswerDropdownAdapter } from 'src/adapter/answer-dropdown-adapter';
import { QuestionDropdownAdapter } from 'src/adapter/question-dropdown-adapter';
import { QuestionRadioAdapter } from 'src/adapter/question-radio-adapter';
import { Question } from 'src/model/question';
import { FormAnswerService } from '../../data-from-api/form-answer/form-answer.service';
import { QuestionService } from '../../data-from-api/question/question.service';
import { AnswerDropdownAdaptedService } from '../answer-dropdown-adapted/answer-dropdown-adapted.service';
import { AnswerRadioAdaptedService } from '../answer-radio-adapted/answer-radio-adapted.service';
import { QuestionAdaptedService } from '../question-adapted/question-adapted.service';

@Injectable({
  providedIn: 'root'
})
export class FormDetailAdaptedService {

  constructor(
    private formAnswerService: FormAnswerService,
    private questionService: QuestionService,
    private questionRadioAdapter: QuestionRadioAdapter,
    private questionDropdownAdapter: QuestionDropdownAdapter,
    private answerRadioAdaptedService: AnswerRadioAdaptedService,
    private answerDorpdownAdaptedService: AnswerDropdownAdaptedService
  ) {}

  getFormByIdForm(idForm: number) : Observable<Question<any>[]> {
    const questions: Question<any>[] = [];
    // Subject va nous permettre de manipuler (adapter nos données dans nos différents objets) et sauvegarder ces données
    let subject = new Subject<Question<any>[]>();

    this.formAnswerService
      .getById(idForm)
      .subscribe((formLines) => {
        formLines.forEach((formLine) => {
          this.questionService
            .getById(formLine.idQuestion)
            .subscribe((question) => {
              if (question.type === "radio") {
                questions.push(
                  this.questionRadioAdapter.adapt(
                    question, this.answerRadioAdaptedService.getAdaptedAnswer(question.idQuestion)
                  )
                )
              } else if (question.type === "dropdown" && question.idQuestion === 1) {
                questions.push(
                  this.questionDropdownAdapter.adapt(
                    question, this.answerDorpdownAdaptedService.getAdaptedBuisnessLine(question.idQuestion)
                  )
                )
              } else if (question.type === "dropdown" && question.idQuestion === 4) {
                questions.push(
                  this.questionDropdownAdapter.adapt(
                    question, this.answerDorpdownAdaptedService.getAdaptedCountry(question.idQuestion)
                  )
                )
              }

              subject.next(questions);
            })
        })
      })
        
    // On retourne un Observable de tableau d'objets Form
    return subject.asObservable();
  }

}
