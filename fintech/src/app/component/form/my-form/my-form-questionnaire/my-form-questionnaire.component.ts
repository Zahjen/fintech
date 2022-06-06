import { Component, Input, OnInit } from '@angular/core';
import { FormGroup } from '@angular/forms';
import { IClient } from 'src/app/interfaces/object-from-api/client';
import { IForm } from 'src/app/interfaces/object-from-api/form';
import { QuestionControlService } from 'src/app/services/question-control/question-control.service';
import { SharedFormDataService } from 'src/app/services/shared-form-data/shared-form-data.service';
import { ShareDataClientService } from 'src/app/services/shared/share-client-data/share-data-client.service';
import { Question } from 'src/model/question';
import { Utils } from 'src/tools/utils';

@Component({
  selector: 'app-my-form-questionnaire',
  templateUrl: './my-form-questionnaire.component.html',
  styleUrls: ['./my-form-questionnaire.component.scss']
})
export class MyFormQuestionnaireComponent implements OnInit {

  @Input() questions!: Question<string>[];

  utils: Utils = Utils.getInstance();

  formData!: IForm;
  client!: IClient;
  form!: FormGroup;

  constructor(
    private questionControlService: QuestionControlService,
    private sharedFormData: SharedFormDataService,
    private shareDataClientService: ShareDataClientService
  ) {}

  ngOnInit() : void {
    this.initFormGroup();
    this.initAnswers();
    this.initClient();
    this.initFormData();
  }

  initClient() : void {
    this.client = this.shareDataClientService.getclient();
  }

  initFormData() : void {
    this.formData = {
      idFormulaire: -1,
      idClient: this.client.idClient,
      idPrestataire: -1,
      idSecteur: -1,
      idPays: -1,
      totalPoints: 0
    }
  }

  // Méthode permettant d'initialiser le formGroup afin d'y ajouter les différents controle correspondants aux différentes questions
  private initFormGroup() : void {
    this.form = this.questionControlService.toFormGroup(this.questions as Question<string>[]);
  }

  // Méthode permettant d'initialiser les réponses du formulaires et les stocker dans l'attribut "answerLoaded" car une fois l'observable answers consommé, on ne pourra pas faire la transmission de données d'un composant à un autre
  private initAnswers() : void {
    this.questions.forEach((question) => {
      question.answers.subscribe((answer) => {
        question.answersLoaded = answer
      })
    })
  }

  onSubmit() : void {
    this.sharedFormData.setQuestions(this.questions);
    this.sharedFormData.setFormData(this.formData);
  }

}

