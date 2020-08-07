import { logintype } from './navbar/logintype';
import { item } from './items/item';
import { Injectable } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http';
import { Observable } from 'rxjs';
import { userBrought } from './items/addcart/userBrought';

@Injectable({
  providedIn: 'root'
})
export class CategoryService {

  constructor(public http:HttpClient) {
  }
  getcategory():Observable<any>{
    return this.http.get("http://localhost:8080/api/category")
  }
  // getcategory():Observable<any>{
  //   return this.http.get("http://localhost:8080/api/category")
  // }
  postreqforitems(category:string):Observable<any>{
    return this.http.get("http://localhost:8080/api/item/"+category)
  }
  postnewitems(post:item):Observable<any>{
    return this.http.post("http://localhost:8080/api/new-item",post)
  }
  display_quantity(email):Observable<any>{
    return this.http.get("http://localhost:8080/api/addentity/"+email)
  }
  newuser(post:logintype):Observable<any>{
    return this.http.post("http://localhost:8080/api/newLogin",post)
  }
  checklogin(email,pass):Observable<any>{
    return this.http.get("http://localhost:8080/api/userinfo/"+email+"/"+pass)
  }
  displaycart(email):Observable<any>{
    return this.http.get("http://localhost:8080/api/displaycart/"+email)
  }
  updatequantity(quantity):Observable<any>{
    return this.http.post("http://localhost:8080/api/quantity",quantity)
  }
  delete_quantity(email,id):Observable<any>{
    return this.http.get("http://localhost:8080/api/del-quantity/"+email+"/"+id)
  }
  delete_all(email):Observable<any>{
    return this.http.get("http://localhost:8080/api/del-all/"+email)
  }
 
}
