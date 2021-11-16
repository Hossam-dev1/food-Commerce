import { SignupComponent } from './signup/signup.component';
import { LoginComponent } from './login/login.component';
import { CartComponent } from './cart/cart.component';
import { ContactComponent } from './contact/contact.component';
import { OurProductsComponent } from './our-products/our-products.component';
import { HomeComponent } from './home/home.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = 
[
  {path:'',redirectTo:'home',pathMatch:'full'},
  {path:'home', component:HomeComponent},
  {path:'prodcuts', component:OurProductsComponent},
  {path:'contact', component:ContactComponent},
  {path:'cart', component:CartComponent},
  {path:'login', component:LoginComponent},
  {path:'signup', component:SignupComponent},


  {path:'**', component:HomeComponent},

  


];

@NgModule({
    imports: [RouterModule.forRoot(routes , { useHash: true }) ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
