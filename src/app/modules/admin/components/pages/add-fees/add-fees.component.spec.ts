import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AddFeesComponent } from './add-fees.component';

describe('AddFeesComponent', () => {
  let component: AddFeesComponent;
  let fixture: ComponentFixture<AddFeesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AddFeesComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AddFeesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
