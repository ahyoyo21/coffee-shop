import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { RouterModule, Routes } from '@angular/router';
import { MyFormComponent } from './components/my-form/my-form.component';
import { DirectivetestComponent } from './component/directivetest/directivetest.component';
import { GreetComponent } from './components/greet/greet.component';
import { CoffeeshopComponent } from './components/coffeeshop/coffeeshop.component';
import { FriendsComponent } from './components/friends/friends.component';

const routes: Routes = [
  { path: 'My-Form', component: MyFormComponent},
  { path: 'Test-Directive', component: DirectivetestComponent},
  { path: 'Databinding', component: GreetComponent},
  { path: 'Coffeeshop', component: CoffeeshopComponent},
  { path: 'Friends', component: FriendsComponent},
]
@NgModule({
  declarations: [],
  imports: [
    CommonModule, RouterModule.forRoot(routes)
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
