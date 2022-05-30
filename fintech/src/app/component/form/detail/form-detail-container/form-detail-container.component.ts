import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { FormDetailAdaptedService } from 'src/app/services/adapted-data/form-detail-adapted/form-detail-adapted.service';
import { SharedFormDataService } from 'src/app/services/shared-form-data/shared-form-data.service';
import { Form } from 'src/model/form';
import { FormDetail } from 'src/model/form-detail';

@Component({
  selector: 'app-form-detail-container',
  templateUrl: './form-detail-container.component.html',
  styleUrls: ['./form-detail-container.component.scss']
})
export class FormDetailContainerComponent implements OnInit {

  formDetails$!: Observable<FormDetail[]>
  form!: Form;

  constructor(
    private formDetailAdaptedService: FormDetailAdaptedService,
    private sharedFormDataService: SharedFormDataService
  ) { }

  ngOnInit(): void {
    this.form = this.sharedFormDataService.getForm();
    this.formDetails$ = this.formDetailAdaptedService.getFormDetailByIdClient(this.form.id);
  }

}
