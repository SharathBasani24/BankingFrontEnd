
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { TransferImpsComponent } from './transfer-imps/transfer-imps.component';
import { TransferNeftComponent } from './transfer-neft/transfer-neft.component';
import { TransferRtgsComponent } from './transfer-rtgs/transfer-rtgs.component';
import { HomeComponent } from './home/home.component';
import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component';
import { OpenAccountComponent } from './open-account/open-account.component';
import { ForgotUserIdComponent } from './forgot-user-id/forgot-user-id.component';
import { ForgotPasswordComponent } from './forgot-password/forgot-password.component';
import { SetNewPasswordComponent } from './set-new-password/set-new-password.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { AccountStatementComponent } from './account-statement/account-statement.component';
import { ChangePasswordComponent } from './change-password/change-password.component';
import { SessionExpiredComponent } from './session-expired/session-expired.component';
import { AddPayeeComponent } from './add-payee/add-payee.component';
import { TransactionStatusComponent } from './transaction-status/transaction-status.component';
import { MenuBarComponent } from './menu-bar/menu-bar.component';
import { TransferFundsComponent } from './transfer-funds/transfer-funds.component';
import { FormsModule } from '@angular/forms';
import {HttpClientModule} from '@angular/common/http';

@NgModule({
  declarations: [
    AppComponent,
    TransferImpsComponent,
    TransferNeftComponent,
    TransferRtgsComponent,
    HomeComponent,
    LoginComponent,
    RegisterComponent,
    OpenAccountComponent,
    ForgotUserIdComponent,
    ForgotPasswordComponent,
    SetNewPasswordComponent,
    DashboardComponent,
    AccountStatementComponent,
    ChangePasswordComponent,
    SessionExpiredComponent,
    AddPayeeComponent,
    TransactionStatusComponent,
    MenuBarComponent,
    TransferFundsComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
