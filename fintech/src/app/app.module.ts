import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavBarComponent } from './component/nav-bar/nav-bar.component';
import { BodyComponent } from './component/body/body.component';
import { DashboardContainerComponent } from './component/dashboad/dashboard-container/dashboard-container.component';
import { FormContainerComponent } from './component/form/overview/form-container/form-container.component';
import { FormContainerItemComponent } from './component/form/overview/form-container-item/form-container-item.component';
import { FormItemComponent } from './component/form/overview/form-item/form-item.component';
import { MyFormContainerComponent } from './component/form/my-form/my-form-container/my-form-container.component';
import { MyFormEntrepriseComponent } from './component/form/my-form/my-form-entreprise/my-form-entreprise.component';
import { QuestionTemplateComponent } from './component/form/my-form/my-form-question/question-template/question-template.component';
import { QuestionContainerComponent } from './component/form/my-form/my-form-question/question-container/question-container.component';
import { ReactiveFormsModule } from '@angular/forms';
import { MyFormQuestionnaireComponent } from './component/form/my-form/my-form-questionnaire/my-form-questionnaire.component';
import { MyFormSumUpComponent } from './component/form/my-form/my-form-sum-up/my-form-sum-up.component';

@NgModule({
  declarations: [
    AppComponent,
    NavBarComponent,
    BodyComponent,
    DashboardContainerComponent,
    FormContainerComponent,
    FormContainerItemComponent,
    FormItemComponent,
    MyFormContainerComponent,
    MyFormEntrepriseComponent,
    QuestionTemplateComponent,
    QuestionContainerComponent,
    MyFormQuestionnaireComponent,
    MyFormSumUpComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
