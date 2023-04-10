import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SHeaderComponent } from './s-header.component';

describe('SHeaderComponent', () => {
  let component: SHeaderComponent;
  let fixture: ComponentFixture<SHeaderComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SHeaderComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SHeaderComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
