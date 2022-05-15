import { Component, Input } from '@angular/core';
import { FormGroup } from '@angular/forms';
import { Question } from 'src/model/question';
import { sumUpMyForm } from 'src/variable/script/router-link';

@Component({
  selector: 'app-question-container',
  templateUrl: './question-container.component.html',
  styleUrls: ['./question-container.component.scss']
})
export class QuestionContainerComponent {

  @Input() myForm!: FormGroup;
  @Input() question!: Question<string>;
  @Input() questions!: Question<string>[];
  @Input() index!: number;  

  sumUpMyForm = sumUpMyForm;

  constructor() {}

  // Getter permettant de déterminer si le champ a bien été rempli, i.e. un bouton radio a bien été séléctionné, une option un select a été choisi, etc
  get isValid() { 
    return this.myForm.controls[this.question.key].valid; 
  }

  // Méthode permettant de passer à la question suivante si le champ a été complété. 
  // En cliquanrt sur le bouton, on va masquer la question courante et démaquer la question suivante 
  nextButton(index: number) {
    if (index < this.questions.length - 1 && this.isValid) {
      this.questions[index].isHidden = true;
      this.questions[index + 1] ? this.questions[index + 1].isHidden = false : false;
    }
  }

  // Méthode permettant de passer à la question précédente. 
  // En cliquanrt sur le bouton, on va masquer la question courante et démaquer la question précédente 
  previousButton(index: number) {
    if (index > 0) {
      this.questions[index].isHidden = true;
      this.questions[index - 1] ? this.questions[index - 1].isHidden = false : false;
    }
  }

}
