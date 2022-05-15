import { Component, Input } from '@angular/core';
import { FormGroup, FormGroupDirective } from '@angular/forms';
import { Question } from 'src/model/question';

@Component({
  selector: 'app-question-template',
  templateUrl: './question-template.component.html',
  styleUrls: ['./question-template.component.scss']
})
export class QuestionTemplateComponent {

  @Input() question!: Question<string>;
  @Input() form!: FormGroup;
  @Input() placeholder?: string;

  constructor() {}

  // Méthode permettant de mettre à jour la valeur associée à une question selon la selection de l'utilisateur
  setValue() : void {
    this.question['value'] = this.form.controls[this.question.key].value;
  }

  // Getter permettant de déterminer si le champ a bien été rempli, i.e. un bouton radio a bien été séléctionné, une option un select a été choisi, etc
  get isValid() { 
    return this.form.controls[this.question.key].valid; 
  }

}
