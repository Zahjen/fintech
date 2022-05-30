import { Injectable } from '@angular/core';
import { map, Observable } from 'rxjs';
import { FormDetailAdapter } from 'src/adapter/form-detail-adapter';
import { IAdaptedFormDetail } from 'src/app/interfaces/object-adapted/form-detail-adapted';
import { FormDetail } from 'src/model/form-detail';
import { FormDetailService } from '../../data-from-api/form-detail/form-detail.service';

@Injectable({
  providedIn: 'root'
})
export class FormDetailAdaptedService {

  constructor(
    private formDetailService: FormDetailService,
    private formDetailAdapter: FormDetailAdapter
  ) {}


  // Méthode permettant de récupérer et d'adapter les formulaires d'un client grace à son id
  getFormDetailByIdClient(idForm: number) : Observable<FormDetail[]> {
    return this.formDetailService
      .getById(idForm)
      .pipe(
        map((formDetails: IAdaptedFormDetail[]) => {
          return formDetails.map((formDetail: IAdaptedFormDetail) => {
            return this.formDetailAdapter.adapt(formDetail);
          })
        })
      )
  }  

}
