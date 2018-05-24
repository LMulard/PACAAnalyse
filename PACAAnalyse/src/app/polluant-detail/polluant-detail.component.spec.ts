import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PolluantDetailComponent } from './polluant-detail.component';

describe('PolluantDetailComponent', () => {
  let component: PolluantDetailComponent;
  let fixture: ComponentFixture<PolluantDetailComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PolluantDetailComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PolluantDetailComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
