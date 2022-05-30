import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { ThirdPartyAdaptedService } from 'src/app/services/adapted-data/third-party-adapted/third-party-adapted.service';
import { ThirdParty } from 'src/model/third-party';

@Component({
  selector: 'app-my-form-third-party-container',
  templateUrl: './my-form-third-party-container.component.html',
  styleUrls: ['./my-form-third-party-container.component.scss']
})
export class MyFormThirdPartyContainerComponent implements OnInit {

  thirdParties$!: Observable<ThirdParty[]>;

  constructor(
    private thirdPartyAdaptedServices: ThirdPartyAdaptedService
  ) {}

  ngOnInit(): void {
    this.initThirdParty();
  }

  private initThirdParty() : void {
    this.thirdParties$ = this.thirdPartyAdaptedServices.getAdaptedEntreprise();
  }

}
