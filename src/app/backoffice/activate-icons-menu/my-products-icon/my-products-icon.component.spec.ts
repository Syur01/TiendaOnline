import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MyProductsIconComponent } from './my-products-icon.component';

describe('MyProductsIconComponent', () => {
  let component: MyProductsIconComponent;
  let fixture: ComponentFixture<MyProductsIconComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [MyProductsIconComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(MyProductsIconComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
