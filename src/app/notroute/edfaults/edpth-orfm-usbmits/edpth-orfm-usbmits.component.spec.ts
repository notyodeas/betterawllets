import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EdpthOrfmUsbmitsComponent } from './edpth-orfm-usbmits.component';

describe('EdpthOrfmUsbmitsComponent', () => {
  let component: EdpthOrfmUsbmitsComponent;
  let fixture: ComponentFixture<EdpthOrfmUsbmitsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [EdpthOrfmUsbmitsComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(EdpthOrfmUsbmitsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
