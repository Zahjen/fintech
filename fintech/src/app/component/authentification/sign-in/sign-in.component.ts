import { Component, OnInit } from '@angular/core';
import { FormGroup } from '@angular/forms';
import { Observable } from 'rxjs';
import { ISignInMessage } from 'src/app/interfaces/object-from-api/sign-in-message';
import { ContactService } from 'src/app/services/data-from-api/contact/contact.service';
import { QuestionControlService } from 'src/app/services/question-control/question-control.service';
import { Question } from 'src/model/question';
import { QuestionPassword } from 'src/model/question-password';
import { QuestionText } from 'src/model/question-text';

@Component({
  selector: 'app-sign-in',
  templateUrl: './sign-in.component.html',
  styleUrls: ['./sign-in.component.scss']
})
export class SignInComponent implements OnInit {

  questions!: Question<any>[];
  form!: FormGroup;

  signInMessage$!: Observable<ISignInMessage>;

  constructor(
    private questionControlService: QuestionControlService,
    private contactService: ContactService
  ) { }

  ngOnInit(): void {
    this.initQuestion();
    this.initFormGroup();
  }

  private initQuestion() : void {
    this.questions = [
      new QuestionText({
        label: "Login",
        key: "login",
        type: "string",
      }),

      new QuestionPassword({
        label: "Password",
        key: "password",
        type: "password",
      })
    ]
  }

  // Méthode permettant d'initialiser le formGroup afin d'y ajouter les différents controle correspondants aux différentes questions
  private initFormGroup() : void {
    this.form = this.questionControlService.toFormGroup(this.questions as Question<string>[]);
  }

  isValid(question: Question<any>) : boolean { 
    return this.form.controls[question.key].valid; 
  }

  onSubmit() {
    this.signInMessage$ = this.contactService.insertForm(this.form.value)
  }

}