import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { IClient } from 'src/app/interfaces/object-from-api/client';
import { FormAdaptedService } from 'src/app/services/adapted-data/form-adapted/form-adapted.service';
import { ShareDataClientService } from 'src/app/services/shared/share-client-data/share-data-client.service';
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

  client!: IClient;

  forms$!: Observable<Form[]>;

  constructor(
    private formAdaptedService: FormAdaptedService,
    private shareDataClientService: ShareDataClientService
  ) {
  }

  ngOnInit(): void {
    this.initClient();
    this.initForms();
  }

  private initClient() : void {
    this.client = this.shareDataClientService.getclient();
  }

  private initForms() : void {
    this.forms$ = this.formAdaptedService.getFormByIdClient(this.client.idClient);
  }

}
