import { Component, OnInit } from '@angular/core';
import { FormGroup } from '@angular/forms';
import { Router } from '@angular/router';
import { QuestionControlService } from 'src/app/services/question-control/question-control.service';
import { Question } from 'src/model/question';

@Component({
  selector: 'app-result-user-opinion',
  templateUrl: './result-user-opinion.component.html',
  styleUrls: ['./result-user-opinion.component.scss']
})
export class ResultUserOpinionComponent implements OnInit {

  form!: FormGroup;
  questions = [];

  constructor(private qcs: QuestionControlService, private router: Router) { }

  ngOnInit(): void {
    this.initForm();
  }

  initForm() : void {
    this.form = this.qcs.toFormGroup(this.questions as Question<string>[]);
  }

  onSubmit() : void {
    this.router.navigate(['component/form/result/result-analysis/result-analysis-container']);
  }

}
