import { Component, OnInit } from '@angular/core';
import { FormGroup } from '@angular/forms';
import { QuestionControlService } from 'src/app/services/question-control/question-control.service';
import { SharedFormDataService } from 'src/app/services/shared-form-data/shared-form-data.service';
import { Question } from 'src/model/question';

@Component({
  selector: 'app-my-form-sum-up',
  templateUrl: './my-form-sum-up.component.html',
  styleUrls: ['./my-form-sum-up.component.scss']
})
export class MyFormSumUpComponent implements OnInit {

  questions!: Question<any>[];
  form!: FormGroup;

  constructor(private qcs: QuestionControlService, private sharedFormData: SharedFormDataService) { }

  ngOnInit() : void {
    this.questions = this.sharedFormData.getQuestions();
    this.form = this.qcs.toFormGroup(this.questions as Question<string>[]);
  }

  // Méthode permettant d'indiquer si un champ n'a pas été rempli
  isValid(question: Question<any>) {
    return this.form.controls[question.key].valid; 
  }

  onSubmit() : void {

  }

}
