import { InstructorService } from './../../../services/instructor/instructor.service';
import { BootcampService } from './../../../services/bootcamp/bootcamp.service';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { IBootcampAllModel } from 'src/app/models/bootcamp/request/BootcampAllModel';

@Component({
  selector: 'app-bootcamp-add',
  templateUrl: './bootcamp-add.component.html',
  styleUrls: ['./bootcamp-add.component.css'],
})
export class BootcampAddComponent implements OnInit {
  addBootcampForm: FormGroup;
  bootcamp: IBootcampAllModel[] = [];
  constructor(
    private bootcampService: BootcampService,
    private formBuilder: FormBuilder
  ) {}

  ngOnInit(): void {
    this.createAddBootcampForm();
  }

  createAddBootcampForm() {
    this.addBootcampForm = this.formBuilder.group({
      instructorId: [[''], [Validators.required]],
      name: [[''], [Validators.required]],
      dateStart: [[''], [Validators.required]],
      dateEnd: [[''], [Validators.required]],
      state: [[''], [Validators.required]],
    });
  }

  addBootcamp() {
    if (this.addBootcampForm.valid) {
      let bootcampModel = Object.assign({}, this.addBootcampForm.value);
      this.bootcampService.addBootcamp(bootcampModel);
    }
  }
}
