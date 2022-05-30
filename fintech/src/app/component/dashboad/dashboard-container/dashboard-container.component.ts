import { Component, OnInit } from '@angular/core';
import { FormGroup } from '@angular/forms';
import { map, Observable } from 'rxjs';
import { AnswerAdapter } from 'src/adapter/answer-adapter';
import { AnswerAdaptedService } from 'src/app/services/adapted-data/answer-adapted/answer-adapted.service';
import { AnswerDropdownAdaptedService } from 'src/app/services/adapted-data/answer-dropdown-adapted/answer-dropdown-adapted.service';
import { QuestionAdaptedService } from 'src/app/services/adapted-data/question-adapted/question-adapted.service';
import { AnswerService } from 'src/app/services/data-from-api/answer/answer.service';
import { QuestionService } from 'src/app/services/data-from-api/question/question.service';
import { QuestionControlService } from 'src/app/services/question-control/question-control.service';
import { Answer } from 'src/model/answer';
import { Question } from 'src/model/question';

@Component({
  selector: 'app-dashboard-container',
  templateUrl: './dashboard-container.component.html',
  styleUrls: ['./dashboard-container.component.scss']
})
export class DashboardContainerComponent implements OnInit {

  answers: Answer[] = [];

  constructor(private question: QuestionAdaptedService, private adapted: AnswerAdaptedService) {}

  ngOnInit() : void {
    this.question.getQuestions().subscribe(console.log)
  }

}
