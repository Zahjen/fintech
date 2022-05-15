import { Component, Input, OnInit } from '@angular/core';
import { FormGroup } from '@angular/forms';
import { Router } from '@angular/router';
import { QuestionControlService } from 'src/app/services/question-control/question-control.service';
import { QuestionEntrepriseService } from 'src/app/services/question-entreprise/question-entreprise.service';
import { SharedFormDataService } from 'src/app/services/shared-form-data/shared-form-data.service';
import { Question } from 'src/model/question';
  
@Component({
  selector: 'app-my-form-entreprise',
  templateUrl: './my-form-entreprise.component.html',
  styleUrls: ['./my-form-entreprise.component.scss']
})
export class MyFormEntrepriseComponent implements OnInit {

  searchForm!: FormGroup;
  addForm!: FormGroup;
  questions!: Question<any>[];

  questionSearch!: Question<any>;
  questionAdd!: Question<any>;

  entrepriseExists = true;

  placeholder = "Compagny Name";

  constructor(
      private qcs: QuestionControlService, 
      private questionEntrepriseService: QuestionEntrepriseService,
      private sharedFormData: SharedFormDataService,
      private router: Router
    ) {}

  // On appelle ici les questions 
  ngOnInit() : void {
    this.getEntreprisesQuestions();
    this.searchForm = this.qcs.toFormGroup(this.questions as Question<string>[]);
    this.addForm = this.qcs.toFormGroup(this.questions as Question<string>[]);

    this.questionSearch = this.questions[0];
    this.questionAdd = this.questions[1];
  }

  // Méthodes permettant de récupérer les questions chargées dans le fichier de service
  getEntreprisesQuestions() : void {
    this.questions = this.questionEntrepriseService.getEntrepriseQuestions();
  }

  exists() {
    this.entrepriseExists = false;
  }

  onSubmitAdd() : void {
    this.sharedFormData.setQuestionEntreprise(this.questionAdd);
    this.router.navigate(['component/form/my-form/my-form-questionnaire']);
  }

  onSubmitSearch() : void {
   
  }

}
