import { Injectable } from '@angular/core';
import { map, Observable } from 'rxjs';
import { QuestionDropdownAdapter } from 'src/adapter/question-dropdown-adapter';
import { QuestionRadioAdapter } from 'src/adapter/question-radio-adapter';
import { Question } from 'src/model/question';
import { QuestionService } from '../../data-from-api/question/question.service';
import { AnswerAdaptedService } from '../answer-adapted/answer-adapted.service';

@Injectable({
  providedIn: 'root'
})
export class QuestionAdaptedService {

    constructor(
        private questionService: QuestionService,
        private questionRadioAdapter: QuestionRadioAdapter,
        private questionDropdownAdapter: QuestionDropdownAdapter,
        private answerAdaptedService: AnswerAdaptedService
    ) {}

    getQuestions() : Observable<Question<string>[]> {
        return this.questionService
            .getAll()
            .pipe(
                map((questions) => {
                    return questions.map((question) => {
                        let questionAdapted!: Question<string>;

                        if (question.type === 'radio') {
                            questionAdapted = this.questionRadioAdapter.adapt(
                                question,
                                this.answerAdaptedService.getAdaptedByIdQuestion(question.idQuestion)
                            );

                        } else if (question.type === 'dropdown') {
                            questionAdapted = this.questionDropdownAdapter.adapt(
                                question,
                                this.answerAdaptedService.getAdaptedByIdQuestion(question.idQuestion)
                            );
                        }
                
                        return questionAdapted;
                    })
                })
            )
    }
}