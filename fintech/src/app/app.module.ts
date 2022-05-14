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
    MyFormEntrepriseComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
