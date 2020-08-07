import { CategoryService } from './../category.service';
import { ActivatedRoute, Router } from '@angular/router';
import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-displaycart',
  templateUrl: './displaycart.component.html',
  styleUrls: ['./displaycart.component.css']
})
export class DisplaycartComponent implements OnInit {
public cartitem=[]
public email;
public expression 
  constructor(public ActivatedRoute:ActivatedRoute,private service:CategoryService, private Router:Router) { }

  ngOnInit() {
    // this.cartitem=this.totalInfo.cartItem
    // console.log(this.totalInfo)
    this.ActivatedRoute.queryParams.subscribe(data=>{
      this.email=data["useremail"]
    })
    this.service.displaycart(this.email).subscribe(data=>{
      console.log(data,"display")
      if(data.cartItem.length==0){
        this.expression=false;
      }else{
        this.expression=true;
        this.cartitem=data.cartItem

      }
    })
  }
  delete(id){
    console.log(id)
    this.service.delete_quantity(this.email,id).subscribe(data=>{
      console.log("delete")
      this.Router.navigateByUrl("/",{skipLocationChange: true}).then(()=>{
        
        this.Router.navigate(["/displaycart"],{
          queryParams:{"useremail":this.email}
        })
      })
    })
  }
  move(category){
    this.Router.navigate(["/items"],{
      queryParams:{"useremail":this.email,"category":category}
    })
  }
  payment(){
    this.Router.navigate(["/payment"],{
      queryParams:{"useremail":this.email}
    })
  }
}
