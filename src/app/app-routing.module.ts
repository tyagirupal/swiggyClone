import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { BiryaniComponent } from './biryani/biryani.component';
import { CartComponent } from './cart/cart.component';
import { LoginComponent } from './login/login.component';

const routes: Routes = [
  { path: '', redirectTo: '/home', pathMatch: 'full' },  
  {path:'home',component:HomeComponent},
  {path:'login', component:LoginComponent},
  {path:'cart', component:CartComponent},

  { path: 'biryani', component: BiryaniComponent },  
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
