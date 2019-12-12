import { NgModule, Component } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { LoginComponent } from './login/login.component';
import { AdminComponent } from './admin/admin.component';
import { AuthGuard } from './auth.guard';
import { NavbarComponent } from './navbar/navbar.component';
import { CustomerComponent } from './customer/customer.component';
import { CustomerDetailComponent } from './customer-detail/customer-detail.component';
import { PlansComponent } from './plans/plans.component';
 

const routes: Routes = [
  { path: '', pathMatch: 'full', redirectTo: 'login'},
  { path: 'login', component: LoginComponent },
  { 
    path: 'admin', 
    component: AdminComponent,
    children: [
      {path:'customer', component: CustomerComponent},
      {path:'customerdetail', component: CustomerDetailComponent},
      {path:'plans', component:PlansComponent},
      { path: '', pathMatch: 'full', redirectTo: 'customer'},
    ]
  },
  { path: 'navbar',component: NavbarComponent},
   // {path:'customer-detail', component: CustomerDetailComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }