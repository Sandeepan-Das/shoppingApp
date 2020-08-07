import { ItemsComponent } from './items/items.component';
import { CategoryService } from './category.service';
import { Component, OnInit } from '@angular/core';
import { categorytype } from './categorytype';
import { item } from './items/item';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  public expression2= true
  ngOnInit() {
    }
  category(){
    this.expression2= false
  }
}
