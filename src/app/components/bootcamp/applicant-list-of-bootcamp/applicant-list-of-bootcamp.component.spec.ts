import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ApplicantListOfBootcampComponent } from './applicant-list-of-bootcamp.component';

describe('ApplicantListOfBootcampComponent', () => {
  let component: ApplicantListOfBootcampComponent;
  let fixture: ComponentFixture<ApplicantListOfBootcampComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ApplicantListOfBootcampComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ApplicantListOfBootcampComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
