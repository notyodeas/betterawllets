import { ComponentFixture, TestBed } from '@angular/core/testing';

import { OtosXeahcngesComponent } from './otos-xeahcnges.component';

describe('OtosXeahcngesComponent', () => {
  let component: OtosXeahcngesComponent;
  let fixture: ComponentFixture<OtosXeahcngesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [OtosXeahcngesComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(OtosXeahcngesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
