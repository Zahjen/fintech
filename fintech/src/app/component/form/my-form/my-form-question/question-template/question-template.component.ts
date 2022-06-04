import { Component, Input } from '@angular/core';
import { FormGroup } from '@angular/forms';
import { SharedFormDataService } from 'src/app/services/shared-form-data/shared-form-data.service';
import { Answer } from 'src/model/answer';
import { Question } from 'src/model/question';

@Component({
  selector: 'app-question-template',
  templateUrl: './question-template.component.html',
  styleUrls: ['./question-template.component.scss']
})
export class QuestionTemplateComponent {

  @Input() form!: FormGroup;
  @Input() question!: Question<string>;
  @Input() answers!: Answer[];
  @Input() placeholder?: string;

  constructor() {}

  // Méthode permettant de mettre à jour la valeur associée à une question selon la selection de l'utilisateur
  setValue() : void {
    this.question['value'] = this.form.controls[this.question.key].value;
  }

  // Méthode permettant de mettre à jour la valeur associée à une question selon la selection de l'utilisateur
  /*setValueDropdown(answer: Answer) : void {
    this.question['value'] = this.form.controls[this.question.key].value;
  }*/

  // Méthode permettant de mettre à jour les points attribués à chaque question
  setObtainedPoints(point: any) : void {
    this.question['obtainedPoints'] = point;
  }

  // Méthode permettant de mettre à jour les points attribués à chaque question de type dropdown
  setObtainedPointsDropdown(event: any) : void {
    this.question['obtainedPoints'] = JSON.parse(event.target.value).point;
  }

  // Getter permettant de déterminer si le champ a bien été rempli, i.e. un bouton radio a bien été séléctionné, une option un select a été choisi, etc
  get isValid() : boolean { 
    return this.form.controls[this.question.key].valid; 
  }

}
