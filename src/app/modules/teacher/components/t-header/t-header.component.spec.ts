import { ComponentFixture, TestBed } from '@angular/core/testing';

import { THeaderComponent } from './t-header.component';

describe('THeaderComponent', () => {
  let component: THeaderComponent;
  let fixture: ComponentFixture<THeaderComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ THeaderComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(THeaderComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
