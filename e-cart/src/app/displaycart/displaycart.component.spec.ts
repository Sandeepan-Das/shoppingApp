import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DisplaycartComponent } from './displaycart.component';

describe('DisplaycartComponent', () => {
  let component: DisplaycartComponent;
  let fixture: ComponentFixture<DisplaycartComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DisplaycartComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DisplaycartComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
