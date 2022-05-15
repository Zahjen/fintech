import { Component, Input, OnInit } from '@angular/core';
import { FormGroup } from '@angular/forms';
import { QuestionControlService } from 'src/app/services/question-control/question-control.service';
import { SharedFormDataService } from 'src/app/services/shared-form-data/shared-form-data.service';
import { Question } from 'src/model/question';

@Component({
  selector: 'app-my-form-questionnaire',
  templateUrl: './my-form-questionnaire.component.html',
  styleUrls: ['./my-form-questionnaire.component.scss']
})
export class MyFormQuestionnaireComponent implements OnInit {

  @Input() questions!: Question<string>[];
  
  form!: FormGroup;

  constructor(private qcs: QuestionControlService, private sharedFormData: SharedFormDataService) {}

  ngOnInit() : void {
    this.form = this.qcs.toFormGroup(this.questions as Question<string>[]);
  }

  // Méthode permettant de faire un passage de données d'un component à un autre
  onSubmit() : void {
    this.sharedFormData.setQuestions(this.questions);
  }

}
