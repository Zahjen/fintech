import { Component, OnInit } from '@angular/core';
import { SharedFormDataService } from 'src/app/services/shared-form-data/shared-form-data.service';
import { Question } from 'src/model/question';

@Component({
  selector: 'app-sum-up-container',
  templateUrl: './sum-up-container.component.html',
  styleUrls: ['./sum-up-container.component.scss']
})
export class SumUpContainerComponent implements OnInit {

  questions!: Question<any>[];

  constructor(private sharedFormData: SharedFormDataService) { }

  ngOnInit(): void {
    this.questions = this.sharedFormData.getQuestions();
  }

}
