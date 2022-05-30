import { Component, OnInit } from '@angular/core';
import { FormGroup } from '@angular/forms';
import { Router } from '@angular/router';
import { QuestionControlService } from 'src/app/services/question-control/question-control.service';
import { SharedFormDataService } from 'src/app/services/shared-form-data/shared-form-data.service';
import { Question } from 'src/model/question';
import { ThirdParty } from 'src/model/third-party';

@Component({
  selector: 'app-my-form-sum-up',
  templateUrl: './my-form-sum-up.component.html',
  styleUrls: ['./my-form-sum-up.component.scss']
})
export class MyFormSumUpComponent implements OnInit {

  questions!: Question<any>[];
  chosenThirdParty!: ThirdParty;
  form!: FormGroup;

  constructor(
    private qcs: QuestionControlService, 
    private sharedFormData: SharedFormDataService,
    private router: Router
  ) { }

  ngOnInit() : void {
    this.questions = this.sharedFormData.getQuestions();
    this.chosenThirdParty = this.sharedFormData.getThirdPaty();
    this.form = this.qcs.toFormGroup(this.questions as Question<string>[]);
  }

  // Méthode permettant de mettre à jour la valeur associée à une question selon la selection de l'utilisateur
  setValue(question: Question<any>) : void {
    question['value'] = this.form.controls[question.key].value;
  }

  // Méthode permettant de mettre à jour les points attribués à chaque question
  setObtainedPoints(question: Question<any>, point: any) {
    question['obtainedPoints'] = point;
  }

  // Méthode permettant d'indiquer si un champ n'a pas été rempli
  isValid(question: Question<any>) {
    return this.form.controls[question.key].valid; 
  }

  onSubmit() : void {
    this.sharedFormData.setQuestions(this.questions);
    this.router.navigate(['component/form/result/result-container']);
  }

}
