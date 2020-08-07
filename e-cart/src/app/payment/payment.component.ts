import { CategoryService } from './../category.service';
import { ActivatedRoute ,Router} from '@angular/router';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-payment',
  templateUrl: './payment.component.html',
  styleUrls: ['./payment.component.css']
})
export class PaymentComponent implements OnInit {
  public email
  public FirstName;
  public newFirstName;
  public LastName;
  public newLastName;
  public Email;
  public expression = false;
  public city;
  public newcity;
  public state;
  public newstate;
  public Address;
  public newAddress;
  public Lane;
  public newLane;
  public alerts2=false
  public alerts3=false
  public zip;
  public newzip;
  public cartItem = []
  public total=0
  public count=0
  public expression3:boolean =false
  constructor(private ActivatedRoute: ActivatedRoute, private service: CategoryService,private Router:Router) { }

  ngOnInit() {
    this.ActivatedRoute.queryParams.subscribe(data => {
      this.email = data["useremail"]
      console.log(this.email)
    })
    this.service.displaycart(this.email).subscribe(data => {

      this.FirstName = data.Fname
      this.LastName = data.Lname
      this.city = data.city
      this.zip = data.zip
      this.state = data.state
      this.Address = data.Address
      this.Lane = data.Lane
      // this.Email = data.email
      this.cartItem = data.cartItem
      if(data.cartItem.length==0){
        this.alerts3=true;
      }else{
        data.cartItem.forEach(element => {
          this.total += (element.refid.price*element.quantity)
        });

      }
    })
  }
  insert_data(){
    this.newFirstName = this.FirstName
      this.newLastName = this.LastName
      this.newcity = this.city
      this.newzip = this.zip
      this.newstate = this.state
      this.newAddress = this.Address
      this.newLane = this.Lane
  }
  remove_data(){
    this.newFirstName = ""
      this.newLastName = ""
      this.newcity = ""
      this.newzip = ""
      this.newstate = ""
      this.newAddress = ""
      this.newLane = ""
  }
  autofill() {
    this.count++
    if(this.count%2==0){
      this.remove_data()
      this.expression=false;
    }else{
      this.insert_data()    
      this.expression = true;
    }
  }
  buy(){
    if(this.newFirstName!=undefined  &&   this.newLastName!=undefined && this.newAddress!=undefined && this.newcity!=undefined && this.newstate!=undefined && this.newzip!=undefined){
      console.log("A")
      this.service.delete_all(this.email).subscribe(data=>{
  
      })
      this.expression3 = true;
    }else{
      this.alerts2= true;
    }
    
  }
  restore(){
    this.alerts2=false
    this.alerts3=false
  }
  home(){
    this.Router.navigateByUrl("/displaycart",{skipLocationChange: true}).then(()=>{
        
      this.Router.navigate(["/"],{
        queryParams:{"useremail":this.email}
      })
    })
    

  }

}
