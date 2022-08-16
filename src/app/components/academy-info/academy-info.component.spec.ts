import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AcademyInfoComponent } from './academy-info.component';

describe('AcademyInfoComponent', () => {
  let component: AcademyInfoComponent;
  let fixture: ComponentFixture<AcademyInfoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AcademyInfoComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AcademyInfoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
