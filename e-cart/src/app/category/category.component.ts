import { CategoryService } from './../category.service';
import { Component, OnInit } from '@angular/core';
import { categorytype } from '../categorytype';
import { item } from '../items/item';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-category',
  templateUrl: './category.component.html',
  styleUrls: ['./category.component.css']
})
export class CategoryComponent implements OnInit {
  public category:categorytype[]
  public items:item[]
  public receiveEmail;
  public expression2:boolean=true
  constructor(private categoryData:CategoryService,
    public ActivatedRoute:ActivatedRoute,
    public routes:Router) {
      this.getemail();
     }

  ngOnInit() {
    // this.expression2= true
    this.categoryData.getcategory().subscribe(data => {
      this.category = data;
      // console.log(data)
    })
    this.routes.routeReuseStrategy.shouldReuseRoute=()=>{
      return false;
    };
  }
  reciveuid(category) {
    this.expression2= false
    this.routes.navigate(["/items"],{
      queryParams:{"useremail":this.receiveEmail,"category":category}
    })
  }
  getemail(){
    this.ActivatedRoute.queryParams.subscribe(data=>{
      this.receiveEmail=data["useremail"];
      // console.log(this.receiveEmail)
    })
  }

}
