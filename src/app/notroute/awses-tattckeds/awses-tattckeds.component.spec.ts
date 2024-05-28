import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AwsesTattckedsComponent } from './awses-tattckeds.component';

describe('AwsesTattckedsComponent', () => {
  let component: AwsesTattckedsComponent;
  let fixture: ComponentFixture<AwsesTattckedsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [AwsesTattckedsComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(AwsesTattckedsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
