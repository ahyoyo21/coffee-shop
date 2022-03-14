import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { MyFormComponent } from './components/my-form/my-form.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { DirectivetestComponent } from './component/directivetest/directivetest.component';
import { AppRoutingModule } from './app-routing.module';
import { GreetComponent } from './components/greet/greet.component';
import { CoffeeshopComponent } from './components/coffeeshop/coffeeshop.component';
import { FriendsComponent } from './components/friends/friends.component';

import { PageService } from './share/page.service';


@NgModule({
  declarations: [
    AppComponent,
    MyFormComponent,
    DirectivetestComponent,
    GreetComponent,
    CoffeeshopComponent,
    FriendsComponent,
  ],
  imports: [
    BrowserModule,
    FormsModule,
    ReactiveFormsModule,
    AppRoutingModule
  ],
  providers: [
    PageService,
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
