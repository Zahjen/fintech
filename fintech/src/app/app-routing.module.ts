import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DashboardContainerComponent } from './component/dashboad/dashboard-container/dashboard-container.component';
import { MyFormEntrepriseComponent } from './component/form/my-form/my-form-entreprise/my-form-entreprise.component';
import { MyFormQuestionnaireComponent } from './component/form/my-form/my-form-questionnaire/my-form-questionnaire.component';
import { MyFormSumUpComponent } from './component/form/my-form/my-form-sum-up/my-form-sum-up.component';
import { FormContainerComponent } from './component/form/overview/form-container/form-container.component';

const routes: Routes = [
  {
    path: "", 
    redirectTo: "component/dashboard/dashboard-container",
    pathMatch: "full"
  },
  {
    path: "component/dashboard/dashboard-container",
    component: DashboardContainerComponent
  },
  {
    path: "component/form/overview/form-container",
    component: FormContainerComponent
  },
  {
    path: "component/form/my-form/my-form-entreprise",
    component: MyFormEntrepriseComponent
  },
  {
    path: "component/form/my-form/my-form-sum-up",
    component: MyFormSumUpComponent
  },
  {
    path: "component/form/my-form/my-form-questionnaire",
    component: MyFormQuestionnaireComponent
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
