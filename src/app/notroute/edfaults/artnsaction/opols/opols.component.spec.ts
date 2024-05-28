import { ComponentFixture, TestBed } from '@angular/core/testing';

import { OpolsComponent } from './opols.component';

describe('OpolsComponent', () => {
  let component: OpolsComponent;
  let fixture: ComponentFixture<OpolsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [OpolsComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(OpolsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
