import { Component, OnInit } from '@angular/core';
import { SharedFormDataService } from 'src/app/services/shared-form-data/shared-form-data.service';
import { Question } from 'src/model/question';
import { ThirdParty } from 'src/model/third-party';

@Component({
  selector: 'app-result-container',
  templateUrl: './result-container.component.html',
  styleUrls: ['./result-container.component.scss']
})
export class ResultContainerComponent implements OnInit {

  questions!: Question<any>[];
  chosenEntreprise!: ThirdParty;

  constructor(private sharedFormData: SharedFormDataService) { }

  ngOnInit() : void {
    this.questions = this.sharedFormData.getQuestions();
    this.sharedFormData.setPointsByQuestionCategorie(
      this.sortQuestionPointByCategory(this.questions)
    )
    this.chosenEntreprise = this.sharedFormData.getThirdPaty();
  }

  // Méthode permettant de calculer le nombre total de points obtenus via les questions du formulaire 
  totalPoints() : number {
    let points: number = 0;

    for (let i = 0 ; i < this.questions.length ; i++) {
      points += this.questions[i].obtainedPoints;
    }

    return points;
  }

  inherentRisk(point: number) : string {
    let risk: string = "";

    if (0 <= point && point <= 10) {
      risk = "low";
    } else if (11 <= point && point <= 18) {
      risk = "Medium";
    } else if (19 <= point && point <= 24) {
      risk = "High";
    } else if (point > 24) {
      risk = "Critical";
    } else {
      risk = "error"
    }

    return risk;
  }

  sortQuestionPointByCategory(questions: Question<any>[]) : number[] {
    let points: number[] = [0, 0, 0, 0, 0];

    questions.forEach((question) => {

      if (question.idCategory === 1) {
        points[0] += question.obtainedPoints
      } else if (question.idCategory === 2) {
        points[1] += question.obtainedPoints
      } else if (question.idCategory === 3) {
        points[2] += question.obtainedPoints
      } else if (question.idCategory === 4) {
        points[3] += question.obtainedPoints
      } else if (question.idCategory === 5) {
        points[4] += question.obtainedPoints
      }

    })

    return points;
  }



}
