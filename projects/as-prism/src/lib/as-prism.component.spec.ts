import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AsPrismComponent } from './as-prism.component';

describe('AsPrismComponent', () => {
  let component: AsPrismComponent;
  let fixture: ComponentFixture<AsPrismComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AsPrismComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AsPrismComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
