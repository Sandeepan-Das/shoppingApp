import { item } from './../item';
import { CategoryService } from './../../category.service';
import { Component, OnInit, Input } from '@angular/core';
import { userBrought } from './userBrought';

@Component({
  selector: 'app-addcart',
  templateUrl: './addcart.component.html',
  styleUrls: ['./addcart.component.css']
})
export class AddcartComponent implements OnInit {
  public expression = true;
  public quantity;
  public nameofprod;
  public priceofProd;
  public alerts = false;
  public data;
  public userreq = new userBrought()
  constructor(private upaquantity: CategoryService) { }

  ngOnInit() {
  }
  @Input() importid
  checklogin() {
    if (this.username == undefined) {
      this.alerts = true
    }
    else {
      this.alerts = false;
      this.expression = false;
      this.userreq.email = this.username
      this.userreq.price = this.importid.price;
      this.userreq.name = this.importid.name;
      this.userreq.itemid = this.importid._id


      
      let index
      this.upaquantity.display_quantity(this.username).subscribe(data => {
        console.log(data)
        if (data == null) {
          console.log("null")
          this.update()
          this.quantity = 0;
        } else {


          for ( index = 0; index < data.length; index++) {

            if (data[index].refid == this.importid._id) {
              console.log("match",index)
              this.quantity = data[index].quantity
              
              console.log(this.quantity,"inside")
             this.update()
             break
            }
            
          }
          if (index == data.length) {
            console.log("new")
            this.quantity = 0;
            this.update()
          }
        }
      })
      

    }
  }

  @Input() username
  add() {
    this.quantity++;

    // this.userreq.quantity = this.quantity;
    this.update();


  }
  sub() {
    this.quantity = this.quantity - 1;

    this.update();
  }
  update() {

    this.userreq.quantity = this.quantity;
    console.log(this.userreq.quantity)
    console.log(this.quantity)
    this.upaquantity.updatequantity(this.userreq).subscribe(data => {

    })

  }
  restore() {
    this.alerts = false;
  }

}
