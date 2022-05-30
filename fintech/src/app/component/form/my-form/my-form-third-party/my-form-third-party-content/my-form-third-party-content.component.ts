import { Component, Input, OnInit } from '@angular/core';
import { FormGroup } from '@angular/forms';
import { Router } from '@angular/router';
import { QuestionControlService } from 'src/app/services/question-control/question-control.service';
import { QuestionThirdPartyService } from 'src/app/services/question-third-party/question-third-party.service';
import { SharedFormDataService } from 'src/app/services/shared-form-data/shared-form-data.service';
import { Question } from 'src/model/question';
import { ThirdParty } from 'src/model/third-party';

@Component({
  selector: 'app-my-form-third-party-content',
  templateUrl: './my-form-third-party-content.component.html',
  styleUrls: ['./my-form-third-party-content.component.scss']
})
export class MyFormThirdPartyContentComponent implements OnInit {

  @Input() thirdParties!: ThirdParty[];

  placeholder = "Company Name";

  searchForm!: FormGroup;
  addForm!: FormGroup;
  questionsSelectEntreprise!: Question<any>[];

  questionSearch!: Question<any>;
  questionAdd!: Question<any>;

  thirdPartyExists = true;

  constructor(
      private qcs: QuestionControlService, 
      private questionThirdPartyService: QuestionThirdPartyService,
      private sharedFormData: SharedFormDataService,
      private router: Router
    ) {}

  // On appelle ici les questions 
  ngOnInit() : void {
    this.initEntreprisesQuestions();
    this.initFormGroup();
  }

  // Méthodes permettant de récupérer les questions chargées dans le fichier de service
  private initEntreprisesQuestions() : void {
    this.questionsSelectEntreprise = this.questionThirdPartyService.getEntrepriseQuestions();
    this.questionSearch = this.questionsSelectEntreprise[0];
    this.questionAdd = this.questionsSelectEntreprise[1];
  }

  // Méthode permettant d'initialiser les différent FormGroup
  private initFormGroup() {
    this.searchForm = this.qcs.toFormGroup(this.questionsSelectEntreprise as Question<string>[]);
    this.addForm = this.qcs.toFormGroup(this.questionsSelectEntreprise as Question<string>[]);
  }

  // Méthode permettant de passer à l'ajout d'un partenaire si necéssaire
  exists() : void {
    this.thirdPartyExists = false;
  }

  // Getter permettant de déterminer si le champ a bien été rempli, i.e. que le champ d'ajout d'entrprise à bien été rempli
  get isValid() : boolean { 
    return this.addForm.controls[this.questionAdd.key].valid; 
  }

  // Méthode permettant d'ajouter un partenaire et de passer à la quite du formulaire
  onSubmitAdd() : void {
    if (this.isValid) {
      this.sharedFormData.setThirdPaty(new ThirdParty({
        label: this.questionAdd.value
      }));
      this.router.navigate(['component/form/my-form/my-form-questionnaire-container']);
    }
  }

  // Méthode permettatn de selectionner un partenaire déjà existante et de passer à la suite du formulaire
  onSubmitSearch(thirdParty: ThirdParty) : void {
    this.sharedFormData.setThirdPaty(thirdParty);
    this.router.navigate(['component/form/my-form/my-form-questionnaire-container']);
  }

}
