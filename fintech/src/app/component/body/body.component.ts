import { Component, OnInit } from '@angular/core';
import { ShareDataClientService } from 'src/app/services/shared/share-client-data/share-data-client.service';
import { tab } from 'src/variable/script/nav-bar-data';
import { person } from 'src/variable/script/person';

@Component({
  selector: 'app-body',
  templateUrl: './body.component.html',
  styleUrls: ['./body.component.scss']
})
export class BodyComponent implements OnInit {

  tab = tab;

  constructor(
    private shareDataClientService : ShareDataClientService
  ) {}

  ngOnInit() {
    this.initClient();
  }

  private initClient() : void {
    this.shareDataClientService.setClient(person);
  }

}
