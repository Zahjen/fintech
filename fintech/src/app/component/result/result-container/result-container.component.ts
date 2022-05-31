import { Component, OnInit } from '@angular/core';
import { SharedFormDataService } from 'src/app/services/shared-form-data/shared-form-data.service';
import { Question } from 'src/model/question';
import { ThirdParty } from 'src/model/third-party';
import { Utils } from 'src/tools/utils';

@Component({
  selector: 'app-result-container',
  templateUrl: './result-container.component.html',
  styleUrls: ['./result-container.component.scss']
})
export class ResultContainerComponent implements OnInit {

  utils = Utils.getInstance();

  questions!: Question<any>[];
  chosenThirdParty!: ThirdParty; 
  inherentRisk!: string;
  totalPoint!: number;

  constructor(private sharedFormData: SharedFormDataService) { }

  ngOnInit() : void {
    this.initQuestions();
    this.initChosenThirdParty();
    this.initTotalPoint();
    this.initInehrentRisk();
  }  

  private initQuestions() : void {
    this.questions = this.sharedFormData.getQuestions();
  }

  private initChosenThirdParty() : void {
    this.chosenThirdParty = this.sharedFormData.getThirdPaty();
  }

  private initTotalPoint() : void {
    this.totalPoint = this.utils.totalPoints(this.questions);
  }

  private initInehrentRisk() : void {
    this.inherentRisk = this.utils.inherentRisk(this.totalPoint);
  }

}
