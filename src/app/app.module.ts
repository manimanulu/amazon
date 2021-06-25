import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { FreshComponent } from './fresh/fresh.component';
import { PantryComponent } from './pantry/pantry.component';
import { MobilesComponent } from './mobiles/mobiles.component';
import { FashionComponent } from './fashion/fashion.component';
import { ElectronicsComponent } from './electronics/electronics.component';
import { EssentialsComponent } from './essentials/essentials.component';
import { AppliancesComponent } from './appliances/appliances.component';
import { OthersComponent } from './others/others.component';
import { PagenotfoundComponent } from './pagenotfound/pagenotfound.component';
import { LoginComponent } from './login/login.component'
import { SignupComponent } from './login/signup/signup.component';
import { SigninComponent } from './login/signin/signin.component';
import { LogoutComponent } from './login/logout/logout.component';
import { CheckoutComponent } from './login/checkout/checkout.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    FreshComponent,
    PantryComponent,
    MobilesComponent,
    FashionComponent,
    ElectronicsComponent,
    EssentialsComponent,
    AppliancesComponent,
    OthersComponent,
    PagenotfoundComponent,
    LoginComponent,
    SignupComponent,
    SigninComponent,
    LogoutComponent,
    CheckoutComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
