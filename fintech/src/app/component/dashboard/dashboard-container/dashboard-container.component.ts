import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { FormAdaptedService } from 'src/app/services/adapted-data/form-adapted/form-adapted.service';
import { Form } from 'src/model/form';

@Component({
  selector: 'app-dashboard-container',
  templateUrl: './dashboard-container.component.html',
  styleUrls: ['./dashboard-container.component.scss']
})
export class DashboardContainerComponent implements OnInit {

  forms$!: Observable<Form[]>;
  latestForms$!: Observable<Form[]>;

  constructor(
    private formAdaptedService: FormAdaptedService
  ) {}

  ngOnInit() : void {
    this.initForms();
    this.initLatestForms();
  }

  initForms() : void {
    this.forms$ = this.formAdaptedService.getFormByIdClient(1);
  }

  initLatestForms() : void {
    this.latestForms$ = this.formAdaptedService.getLatestForms(1, 2);
  }

}
