import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { NgxPaginationModule } from 'ngx-pagination';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavBarComponent } from './component/nav-bar/nav-bar.component';
import { BodyComponent } from './component/body/body.component';
import { DashboardContainerComponent } from './component/dashboard/dashboard-container/dashboard-container.component';
import { FormContainerComponent } from './component/form/overview/form-container/form-container.component';
import { FormContainerItemComponent } from './component/form/overview/form-container-item/form-container-item.component';
import { FormItemComponent } from './component/form/overview/form-item/form-item.component';
import { QuestionTemplateComponent } from './component/form/my-form/my-form-question/question-template/question-template.component';
import { QuestionContainerComponent } from './component/form/my-form/my-form-question/question-container/question-container.component';
import { ReactiveFormsModule } from '@angular/forms';
import { MyFormQuestionnaireComponent } from './component/form/my-form/my-form-questionnaire/my-form-questionnaire.component';
import { MyFormSumUpComponent } from './component/form/my-form/my-form-sum-up/my-form-sum-up.component';
import { SearchFilterPipe } from './pipe/search-filter/search-filter.pipe';
import { MyFormQuestionnaireContainerComponent } from './component/form/my-form/my-form-questionnaire-container/my-form-questionnaire-container/my-form-questionnaire-container.component';
import { ResultContainerComponent } from './component/result/result-container/result-container.component';
import { ResultUserOpinionComponent } from './component/result/result-user-opinion/result-user-opinion.component';
import { FormDetailContainerComponent } from './component/form/detail/form-detail-container/form-detail-container.component';
import { MyFormThirdPartyContainerComponent } from './component/form/my-form/my-form-third-party/my-form-third-party-container/my-form-third-party-container.component';
import { MyFormThirdPartyContentComponent } from './component/form/my-form/my-form-third-party/my-form-third-party-content/my-form-third-party-content.component';
import { ThirdPartyContainerComponent } from './component/third-party/third-party-container/third-party-container.component';
import { ThirdPartyContentComponent } from './component/third-party/third-party-content/third-party-content.component';
import { ResultAnalysisContainerComponent } from './component/result/result-analysis/result-analysis-container/result-analysis-container.component';
import { ResultAnalysisContentComponent } from './component/result/result-analysis/result-analysis-content/result-analysis-content.component';
import { FormDetailChartComponent } from './component/form/detail/form-detail-chart/form-detail-chart.component';
import { FormDetailAnswerComponent } from './component/form/detail/form-detail-answer/form-detail-answer.component';
import { OverallRiskDistributionComponent } from './component/dashboard/dashboard-chart/overall-risk-distribution/overall-risk-distribution.component';
import { RiskGaugeComponent } from './component/dashboard/dashboard-chart/risk-gauge/risk-gauge.component';
import { BuisnessLineDistributionComponent } from './component/dashboard/dashboard-chart/buisness-line-distribution/buisness-line-distribution.component';
import { DashboardLatestFormComponent } from './component/dashboard/dashboard-latest-form/dashboard-latest-form.component';

@NgModule({
  declarations: [
    AppComponent,
    NavBarComponent,
    BodyComponent,
    DashboardContainerComponent,
    FormContainerComponent,
    FormContainerItemComponent,
    FormItemComponent,
    QuestionTemplateComponent,
    QuestionContainerComponent,
    MyFormQuestionnaireComponent,
    SearchFilterPipe,
    MyFormQuestionnaireContainerComponent,
    MyFormSumUpComponent,
    ResultContainerComponent,
    ResultUserOpinionComponent,
    FormDetailContainerComponent,
    MyFormThirdPartyContainerComponent,
    MyFormThirdPartyContentComponent,
    ThirdPartyContainerComponent,
    ThirdPartyContentComponent,
    ResultAnalysisContainerComponent,
    ResultAnalysisContentComponent,
    FormDetailChartComponent,
    FormDetailAnswerComponent,
    OverallRiskDistributionComponent,
    RiskGaugeComponent,
    BuisnessLineDistributionComponent,
    DashboardLatestFormComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    AppRoutingModule,
    ReactiveFormsModule,
    NgxPaginationModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
