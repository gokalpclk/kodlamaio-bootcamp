import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { Component, OnInit } from '@angular/core';
import { InstructorService } from 'src/app/services/instructor/instructor.service';

@Component({
  selector: 'app-instructor-add',
  templateUrl: './instructor-add.component.html',
  styleUrls: ['./instructor-add.component.css'],
})
export class InstructorAddComponent implements OnInit {
  instructorAddForm: FormGroup;
  constructor(
    private instructorService: InstructorService,
    private formBuilder: FormBuilder
  ) {}

  ngOnInit(): void {
    this.createInstructorAddForm();
  }

  createInstructorAddForm() {
    this.instructorAddForm = this.formBuilder.group({
      firstName: ['', Validators.required],
      lastName: ['', Validators.required],
      email: ['', Validators.required],
      password: ['', Validators.required],
      nationalIdentity: ['', Validators.required],
      dateOfBirth: ['', Validators.required],
      companyName: ['', Validators.required],
    });
  }

  addInstructor() {
    if (this.instructorAddForm.valid) {
      let instructorModel = Object.assign({}, this.instructorAddForm.value);
      this.instructorService.addInstructor(instructorModel);
    }
  }
}
