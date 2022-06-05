import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DashboardContainerComponent } from './component/dashboard/dashboard-container/dashboard-container.component';
import { FormDetailContainerComponent } from './component/form/detail/form-detail-container/form-detail-container.component';
import { MyFormQuestionnaireContainerComponent } from './component/form/my-form/my-form-questionnaire-container/my-form-questionnaire-container/my-form-questionnaire-container.component';
import { MyFormSumUpComponent } from './component/form/my-form/my-form-sum-up/my-form-sum-up.component';
import { MyFormThirdPartyContainerComponent } from './component/form/my-form/my-form-third-party/my-form-third-party-container/my-form-third-party-container.component';
import { FormContainerComponent } from './component/form/overview/form-container/form-container.component';
import { ResultAnalysisContainerComponent } from './component/result/result-analysis/result-analysis-container/result-analysis-container.component';
import { ResultContainerComponent } from './component/result/result-container/result-container.component';
import { ThirdPartyContainerComponent } from './component/third-party/third-party-container/third-party-container.component';

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
    path: "component/third-party/third-party-container",
    component: ThirdPartyContainerComponent
  },
  {
    path: "component/form/my-form/my-form-third-party/my-form-third-party-container",
    component: MyFormThirdPartyContainerComponent
  },
  {
    path: "component/form/my-form/my-form-questionnaire-container",
    component: MyFormQuestionnaireContainerComponent
  },
  {
    path: "component/form/my-form/my-form-sum-up",
    component: MyFormSumUpComponent
  },
  {
    path: "component/form/result/result-container",
    component: ResultContainerComponent
  },
  {
    path: "component/form/result/result-analysis/result-analysis-container",
    component: ResultAnalysisContainerComponent
  },
  {
    path: "component/form/detail/form-detail-container",
    component: FormDetailContainerComponent
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes, { scrollPositionRestoration: 'enabled' })],
  exports: [RouterModule]
})
export class AppRoutingModule { }
