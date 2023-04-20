import { TransferFundsComponent } from './transfer-funds/transfer-funds.component';
import { TransferRtgsComponent } from './transfer-rtgs/transfer-rtgs.component';
import { TransferNeftComponent } from './transfer-neft/transfer-neft.component';
import { TransferImpsComponent } from './transfer-imps/transfer-imps.component';
import { TransactionStatusComponent } from './transaction-status/transaction-status.component';
import { SetNewPasswordComponent } from './set-new-password/set-new-password.component';
import { SessionExpiredComponent } from './session-expired/session-expired.component';
import { RegisterComponent } from './register/register.component';
import { OpenAccountComponent } from './open-account/open-account.component';
import { ForgotUserIdComponent } from './forgot-user-id/forgot-user-id.component';
import { ForgotPasswordComponent } from './forgot-password/forgot-password.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { ChangePasswordComponent } from './change-password/change-password.component';
import { AddPayeeComponent } from './add-payee/add-payee.component';
import { LoginComponent } from './login/login.component';
import { AccountStatementComponent } from './account-statement/account-statement.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';


const routes: Routes = [
  {path:'', component:LoginComponent},
  {path:'accountStatement',component:AccountStatementComponent},
  {path:'addPayee',component:AddPayeeComponent},
  {path:'changePassword',component:ChangePasswordComponent},
  {path:'dashboard',component:DashboardComponent},
  {path:'forgotPassword',component:ForgotPasswordComponent},
  {path:'forgotUserId',component:ForgotUserIdComponent},
  {path:'home',component:HomeComponent},
  {path:'login',component:LoginComponent},
  {path:'openAccount',component:OpenAccountComponent},
  {path:'register',component:RegisterComponent},
  {path:'sessionExpired',component:SessionExpiredComponent},
  {path:'setNewPassword',component:SetNewPasswordComponent},
  {path:'transactionStatus',component:TransactionStatusComponent},
  {path:'transferImps',component:TransferImpsComponent},
  {path:'transferNeft',component:TransferNeftComponent},
  {path:'transferRtgs',component:TransferRtgsComponent},
  {path:'transferFunds',component:TransferFundsComponent},

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
