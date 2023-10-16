import { Component, NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { HomepageComponent } from './homepage/homepage.component';
import { ClientsComponent } from './clients/clients.component';


const routes: Routes = [
 {path: "",component: HomepageComponent},
 {path: "login", component: LoginComponent},
 {path: "dashboard", component:DashboardComponent},
{path:"clients", component: ClientsComponent}
 
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
