import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { CardContainerComponent } from './dashboard/card-container/card-container.component';
import { PaymentComponent } from './payment/payment/payment.component';


const routes: Routes = [
   { path: '', redirectTo: '/dashboard', pathMatch: 'full'},
   {path: 'dashboard', component: CardContainerComponent},
   { path: 'payment', component: PaymentComponent}
  ];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
