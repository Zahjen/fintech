import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { IClient } from 'src/app/interfaces/object-from-api/client';
import { FormAdaptedService } from 'src/app/services/adapted-data/form-adapted/form-adapted.service';
import { ShareDataClientService } from 'src/app/services/shared/share-client-data/share-data-client.service';
import { Form } from 'src/model/form';
import { identity } from 'src/variable/script/person';

@Component({
  selector: 'app-dashboard-container',
  templateUrl: './dashboard-container.component.html',
  styleUrls: ['./dashboard-container.component.scss']
})
export class DashboardContainerComponent implements OnInit {

  forms$!: Observable<Form[]>;
  latestForms$!: Observable<Form[]>;
  client!: IClient;

  identity!: any;

  constructor(
    private formAdaptedService: FormAdaptedService,
    private shareDataClientService: ShareDataClientService
  ) {}

  ngOnInit() : void {
    this.initClient();
    this.initForms();
    this.initLatestForms();
    this.initIdentity();
  }

  private initIdentity() : void {
    this.identity = identity;
  }

  private initClient() : void {
    this.client = this.shareDataClientService.getclient();
  }

  private initForms() : void {
    this.forms$ = this.formAdaptedService.getFormByIdClient(this.client.idClient);
  }

  private initLatestForms() : void {
    this.latestForms$ = this.formAdaptedService.getLatestForms(this.client.idClient, 2);
  }

}
