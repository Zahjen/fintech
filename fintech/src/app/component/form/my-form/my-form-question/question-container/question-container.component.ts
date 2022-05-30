import { Component, Input, OnInit } from '@angular/core';
import { FormGroup } from '@angular/forms';
import { Router } from '@angular/router';
import { Answer } from 'src/model/answer';
import { Question } from 'src/model/question';
import { sumUpMyForm } from 'src/variable/script/router-link';

@Component({
  selector: 'app-question-container',
  templateUrl: './question-container.component.html',
  styleUrls: ['./question-container.component.scss']
})
export class QuestionContainerComponent implements OnInit {

  @Input() myForm!: FormGroup;
  @Input() question!: Question<string>;
  @Input() answers!: Answer[];
  @Input() questions!: Question<string>[];
  @Input() index!: number;

  sumUpMyForm = sumUpMyForm;

  constructor(
    private router: Router
  ) {}

  ngOnInit(): void {
    this.firstQuestionInit()
  }

  // Méthode permettant de mettre la première question visible
  private firstQuestionInit() : void {
    this.questions[0].isHidden = false;
  }

  // Getter permettant de déterminer si le champ a bien été rempli, i.e. un bouton radio a bien été séléctionné, une option un select a été choisi, etc
  get isValid() : boolean { 
    return this.myForm.controls[this.question.key].valid; 
  }

  // Méthode permettant de passer à la question suivante si le champ a été complété. 
  // En cliquanrt sur le bouton, on va masquer la question courante et démaquer la question suivante 
  nextButton(index: number) : void {
    if (index < this.questions.length - 1 && this.isValid) {
      this.questions[index].isHidden = true;
      this.questions[index + 1] ? this.questions[index + 1].isHidden = false : false;
    }
  }

  // Méthode permettant d'affiche le sum up tout en verifiant que le dernier champ a bien été rempli
  goToSumUp(index: number) : void {
    if (index === this.questions.length - 1 && this.isValid) {
      this.router.navigate([sumUpMyForm.routeLink]);
    }
  }

  // Méthode permettant de passer à la question précédente. 
  // En cliquanrt sur le bouton, on va masquer la question courante et démaquer la question précédente 
  previousButton(index: number) : void {
    if (index > 0) {
      this.questions[index].isHidden = true;
      this.questions[index - 1] ? this.questions[index - 1].isHidden = false : false;
    }
  }

}
