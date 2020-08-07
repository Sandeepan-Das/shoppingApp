import { FormsModule } from '@angular/forms';
import { CategoryService } from './category.service';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';


import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ItemsComponent } from './items/items.component';
import { HttpClientModule } from '@angular/common/http';
import { AddcartComponent } from './items/addcart/addcart.component';
import { NavbarComponent } from './navbar/navbar.component';
import { DisplaycartComponent } from './displaycart/displaycart.component';
import { CategoryComponent } from './category/category.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatIconModule,MatToolbarModule } from "@angular/material";
import { PaymentComponent } from './payment/payment.component'
// import { routing } from './app-routing.module';


@NgModule({
  declarations: [
    AppComponent,
    ItemsComponent,
    AddcartComponent,
    NavbarComponent,
    DisplaycartComponent,
    CategoryComponent,
    ItemsComponent,
    AddcartComponent,
    PaymentComponent,



  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    BrowserAnimationsModule,
    MatIconModule,
    MatToolbarModule
  ],
  providers: [CategoryService],
  bootstrap: [AppComponent]
})
export class AppModule { }
