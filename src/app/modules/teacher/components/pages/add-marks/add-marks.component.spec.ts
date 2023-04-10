import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AddMarksComponent } from './add-marks.component';

describe('AddMarksComponent', () => {
  let component: AddMarksComponent;
  let fixture: ComponentFixture<AddMarksComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AddMarksComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AddMarksComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
