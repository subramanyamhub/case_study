import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AboutUsComponent } from './about-us/about-us.component';
import { AdminDashboardComponent } from './admin-dashboard/admin-dashboard.component';
import { CarComponent } from './car/car.component';
import { CustomerComponent } from './customer/customer.component';
import { HomeComponent } from './home/home.component';
import { LoginComponent } from './login/login.component';
import { MyAccountComponent } from './my-account/my-account.component';
import { OrdersComponent } from './orders/orders.component';
import { PackageComponent } from './package/package.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import { SignupComponent } from './signup/signup.component';
import { ViewCustomersComponent } from './view-customers/view-customers.component';
import { ViewOrdersComponent } from './view-orders/view-orders.component';
import { ViewWashersComponent } from './ViewWashers/view-washers/view-washers.component';
import { WasherComponent } from './washer/washer.component';
import { AuthGuard } from './_Services/auth.guard';

const routes: Routes = [

  {path:'login', component:LoginComponent},
  {path:'signup', component:SignupComponent},
  {path:'admin', component:AdminDashboardComponent, canActivate:[AuthGuard]},
  {path:'home', component:HomeComponent},
  {path:'package', component:PackageComponent, canActivate:[AuthGuard]},
  {path:'car', component:CarComponent, canActivate:[AuthGuard]},
  {path:'washer', component:WasherComponent, canActivate:[AuthGuard]},
  {path:'customer', component:CustomerComponent, canActivate:[AuthGuard]},
  {path:'order', component:OrdersComponent, canActivate:[AuthGuard]},
  {path:'viewWashers', component:ViewWashersComponent, canActivate:[AuthGuard]},
  {path:'viewCustomers', component:ViewCustomersComponent, canActivate:[AuthGuard]},
  {path:'myAccount', component:MyAccountComponent, canActivate:[AuthGuard]},
  {path:'vieworders', component:ViewOrdersComponent, canActivate:[AuthGuard]},
  {path:'aboutus', component:AboutUsComponent},


  {path: '',   redirectTo: '/home', pathMatch: 'full' }, // redirect to `first-component`
  {path: '**', component: PageNotFoundComponent },  // Wildcard route for a 404 page
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
