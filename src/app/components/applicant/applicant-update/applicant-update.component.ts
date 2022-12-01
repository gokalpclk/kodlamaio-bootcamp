import { IApplicantUpdateRequestModel } from './../../../models/applicant/request/ApplicantUpdateRequestModel';
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
  getApplicant: IApplicantUpdateRequestModel;
  constructor(
    private applicantService: ApplicantService,
    private formBuilder: FormBuilder,
    private activatedRoute: ActivatedRoute
  ) {}

  ngOnInit(): void {
    this.getApplicantById();
  }
  getApplicantById() {
    this.applicantService
      .getApplicantById(this.activatedRoute.snapshot.params['id'])
      .subscribe((data) => {
        this.getApplicant = data;
        this.createUpdateApplicantForm();
      });
  }
  createUpdateApplicantForm() {
    this.applicantUpdateForm = this.formBuilder.group({
      firstName: [this.getApplicant.firstName, Validators.required],
      lastName: [this.getApplicant.lastName, Validators.required],
      email: [this.getApplicant.email, Validators.required],
      password: [this.getApplicant.password, Validators.required],
      nationalIdentity: [
        this.getApplicant.nationalIdentity,
        Validators.required,
      ],
      dateOfBirth: [this.getApplicant.dateOfBirth, Validators.required],
      about: [this.getApplicant.about, Validators.required],
    });
  }

  updateApplicant() {
    if (this.applicantUpdateForm.valid) {
      this.applicantService
        .updateApplicant(
          this.activatedRoute.snapshot.params['id'],
          this.applicantUpdateForm.value
        )
        .subscribe();
    }
  }
  deleteApplicant(id: number) {
    this.applicantService.deleteApplicant(id).subscribe();
    console.log(this.getApplicant.id);
  }
}
