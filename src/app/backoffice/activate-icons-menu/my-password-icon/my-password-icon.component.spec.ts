import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MyPasswordIconComponent } from './my-password-icon.component';

describe('MyPasswordIconComponent', () => {
  let component: MyPasswordIconComponent;
  let fixture: ComponentFixture<MyPasswordIconComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [MyPasswordIconComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(MyPasswordIconComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
