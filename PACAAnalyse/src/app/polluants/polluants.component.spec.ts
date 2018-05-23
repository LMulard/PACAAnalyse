import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PolluantsComponent } from './polluants.component';

describe('PolluantsComponent', () => {
  let component: PolluantsComponent;
  let fixture: ComponentFixture<PolluantsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PolluantsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PolluantsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
