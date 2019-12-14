import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PaymentComponent } from './payment/payment.component';
import { MaterialModule } from '../material/material.module';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { BrowserModule } from '@angular/platform-browser';
import { PaymentcardComponent } from './paymentcard/paymentcard.component';


@NgModule({
  declarations: [PaymentComponent, PaymentcardComponent],
  imports: [
    CommonModule,
    MaterialModule,
    BrowserAnimationsModule,
    BrowserModule
  ]
})
export class PaymentModule { }
