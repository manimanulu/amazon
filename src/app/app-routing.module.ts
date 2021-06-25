import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AppliancesComponent } from './appliances/appliances.component';
import { ElectronicsComponent } from './electronics/electronics.component';
import { EssentialsComponent } from './essentials/essentials.component';
import { FashionComponent } from './fashion/fashion.component';
import { FreshComponent } from './fresh/fresh.component';
import { HomeComponent } from './home/home.component';
import { CheckoutComponent } from './login/checkout/checkout.component';
import { LoginComponent } from './login/login.component';
import { LogoutComponent } from './login/logout/logout.component';
import { SigninComponent } from './login/signin/signin.component';
import { SignupComponent } from './login/signup/signup.component';
import { MobilesComponent } from './mobiles/mobiles.component';
import { OthersComponent } from './others/others.component';
import { PagenotfoundComponent } from './pagenotfound/pagenotfound.component';
import { PantryComponent } from './pantry/pantry.component';

const routes: Routes = [
  {path:'Home',component:HomeComponent},
  {path:'Fresh',component:FreshComponent},
  {path:'Pantry',component:PantryComponent},
  {path:'Mobiles',component:MobilesComponent},
  {path:'Fashion',component:FashionComponent},
  {path:'Electronics',component:ElectronicsComponent},
  {path:'Essentials',component:EssentialsComponent},
  {path:'Appliances',component:AppliancesComponent},
  {path:'Others',component:OthersComponent},
  {path:'login',component:LoginComponent,children:[
    {path:'logout',component:LogoutComponent},
    {path:'signin',component:SigninComponent},
    {path:'signup',component:SignupComponent},
    {path:'checkout',component:CheckoutComponent}
    ]},
  {path:'',redirectTo:'Home',pathMatch:'full'},
  {path:'pagenotfound',component:PagenotfoundComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
