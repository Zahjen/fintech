import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs/internal/Observable';
import { IClient } from 'src/app/interfaces/object-from-api/client';
import { FormAdaptedService } from 'src/app/services/adapted-data/form-adapted/form-adapted.service';
import { ShareDataClientService } from 'src/app/services/shared/share-client-data/share-data-client.service';
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

  private client!: IClient;

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
