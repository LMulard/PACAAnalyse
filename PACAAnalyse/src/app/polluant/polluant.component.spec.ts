import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PolluantComponent } from './polluant.component';

describe('PolluantComponent', () => {
  let component: PolluantComponent;
  let fixture: ComponentFixture<PolluantComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PolluantComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PolluantComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
