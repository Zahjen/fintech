import { Component, OnInit } from '@angular/core';
import { FormGroup } from '@angular/forms';
import { Router } from '@angular/router';
import { FormToApiAdapter } from 'src/adapter/from-front-to-back/form';
import { IClient } from 'src/app/interfaces/object-from-api/client';
import { IForm } from 'src/app/interfaces/object-from-api/form';
import { FormAnswerService } from 'src/app/services/data-from-api/form-answer/form-answer.service';
import { QuestionControlService } from 'src/app/services/question-control/question-control.service';
import { SharedFormDataService } from 'src/app/services/shared-form-data/shared-form-data.service';
import { ShareDataClientService } from 'src/app/services/shared/share-client-data/share-data-client.service';
import { Question } from 'src/model/question';
import { ThirdParty } from 'src/model/third-party';
import { Utils } from 'src/tools/utils';

@Component({
  selector: 'app-my-form-sum-up',
  templateUrl: './my-form-sum-up.component.html',
  styleUrls: ['./my-form-sum-up.component.scss']
})
export class MyFormSumUpComponent implements OnInit {

  questions!: Question<any>[];
  chosenThirdParty!: ThirdParty;
  form!: FormGroup;

  client!: IClient;

  utils: Utils = Utils.getInstance();

  formData!: IForm;

  constructor(
    private qcs: QuestionControlService, 
    private sharedFormData: SharedFormDataService,
    private shareDataClientService: ShareDataClientService,
    private formToApiAdapter: FormToApiAdapter,
    private router: Router,


    private formAnswerService: FormAnswerService
  ) { }

  ngOnInit() : void {
    this.initClient();
    this.initFormData();
    this.questions = this.sharedFormData.getQuestions();
    this.chosenThirdParty = this.sharedFormData.getThirdPaty();
    this.form = this.qcs.toFormGroup(this.questions as Question<string>[]);
  }

  initClient() : void {
    this.client = this.shareDataClientService.getclient();
  }

  initFormData() : void {
    this.formData = this.sharedFormData.getFormData();
  }

  changeFormData(question: Question<any>, data: number) : void {
    if (question.id === 1) {
      this.formData['idSecteur'] = data;
    } else {
      this.formData['idPays'] = data;
    }
  }

  // Méthode permettant de mettre à jour la valeur associée à une question selon la selection de l'utilisateur
  setValue(question: Question<any>) : void {
    question['value'] = this.form.controls[question.key].value;
  }

  // Méthode permettant de mettre à jour les points attribués à chaque question
  setObtainedPoints(question: Question<any>, point: any) {
    question['obtainedPoints'] = point;
    
  }

  // Méthode permettant de mettre à jour les points attribués à chaque question de type dropdown
  setObtainedPointsDropdownAndFormData(event: any, question: Question<any>) : void {
    let data: any = JSON.parse(event.target.value);
    question['obtainedPoints'] = data.point;
    if (question.id === 1) {
      this.formData['idSecteur'] = data.idDropdown;
    } else {
      this.formData['idPays'] = data.idDropdown;
    }
  }

  // Méthode permettant d'indiquer si un champ n'a pas été rempli
  isValid(question: Question<any>) {
    return this.form.controls[question.key].valid; 
  }

  onSubmit(data:any) : void {
    this.sharedFormData.setQuestions(this.questions);
    this.formData['totalPoints'] = this.utils.totalPoints(this.questions);

    this.formAnswerService.insertForm(this.formToApiAdapter.adapt(this.chosenThirdParty, this.formData, this.questions)).subscribe()
    console.log(this.formToApiAdapter.adapt(this.chosenThirdParty, this.formData, this.questions))

    this.router.navigate(['component/form/result/result-container']);
  }

}
