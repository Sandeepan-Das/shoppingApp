import { ActivatedRoute, ParamMap } from '@angular/router';
import { CategoryService } from './../category.service';
import { Component, OnInit, Input } from '@angular/core';
import { item } from './item';
import { AddcartComponent } from './addcart/addcart.component';
// import{img} from "../../assets/img/Apple_logo.png"
@Component({
  selector: 'app-items',
  templateUrl: './items.component.html',
  styleUrls: ['./items.component.css']
})
export class ItemsComponent implements OnInit {
  public firstimage = "assets/img/Microsoft_logo.png"
  public item: item[]
  public postitems = new item()
  public itemid
  public price = ""
  public displayprice = ""
  public name = ""
  public photopath = ""
  public quantity: AddcartComponent;
  public value;
  public checkAdmin: boolean = false;
  public items: item[];
  public category;
  public Category;
  public useremail;
  constructor(private itemData: CategoryService,
    private ActivatedRoute: ActivatedRoute) { }



  ngOnInit() {

    this.ActivatedRoute.queryParams.subscribe((data) => {
      this.category = data["category"];
      this.useremail = data["useremail"]
    })
    this.itemData.postreqforitems(this.category).subscribe(data2 => {
      // console.log(this.category,"A")
      this.items = data2;
    })
    if (this.useremail == "dwd") {
      this.checkAdmin = true;
    }

  }

  save() {
    // console.log(this.event,"hello")
    this.postitems.itemid = this.itemid
    this.postitems.name = this.name
    this.postitems.photopath = this.photopath
    this.postitems.price = this.price
    this.postitems.category = this.Category
    this.postitems.displayprice = this.displayprice
    this.itemData.postnewitems(this.postitems).subscribe(data => {

    })
  }
  cquantity() {
    this.value = this.quantity.quantity;
    // console.log(this.value);
  }

}
