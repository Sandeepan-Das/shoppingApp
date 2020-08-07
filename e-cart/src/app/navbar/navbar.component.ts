import { CategoryService } from './../category.service';
import { logintype } from './logintype';
import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
// import { EventEmitter } from 'events';
// import {  } from '';


@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {
  public Fname = "Log-In"
  public sign: boolean = false;
  public newFirstName;
  public newLastName;
  public newEmail;
  public newPass;
  public city;
  public state;
  public zip;
  public Address;
  public Lane;
  public checkemail;
  public checkpass;
  public email;
  public alerts: boolean = false
  public login = new logintype();
  public expression = true;
  public passlogin = false;
  public total_cart
  public alerts2: boolean = false
  constructor(private service: CategoryService,
    private router: Router, private ActivatedRoute: ActivatedRoute) { }

  ngOnInit() {
    this.ActivatedRoute.queryParams.subscribe(data => {
      if (data["useremail"] != undefined && this.passlogin == false) {
        this.router.navigate(["/"])
      }
    })

  }
  save() {



    this.login.Fname = this.newFirstName;
    this.login.Lname = this.newLastName;
    this.login.city = this.city;
    this.login.zip = this.zip;
    this.login.state = this.state;
    this.login.Address = this.Address;
    this.login.Lane = this.Lane;
    this.login.email = this.newEmail;
    this.login.password = this.newPass;


    this.service.newuser(this.login).subscribe((data) => {
      console.log("success");
    })

  }

  logincheck() {
    this.alerts = false;
    this.login.email = this.checkemail;
    this.login.password = this.checkpass;
    this.service.checklogin(this.login.email, this.login.password).subscribe((data) => {
      if (data == false) {
        this.alerts = true;
      }
      else {
        this.expression = false;
        console.log(data.Fname);
        this.passlogin = true;
        this.email = data.email
        this.Fname = data.Fname
        this.router.navigate(["/",], {
          queryParams: { "useremail": data.email }
        })

      }
    })
    this.checkemail = ""
    this.checkpass = ""
  }
  restore() {
    this.alerts = false;
    this.alerts2 = false;
  }
  cart() {
    this.router.navigate(["/displaycart"], {
      queryParams: { "useremail": this.email }
    })
  }
  payment() {
    this.router.navigate(["/payment"], {
      queryParams: { "useremail": this.email }
    })
  }
  home(){
    this.router.navigate(["/",], {
      queryParams: { "useremail": this.email }
    })    
  }
  // takeusername(){

  // }
}
