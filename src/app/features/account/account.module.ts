import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LoginComponent } from './page/login/login.component';
import { RoutingRoutingModule } from './routing/routing-routing.module';
import { FormComponent } from './components/login/form/form.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { SharedModule } from '../../shared/shared.module';

@NgModule({
  declarations: [LoginComponent, FormComponent],
  imports: [
    CommonModule,
    RoutingRoutingModule,
    ReactiveFormsModule,
    SharedModule,
    FormsModule,
  ],
})
export class AccountModule {}
