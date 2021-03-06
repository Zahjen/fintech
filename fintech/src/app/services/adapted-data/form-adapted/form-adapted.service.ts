import { Injectable } from '@angular/core';
import { map, Observable, Subject } from 'rxjs';
import { FormAdapter } from 'src/adapter/form-adapter';
import { IAdaptedForm } from 'src/app/interfaces/object-adapted/form-adapted';
import { IForm } from 'src/app/interfaces/object-from-api/form';
import { Form } from 'src/model/form';
import { Utils } from 'src/tools/utils';
import { FormService } from '../../data-from-api/form/form.service';
import { ThirdPartyService } from '../../data-from-api/third-party/third-party.service';

@Injectable({
  providedIn: 'root'
})
export class FormAdaptedService {

  private utils = Utils.getInstance();

  constructor(
    private formService: FormService,
    private formAdapter: FormAdapter
  ) {}


  // Méthode permettant de récupérer et d'adapter les formulaires d'un client grace à son id
  getFormByIdClient(idClient: number) : Observable<Form[]> {
    return this.formService
      .getFormByIdClient(idClient)
      .pipe(
        map((forms: IAdaptedForm[]) => {
          return forms.map((form: IAdaptedForm) => {
            return this.formAdapter.adapt(form);
          })
        })
      )
  }

  // Méthode permettant de récupérer et d'adapter les formulaires d'un client grace à son id
  getLatestForms(idClient: number, number: number) {
    return this.formService
      .getFormByIdClient(idClient)
      .pipe(
        map((forms: IAdaptedForm[]) => {
          return forms.slice(0, number).map((form: IAdaptedForm) => {
            return this.formAdapter.adapt(form);
          })
        })
      )
  }

}
