import { Component, Input, OnInit } from '@angular/core';
import { FormGroup } from '@angular/forms';
import { QuestionControlService } from 'src/app/services/question-control/question-control.service';
import { QuestionService } from 'src/app/services/question/question.service';
import { SharedFormDataService } from 'src/app/services/shared-form-data/shared-form-data.service';
import { Question } from 'src/model/question';

@Component({
  selector: 'app-my-form-questionnaire',
  templateUrl: './my-form-questionnaire.component.html',
  styleUrls: ['./my-form-questionnaire.component.scss']
})
export class MyFormQuestionnaireComponent implements OnInit {

  questions: Question<any>[] = [];
  
  form!: FormGroup;

  constructor(
    private qcs: QuestionControlService, 
    private sharedFormData: SharedFormDataService, 
    private questionService: QuestionService
  ) {}

  ngOnInit() : void {
    this.getQuestions();
    this.form = this.qcs.toFormGroup(this.questions as Question<string>[]);
  }

  // Méthodes permettant de récupérer les questions chargées dans le fichier de service
  getQuestions() : void {
    this.questions = this.questionService.getQuestions();
  }

  // Méthode permettant de faire un passage de données d'un component à un autre
  onSubmit() : void {
    this.sharedFormData.setQuestions(this.questions);
  }

}

