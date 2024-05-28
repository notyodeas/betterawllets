import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NotEdpthComponent } from './not-edpth.component';

describe('NotEdpthComponent', () => {
  let component: NotEdpthComponent;
  let fixture: ComponentFixture<NotEdpthComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [NotEdpthComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(NotEdpthComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
