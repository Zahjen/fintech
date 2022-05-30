import { Component, OnInit } from '@angular/core';
import { AnswerAdaptedService } from 'src/app/services/adapted-data/answer-adapted/answer-adapted.service';
import { QuestionAdaptedService } from 'src/app/services/adapted-data/question-adapted/question-adapted.service';
import { Answer } from 'src/model/answer';

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
