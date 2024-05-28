import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AnsckComponent } from './ansck.component';

describe('AnsckComponent', () => {
  let component: AnsckComponent;
  let fixture: ComponentFixture<AnsckComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [AnsckComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(AnsckComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
