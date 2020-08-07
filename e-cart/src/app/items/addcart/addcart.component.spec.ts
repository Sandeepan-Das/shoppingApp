import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { CategoryService } from './../../category.service';
import { AddcartComponent } from './addcart.component';

describe('AddcartComponent', () => {
  let component: AddcartComponent;
  
  component = new AddcartComponent(new CategoryService());
  

  

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
