import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FleuvesComponent } from './fleuves.component';

describe('FleuvesComponent', () => {
  let component: FleuvesComponent;
  let fixture: ComponentFixture<FleuvesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FleuvesComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FleuvesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
