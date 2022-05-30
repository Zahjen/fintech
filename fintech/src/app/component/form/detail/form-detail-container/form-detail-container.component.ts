import { Component, OnInit } from '@angular/core';
import { FormDetailAdaptedService } from 'src/app/services/adapted-data/form-detail-adapted/form-detail-adapted.service';
import { SharedFormDataService } from 'src/app/services/shared-form-data/shared-form-data.service';
import { Form } from 'src/model/form';
import { Question } from 'src/model/question';

@Component({
  selector: 'app-form-detail-container',
  templateUrl: './form-detail-container.component.html',
  styleUrls: ['./form-detail-container.component.scss']
})
export class FormDetailContainerComponent implements OnInit {

  form!: Form;
  questions!: Question<any>[];

  constructor(
    private sharedFormDataService: SharedFormDataService,
    private formDetailAdaptedService: FormDetailAdaptedService
  ) { }

  ngOnInit(): void {
    this.form = this.sharedFormDataService.getForm()
    this.formDetailAdaptedService.getFormByIdForm(this.form.id).subscribe((questions) => {
      this.questions = questions
    })
  }

}
