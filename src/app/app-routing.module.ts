import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from "./auth/login/login.component";
import { ForgetComponent } from "./auth/forget/forget.component";
import { PageNotFoundComponent } from './errors/page-not-found/page-not-found.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { SalesComponent } from './sales/sales.component';
import { ControlComponent } from './control/control.component';
import { ResetComponent } from './auth/reset/reset.component';
import { DiscountComponent } from './discount/discount.component';
import { ReportComponent } from './report/report.component';
import { AuthGuard } from './guards/auth.guard';
import { GuestGuard } from './guards/guest.guard';

const routes: Routes = [
  { path: '', pathMatch: 'full', redirectTo: 'login'},
  { path: "pump/control", component: ControlComponent, canActivate: [AuthGuard]},
  { path: "pump/sales", component: SalesComponent, canActivate: [AuthGuard]},
  { path: "reports", component: ReportComponent, canActivate: [AuthGuard]},
  { path: "discounts", component: DiscountComponent, canActivate: [AuthGuard]},
  { path: "login", component: LoginComponent, canActivate: [GuestGuard]},
  { path: "reset", component: ForgetComponent, canActivate: [AuthGuard]},
  { path: "new_password", component: ResetComponent, canActivate: [AuthGuard]},
  { path: "dashboard", component: DashboardComponent, canActivate: [AuthGuard]},
  { path: '**', component: PageNotFoundComponent },
  
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
