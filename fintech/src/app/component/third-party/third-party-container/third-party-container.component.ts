import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs/internal/Observable';
import { FormAdaptedService } from 'src/app/services/adapted-data/form-adapted/form-adapted.service';
import { Form } from 'src/model/form';
import { tab } from 'src/variable/script/nav-bar-data';

@Component({
  selector: 'app-third-party-container',
  templateUrl: './third-party-container.component.html',
  styleUrls: ['./third-party-container.component.scss']
})
export class ThirdPartyContainerComponent implements OnInit {

  tab = tab;

  forms$!: Observable<Form[]>;

  constructor(private formAdaptedService: FormAdaptedService) {
  }

  ngOnInit(): void {
    this.forms$ = this.formAdaptedService.getFormByIdClient(1);
  }

}
