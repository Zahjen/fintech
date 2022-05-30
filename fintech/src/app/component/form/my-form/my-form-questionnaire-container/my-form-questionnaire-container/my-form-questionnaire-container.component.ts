import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { QuestionAdaptedService } from 'src/app/services/adapted-data/question-adapted/question-adapted.service';
import { Question } from 'src/model/question';

@Component({
  selector: 'app-my-form-questionnaire-container',
  templateUrl: './my-form-questionnaire-container.component.html',
  styleUrls: ['./my-form-questionnaire-container.component.scss']
})
export class MyFormQuestionnaireContainerComponent implements OnInit {

  questions$!: Observable<Question<any>[]>;

  constructor(private questionAdaptedService: QuestionAdaptedService) {
    // On initialise les questions dans le constructeur plutôt que dans la méthode ngOnInit cette fois - ci car le constructeur est chargé avant la méthode ngOnInit. Pour pouvoir initialiser correctement le formulaire et les différents éléments associés, on doit pouvoir charger les questions en tout premier.
    this.initQuestions();
  }

  ngOnInit(): void {}

  // Méthodes permettant de récupérer les questions chargées dans le fichier de service
  initQuestions() : void {
    this.questions$ = this.questionAdaptedService.getQuestions()
  }

}
