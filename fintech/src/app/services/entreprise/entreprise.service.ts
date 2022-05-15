import { Injectable } from '@angular/core';
import { Entreprise } from 'src/model/entreprise';

@Injectable({
  providedIn: 'root'
})
export class EntrepriseService {

  constructor() {}

  // Méthode permettant de récuperer un ensemble de question
  getEntreprises() {
      const entreprises: Entreprise[] = [
          new Entreprise({
              id: 1,
              label: "BNP Paribas"
          }),

          new Entreprise({
              id: 2,
              label: "BNP Paribas1"
          }),

          new Entreprise({
              id: 3,
              label: "BNP Paribas2"
          }),

          new Entreprise({
              id: 4,
              label: "BNP Paribas3"
          }),

          new Entreprise({
              id: 5,
              label: "BNP Paribas4"
          }),          
      ];

      return entreprises;
  }
  
}
