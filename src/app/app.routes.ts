import { Component } from '@angular/core';
import { Routes } from '@angular/router';
import { SignUpComponent } from './pages/sign-up/sign-up.component';
import { LoginComponent } from './pages/login/login.component';
import { AdminComponent } from './pages/admin/admin.component';
import { EmployeeListComponent } from './components/employee-list/employee-list.component';
import { InvestmentListComponent } from './components/investment-list/investment-list.component';
import { AdminListComponent } from './components/admin-list/admin-list.component';

import { AboutListComponent } from './components/about-list/about-list.component';
import { ViewEmployeeComponent } from './components/view-employee/view-employee.component';
import { AddEmployeeComponent } from './components/add-employee/add-employee.component';
import { EditEmployeeComponent } from './components/edit-employee/edit-employee.component';
import { MyprofileComponent } from './components/myprofile/myprofile.component';
import { UpdateAdminComponent } from './components/update-admin/update-admin.component';
import { TransactionStatComponent } from './components/transaction-stat/transaction-stat.component';
import { ChangeLoanRateComponent } from './components/change-loan-rate/change-loan-rate.component';
import { AuthPageComponent } from './pages/auth-page/auth-page.component';
import { HomePageComponent } from './pages/home-page/home-page.component';

import { CustomerComponent } from './components/customer/customer.component';
import { BondsComponent } from './components/bonds/bonds.component';
import { FdComponent } from './components/fd/fd.component';
import { MutualFundsComponent } from './components/mutual-funds/mutual-funds.component';
import { CustomersEnrolledComponentComponent } from './components/customers-enrolled-component/customers-enrolled-component.component';
import { TransactionComponent } from './components/transaction/transaction.component';
import { CustomerBondsComponent } from './components/customer-bonds/customer-bonds.component';
import { CustomerDtoComponent } from './components/customer-dto/customer-dto.component';
import { CustomerAccountComponent } from './components/customer-account/customer-account.component';
import { CustomerMutualComponent } from './components/customer-mutual/customer-mutual.component';
import { CustomerFdComponent } from './components/customer-fd/customer-fd.component';
import { PageNotFoundComponent } from './pages/page-not-found/page-not-found.component';
import { AuthGuardService } from './service/auth-guard.service';
import { AddBondComponent } from './components/add-bond/add-bond.component';
import { AddMutualFundComponent } from './components/add-mutual-fund/add-mutual-fund.component';
import { AddFdComponent } from './components/add-fd/add-fd.component';
import { AddDocumentsComponent } from './components/add-documents/add-documents.component';

export const routes: Routes = [
    {
        path: '', component: AuthPageComponent, children: [
            {
                path: '', component: HomePageComponent
            },
            {
                path: "sign-up", component: SignUpComponent
            },

            {
                path: 'login', component: LoginComponent
            },
        ]
    },
    {
        path: 'admin', component: AdminComponent, canActivate:[AuthGuardService], children: [
            {
                path:'',component:MyprofileComponent
            },
            {
                path: 'admin-list', component: AdminListComponent
            },
            {
                path: 'view/:id', component: ViewEmployeeComponent
            },
            {
                path: 'editEmployee/:id', component: EditEmployeeComponent
            },
            {
                path:'uploadImage/:id',component:AddDocumentsComponent
            },
            {
                path:'customerDto/:accountNumber',component:CustomerDtoComponent
            },
            {
                path:'customer-account/:accountNumber' , component:CustomerAccountComponent
            },
            {
                path: 'stat-bar', component: MyprofileComponent

            },
            {
                path: 'transaction-stat', component: TransactionStatComponent

            },
            {
                path: 'updateAdmin', component: UpdateAdminComponent
            },
            {
                path: 'changeLoanInterestRate', component: ChangeLoanRateComponent
            },
            {
                path: 'employee-list', component: EmployeeListComponent
            },
            {
                path: 'investment-list', component: InvestmentListComponent
            },

            {
                path: 'customer', component: CustomerComponent
            },
            {
                path: 'about-list', component: AboutListComponent
            },

            {
                path: 'addEmployee', component: AddEmployeeComponent
            },
            {
                path: 'bonds', component: BondsComponent
            },
            {
                path: 'fd', component: FdComponent
            },
            {
                path: 'mutual-funds', component: MutualFundsComponent
            },
            {
                path:'customerBonds/:id', component:CustomerBondsComponent
            },
            {
                path:'customermutual/:id', component:CustomerMutualComponent
            },
            {
                path:'customerfd/:id', component:CustomerFdComponent
            },
            {
                path:'add-new-bond',component:AddBondComponent
            },
            {
                path:'add-mutual', component:AddMutualFundComponent
            },
            {
                path:'add-fd', component:AddFdComponent
            }

        ]

    },
    // {
    //     path: 'view/:id', component: ViewEmployeeComponent
    // },
    // {
    //     path: 'editEmployee/:id', component: EditEmployeeComponent
    // },
    // {
    //     path: 'bonds', component: BondsComponent
    // },
    // {
    //     path: 'fd', component: FdComponent
    // },
    // {
    //     path: 'mutual-funds', component: MutualFundsComponent
    // },

    { path: 'customers-enrolled/:id', component: CustomersEnrolledComponentComponent}
    ,
    {
        path:'transactions', component:TransactionComponent
    },
    {
        path:'**' , component: PageNotFoundComponent
    }


];
