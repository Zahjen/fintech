import { Injectable } from '@angular/core';
import { map, Observable, Subject } from 'rxjs';
import { ThirdPartyAdapter } from 'src/adapter/third-party-adapter';
import { IThirdParty } from 'src/app/interfaces/object-from-api/third-party';
import { ThirdParty } from 'src/model/third-party';
import { ThirdPartyService } from '../../data-from-api/third-party/third-party.service';

@Injectable({
  providedIn: 'root'
})
export class ThirdPartyAdaptedService {

  constructor(
    private thirdPartyService: ThirdPartyService,
    private thirdPartyAdapter: ThirdPartyAdapter
  ) { }

  getAdaptedEntreprise() : Observable<ThirdParty[]> {   
    return this.thirdPartyService
      .getAll()
      .pipe(
        map((thirdParties: IThirdParty[]) => {
          return thirdParties.map((thirdParty: IThirdParty) => {
            return this.thirdPartyAdapter.adapt(thirdParty);
          })
        })
      )
  }
}