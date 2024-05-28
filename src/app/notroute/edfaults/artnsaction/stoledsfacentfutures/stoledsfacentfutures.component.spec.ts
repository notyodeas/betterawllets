import { ComponentFixture, TestBed } from '@angular/core/testing';

import { StoledsfacentfuturesComponent } from './stoledsfacentfutures.component';

describe('StoledsfacentfuturesComponent', () => {
  let component: StoledsfacentfuturesComponent;
  let fixture: ComponentFixture<StoledsfacentfuturesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [StoledsfacentfuturesComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(StoledsfacentfuturesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
