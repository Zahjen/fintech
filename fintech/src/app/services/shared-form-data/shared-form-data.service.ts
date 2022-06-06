import { Injectable } from '@angular/core';
import { IForm } from 'src/app/interfaces/object-from-api/form';
import { Form } from 'src/model/form';
import { Question } from 'src/model/question';
import { ThirdParty } from 'src/model/third-party';

@Injectable({
  providedIn: 'root'
})
export class SharedFormDataService {

  questions: Question<any>[] = [];
  pointsByQuestionCategorie: number[] = [];

  form!: Form;

  formData!: IForm;

  chosenThirdParty!: ThirdParty;
 
  constructor() { }

  // Méthode permettant de récuperer les données du formulaire
  getQuestions() : Question<any>[] {
    return this.questions;
  }

  // Méthode permettant de set les données du formulaire à injecter dans un autre component 
  setQuestions(questions: Question<any>[]) : void {
    this.questions = questions;
  }

  // Méthode permettant de récuperer les données du formulaire
  getPointsByQuestionCategorie() : number[] {
    return this.pointsByQuestionCategorie;
  }

  // Méthode permettant de set les données du formulaire à injecter dans un autre component 
  setPointsByQuestionCategorie(pointsByQuestionCategorie: number[]) : void {
    this.pointsByQuestionCategorie = pointsByQuestionCategorie;
  }

  getThirdPaty() : ThirdParty {
    return this.chosenThirdParty;
  }

  setThirdPaty(questionThirdParty: ThirdParty) : void {
    this.chosenThirdParty = questionThirdParty;
  }

  getForm() : Form {
    return this.form;
  }

  setForm(form: Form) : void {
    this.form = form;
  }
  
  getFormData() : IForm {
    return this.formData;
  }

  setFormData(formData: IForm) : void {
    this.formData = formData;
  }

}
