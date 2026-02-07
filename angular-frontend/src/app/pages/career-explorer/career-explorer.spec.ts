import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CareerExplorer } from './career-explorer';

describe('CareerExplorer', () => {
  let component: CareerExplorer;
  let fixture: ComponentFixture<CareerExplorer>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CareerExplorer]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CareerExplorer);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
