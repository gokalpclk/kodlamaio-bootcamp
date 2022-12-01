import { IInstructorAllModel } from './../../../models/instructor/request/InstructorAllModel';
import { ActivatedRoute } from '@angular/router';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { Component, OnInit } from '@angular/core';
import { InstructorService } from 'src/app/services/instructor/instructor.service';

@Component({
  selector: 'app-instructor-update',
  templateUrl: './instructor-update.component.html',
  styleUrls: ['./instructor-update.component.css'],
})
export class InstructorUpdateComponent implements OnInit {
  instructorUpdateForm: FormGroup;
  instructorById: IInstructorAllModel;
  constructor(
    private formBuilder: FormBuilder,
    private instructorService: InstructorService,
    private activatedRoute: ActivatedRoute
  ) {}

  ngOnInit(): void {
    this.getInstructorById();
  }

  getInstructorById() {
    this.instructorService
      .getInstructorById(this.activatedRoute.snapshot.params['id'])
      .subscribe((data) => {
        this.instructorById = data;
        this.createUpdateInstructorForm();
      });
  }

  createUpdateInstructorForm() {
    this.instructorUpdateForm = this.formBuilder.group({
      firstName: [this.instructorById.firstName, Validators.required],
      lastName: [this.instructorById.lastName, Validators.required],
      email: [this.instructorById.email, Validators.required],
      password: [this.instructorById.password, Validators.required],
      nationalIdentity: [
        this.instructorById.nationalIdentity,
        Validators.required,
      ],
      dateOfBirth: [this.instructorById.dateOfBirth, Validators.required],
      companyName: [this.instructorById.companyName, Validators.required],
    });
  }

  updateInstructor(id: number) {
    if (this.instructorUpdateForm.valid) {
      let instructorModel = Object.assign({}, this.instructorUpdateForm.value);
      this.instructorService.updateInstructor(id, instructorModel);
    }
  }
  deleteInstructor(id: number) {
    this.instructorService.deleteInstructor(id);
  }
}
