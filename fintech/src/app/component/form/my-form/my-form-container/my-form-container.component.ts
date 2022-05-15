import { Component, OnInit } from '@angular/core';
import { QuestionService } from 'src/app/services/question/question.service';
import { Question } from 'src/model/question';

@Component({
  selector: 'app-my-form-container',
  templateUrl: './my-form-container.component.html',
  styleUrls: ['./my-form-container.component.scss'],
})

export class MyFormContainerComponent implements OnInit {

  questions: Question<any>[] = [];

  constructor(private questionService: QuestionService) {}

  // On appelle ici les questions 
  ngOnInit(): void {
    this.getQuestions();
  }

  // Méthodes permettant de récupérer les questions chargées dans le fichier de service
  getQuestions() : void {
    this.questions = this.questionService.getQuestions();
  }

}
