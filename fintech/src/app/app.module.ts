import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavBarComponent } from './component/nav-bar/nav-bar.component';
import { BodyComponent } from './component/body/body.component';
import { DashboardContainerComponent } from './component/dashboad/dashboard-container/dashboard-container.component';

@NgModule({
  declarations: [
    AppComponent,
    NavBarComponent,
    BodyComponent,
    DashboardContainerComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
