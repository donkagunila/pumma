import { NgModule } from '@angular/core';
import { BrowserModule, Title } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { FormsModule, ReactiveFormsModule} from '@angular/forms';
import { NgApexchartsModule } from "ng-apexcharts"

import { DataTablesModule } from "angular-datatables";

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginComponent } from './auth/login/login.component';
import { ForgetComponent } from './auth/forget/forget.component';
import { PageNotFoundComponent } from './errors/page-not-found/page-not-found.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { StationComponent } from './station/station.component';
import { BsDropdownModule } from 'ngx-bootstrap/dropdown';
import { NavbarComponent } from './shared/navbar/navbar.component';
import { SalesComponent } from './sales/sales.component';
import { ControlComponent } from './control/control.component';
import { ResetComponent } from './auth/reset/reset.component';
import { ReportComponent } from './report/report.component';
import { DiscountComponent } from './discount/discount.component';


@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    ForgetComponent,
    PageNotFoundComponent,
    DashboardComponent,
    StationComponent,
    NavbarComponent,
    SalesComponent,
    ControlComponent,
    ResetComponent,
    ReportComponent,
    DiscountComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    FormsModule,
    ReactiveFormsModule,
    DataTablesModule,
    NgApexchartsModule,
    BsDropdownModule.forRoot()
  ],
  providers: [
    Title
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
