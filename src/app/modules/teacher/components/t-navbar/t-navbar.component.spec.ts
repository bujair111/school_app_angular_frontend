import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TNavbarComponent } from './t-navbar.component';

describe('TNavbarComponent', () => {
  let component: TNavbarComponent;
  let fixture: ComponentFixture<TNavbarComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TNavbarComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(TNavbarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
