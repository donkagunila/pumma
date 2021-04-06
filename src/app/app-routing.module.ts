import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from "./auth/login/login.component";
import { ForgetComponent } from "./auth/forget/forget.component";

const routes: Routes = [
  { path: "", component: LoginComponent},
  { path: "login", component: LoginComponent},
 
  
  { path: '**', redirectTo: 'login' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
