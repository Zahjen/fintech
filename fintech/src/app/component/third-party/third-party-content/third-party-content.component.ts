import { Component, Input, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { QuestionControlService } from 'src/app/services/question-control/question-control.service';
import { QuestionThirdPartyService } from 'src/app/services/question-third-party/question-third-party.service';
import { Form } from 'src/model/form';
import { Question } from 'src/model/question';

@Component({
  selector: 'app-third-party-content',
  templateUrl: './third-party-content.component.html',
  styleUrls: ['./third-party-content.component.scss']
})
export class ThirdPartyContentComponent implements OnInit {

  placeholder = "e.g. BNP Paribas ...";
  
  @Input() forms!: Form[];

  myForm!: FormGroup;
  questionThirdParty!: Question<any>[];
  questionLookForInherentRisk!: Question<any>;

  constructor(
    private questionThirdPartyService: QuestionThirdPartyService, 
    private qcs: QuestionControlService,
  ) { }

  ngOnInit(): void {
    this.questionThirdParty = this.questionThirdPartyService.getEntrepriseQuestions();
    this.questionLookForInherentRisk = this.questionThirdParty[2];
    this.myForm = this.qcs.toFormGroup(this.questionThirdParty as Question<string>[]);
  }

  inherentRisk(point: number) : string {
    let risk: string = "";

    if (0 <= point && point <= 10) {
      risk = "Low";
    } else if (11 <= point && point <= 18) {
      risk = "Medium";
    } else if (19 <= point && point <= 24) {
      risk = "High";
    } else if (point > 24) {
      risk = "Critical";
    } else {
      risk = "error";
    }

    return risk;
  }

}
