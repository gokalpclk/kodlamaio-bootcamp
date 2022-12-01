import { ApplicantService } from './../../../services/applicant/applicant.service';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-applicant-add',
  templateUrl: './applicant-add.component.html',
  styleUrls: ['./applicant-add.component.css'],
})
export class ApplicantAddComponent implements OnInit {
  addApplicantForm: FormGroup;

  constructor(
    private applicantService: ApplicantService,
    private formBuilder: FormBuilder
  ) {}

  ngOnInit(): void {
    this.createAddApplicantForm();
  }

  createAddApplicantForm() {
    this.addApplicantForm = this.formBuilder.group({
      firstName: ['', Validators.required],
      lastName: ['', Validators.required],
      email: ['', Validators.required],
      password: ['', Validators.required],
      nationalIdentity: ['', Validators.required],
      dateOfBirth: ['', Validators.required],
      about: ['', Validators.required],
    });
  }
  addApplicant() {
    if (this.addApplicantForm.valid) {
      let applicantModel = Object.assign({}, this.addApplicantForm.value);
      this.applicantService.addApplicant(applicantModel).subscribe();
      console.log(applicantModel)
    }
  }
}
