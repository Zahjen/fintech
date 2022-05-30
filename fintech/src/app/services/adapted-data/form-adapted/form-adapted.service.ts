import { Injectable } from '@angular/core';
import { Observable, Subject } from 'rxjs';
import { FormAdapter } from 'src/adapter/form-adapter';
import { Form } from 'src/model/form';
import { FormService } from '../../data-from-api/form/form.service';
import { ThirdPartyService } from '../../data-from-api/third-party/third-party.service';

@Injectable({
  providedIn: 'root'
})
export class FormAdaptedService {

  constructor(
    private formService: FormService,
    private thirdPartyService: ThirdPartyService,
    private formAdapter: FormAdapter
  ) {}


  // Je n'aime pas comment j'ai développé cette méthode dû au fait que l'on doit connaître les id des dropdown :/ 
  // Je dois voir comment faire pour automatiser cela
  getFormByIdClient(idClient: number) : Observable<Form[]> {
      const forms: Form[] = [];
      // Subject va nous permettre de manipuler (adapter nos données dans nos différents objets) et sauvegarder ces données
      let subject = new Subject<Form[]>();

      this.formService
          // On récupère l'ensemble de formulaires de la base de données
          .getFormByIdClient(idClient)
          .subscribe((formsList) => {
              // Pour chaque formulaire de l'ensemble de formulaire ...
              formsList.forEach((form: any) => {
                  this.thirdPartyService
                    // ... on récupère le prestataire concerné par le formulaire via son id
                    .getById(form.idPrestataire)
                    .subscribe((thirdParty) =>{
                      forms.push(
                        this.formAdapter.adapt(form, thirdParty.nomPrestataire)
                      )

                      // On enregistre en quelque sorte le tableau de formulaires obtenues
                      subject.next(forms);
                  });
              });
          })
          
          // On retourne un Observable de tableau d'objets Form
        return subject.asObservable();
    }

}
