import { Injectable } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Question } from 'src/model/question';

@Injectable({
  providedIn: 'root'
})
export class QuestionControlService {

  constructor() { }

  // Méthode permettant de gérer les controles à effectuer sur un champ.
  // Plus précisément on va prendre un ensemble de questions, et pour chacune de celle - ci on va considérer le fait que le champ soit requis ou non. Si celui - ci est requis alors on applique une vérification, sinon, on n'applique pas de validteur, et lme champ peut être vide.
  toFormGroup(questions: Question<string>[]) : FormGroup {
    const group: any = {};

    questions.forEach(question => {
      group[question.key] = question.required 
        ? new FormControl(question.value || '', question.type === 'text' ? [Validators.required, this.trim] : Validators.required)
        : new FormControl(question.value || '');
    });
    
    return new FormGroup(group);
  }


  trim(control: FormControl) {
      const isWhitespace = (control.value || '').trim().length === 0;
      const isValid = !isWhitespace;
      return isValid ? null : { 'whitespace': true };
  }

}

