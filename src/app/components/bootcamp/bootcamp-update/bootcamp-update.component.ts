import { BootcampService } from './../../../services/bootcamp/bootcamp.service';
import { IInstructorAllModel } from 'src/app/models/instructor/request/InstructorAllModel';
import { IBootcampAllModel } from 'src/app/models/bootcamp/request/BootcampAllModel';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { InstructorService } from 'src/app/services/instructor/instructor.service';
import { IBootcampDeleteRequestModel } from 'src/app/models/bootcamp/request/BootcampDeleteRequestModel';

@Component({
  selector: 'app-bootcamp-update',
  templateUrl: './bootcamp-update.component.html',
  styleUrls: ['./bootcamp-update.component.css'],
})
export class BootcampUpdateComponent implements OnInit {
  bootcampUpdateForm: FormGroup;
  bootcamp: IBootcampAllModel;

  instracters: IInstructorAllModel[];
  constructor(
    private bootcampService: BootcampService,
    private formBuilder: FormBuilder,
    private activatedRoute: ActivatedRoute,
    private instructorService: InstructorService
  ) {}

  ngOnInit(): void {
    this.activatedRoute.params.subscribe((params) => {
      this.loadBootcampDetail(params['id']);
    });
    this.instructorService.getAllInstructors();
  }

  loadBootcampDetail(id: number) {
    this.bootcampService.getBootcampDetail(id).subscribe((data) => {
      this.bootcamp = data;
      this.createBootcampForm();
    });
  }

  createBootcampForm() {
    this.bootcampUpdateForm = this.formBuilder.group({
      id: [this.bootcamp.id, Validators.required],
      instructorId: [this.bootcamp.instructorId, Validators.required],
      name: [this.bootcamp.name, Validators.required],
      dateStart: [this.bootcamp.dateStart, Validators.required],
      dateEnd: [this.bootcamp.dateEnd, Validators.required],
      state: [this.bootcamp.state, Validators.required],
    });
  }

  updateBootcamp() {
    this.bootcampService
      .updateBootcamp(
        this.activatedRoute.snapshot.params['id'],
        this.bootcampUpdateForm.value
      )
      .subscribe((data) => console.log('Güncellendi'));
  }

  deleteBootcamp(id: number) {
    this.bootcampService.deleteBootcamp(id);
  }
}
