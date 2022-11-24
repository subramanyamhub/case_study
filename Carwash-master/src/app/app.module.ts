import { LoginComponent } from './login/login.component';
import { HeaderComponent } from './header/header.component';
import { SignupComponent } from './signup/signup.component';
import { AdminDashboardComponent } from './admin-dashboard/admin-dashboard.component';
import { HomeComponent } from './home/home.component';
import { FooterComponent } from './footer/footer.component'
import {MatSidenavModule} from '@angular/material/sidenav';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {MatToolbarModule} from '@angular/material/toolbar';
import {MatIconModule} from '@angular/material/icon';
import {MatButtonModule} from '@angular/material/button';
import {MatDialogModule} from '@angular/material/dialog';
import {MatFormFieldModule} from '@angular/material/form-field';
import {MatInputModule} from '@angular/material/input';
import {MatSelectModule} from '@angular/material/select';
import {MatDatepickerModule} from '@angular/material/datepicker';
import{MatNativeDateModule} from '@angular/material/core';
import {MatRadioModule} from '@angular/material/radio';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import {MatTableModule} from '@angular/material/table';
import {MatPaginatorModule} from '@angular/material/paginator';
import {MatSortModule} from '@angular/material/sort';
import { PackageComponent } from './package/package.component';
import { PackageDialogComponent } from './package/package-dialog/package-dialog.component';
import { CarComponent } from './car/car.component';
import { CarDialogComponent } from './car/car-dialog/car-dialog.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import { WasherComponent } from './washer/washer.component';
import { CustomerComponent } from './customer/customer.component';
import { ViewWashersComponent } from './ViewWashers/view-washers/view-washers.component';
import { Component } from '@angular/core';
import { MyAccountComponent } from './my-account/my-account.component';
import { ViewpackagedialogComponent } from './customer/ViewPackageDialog/viewpackagedialog/viewpackagedialog.component';
import { OrdersComponent } from './orders/orders.component';
import { ViewCustomersComponent } from './view-customers/view-customers.component';
import { AddWasherComponent } from './add-washer/add-washer.component';
import { ViewOrdersComponent } from './view-orders/view-orders.component';
import { ViewInvoiceComponent } from './view-invoice/view-invoice.component';
import { AboutUsComponent } from './about-us/about-us.component';
import { HTTP_INTERCEPTORS } from '@angular/common/http';
import { TokenInterceptorService } from './_Services/token-interceptor.service';

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    HeaderComponent,
    SignupComponent,
    AdminDashboardComponent,
    HomeComponent,
    FooterComponent,
    PackageComponent,
    PackageDialogComponent,
    CarComponent,
    CarDialogComponent,
    PageNotFoundComponent,
    WasherComponent,
    CustomerComponent,
    ViewWashersComponent,
    MyAccountComponent,
    ViewpackagedialogComponent,
    OrdersComponent,
    ViewCustomersComponent,
    AddWasherComponent,
    ViewOrdersComponent,
    ViewInvoiceComponent,
    AboutUsComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    ReactiveFormsModule,
    FormsModule,
    MatSidenavModule,
    MatToolbarModule,
    MatIconModule,
    MatButtonModule,
    MatDialogModule,
    MatFormFieldModule,
    MatInputModule,
    MatSelectModule,
    HttpClientModule,


    MatDatepickerModule,
    MatNativeDateModule,
    MatIconModule,
    MatTableModule,
    MatPaginatorModule,
    MatSortModule,

  ],
  providers: [{provide:HTTP_INTERCEPTORS, useClass:TokenInterceptorService, multi:true}],
  bootstrap: [AppComponent]
})
export class AppModule { }
