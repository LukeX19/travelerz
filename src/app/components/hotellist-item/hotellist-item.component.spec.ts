import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HotellistItemComponent } from './hotellist-item.component';

describe('HotellistItemComponent', () => {
  let component: HotellistItemComponent;
  let fixture: ComponentFixture<HotellistItemComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ HotellistItemComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(HotellistItemComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
