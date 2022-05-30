import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { FormAdaptedService } from 'src/app/services/adapted-data/form-adapted/form-adapted.service';
import { Form } from 'src/model/form';
import { tab } from 'src/variable/script/nav-bar-data';
import { addFormRoute } from 'src/variable/script/router-link';

@Component({
  selector: 'app-form-container',
  templateUrl: './form-container.component.html',
  styleUrls: ['./form-container.component.scss']
})
export class FormContainerComponent implements OnInit {

  addFormRoute = addFormRoute;
  tab = tab;

  forms$!: Observable<Form[]>;

  constructor(private formAdaptedService: FormAdaptedService) {
  }

  ngOnInit(): void {
    this.forms$ = this.formAdaptedService.getFormByIdClient(1);
  }

}
