import { PaymentComponent } from './payment/payment.component';
import { AddcartComponent } from './items/addcart/addcart.component';
import { ItemsComponent } from './items/items.component';
import { DisplaycartComponent } from './displaycart/displaycart.component';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { CategoryComponent } from './category/category.component';
import { config } from 'rxjs';

const routes: Routes = [
  {path: 'displaycart', component: DisplaycartComponent},
  {path: '', component: CategoryComponent,
    children:[{
      path:"items", component:ItemsComponent,
      
    }]
},
  {path:"",redirectTo:"",pathMatch:"full"},
  {path:"payment",component:PaymentComponent}
];

@NgModule({
  imports:[RouterModule.forRoot(routes)],
  exports :[RouterModule]
})
// export const routing = RouterModule.forRoot(routes);
export class AppRoutingModule { DisplaycartComponent ; CategoryComponent ;ItemsComponent; PaymentComponent}
