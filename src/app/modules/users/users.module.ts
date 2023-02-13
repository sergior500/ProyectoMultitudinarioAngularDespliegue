import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component';
import { UsersComponent } from './users/users.component';
import { UsersAddComponent } from './users-add/users-add.component';
import { UsersRoutingModule } from './users-routing.module';
import { ComponentsModule } from '../../components/components.module';



@NgModule({
  declarations: [
    LoginComponent,
    RegisterComponent,
    UsersComponent,
    UsersAddComponent
  ],
  imports: [
    CommonModule,
    UsersRoutingModule
  ]
})
export class UsersModule { }
