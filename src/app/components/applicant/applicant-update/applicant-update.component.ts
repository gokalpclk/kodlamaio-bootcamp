import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { ApplicantService } from './../../../services/applicant/applicant.service';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-applicant-update',
  templateUrl: './applicant-update.component.html',
  styleUrls: ['./applicant-update.component.css'],
})
export class ApplicantUpdateComponent implements OnInit {
  applicantUpdateForm: FormGroup;

  constructor(
    private applicantService: ApplicantService,
    private formBuilder: FormBuilder,
    private activatedRoute: ActivatedRoute
  ) {}

  ngOnInit(): void {}

  createApplicantUpdateForm() {
    this.applicantUpdateForm = this.formBuilder.group({
      firstName: [[''], Validators.required],
      lastName: [[''], Validators.required],
      email: [[''], Validators.required],
      password: [[''], Validators.required],
      phoneNumber: [[''], Validators.required],
      address: [[''], Validators.required],
      city: [[''], Validators.required],
      country: [[''], Validators.required],
      zipCode: [[''], Validators.required],
      birthDate: [[''], Validators.required],
    });
  }

  updateApplicant() {}
}
