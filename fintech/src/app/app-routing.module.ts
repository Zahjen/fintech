import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DashboardContainerComponent } from './component/dashboad/dashboard-container/dashboard-container.component';
import { MyFormContainerComponent } from './component/form/my-form/my-form-container/my-form-container.component';
import { SumUpContainerComponent } from './component/form/my-form/sum-up/sum-up-container/sum-up-container.component';
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
    path: "component/form/my-form/my-form-container",
    component: MyFormContainerComponent
  },
  {
    path: "component/form/my-form/sum-up/sum-up-container",
    component: SumUpContainerComponent
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
