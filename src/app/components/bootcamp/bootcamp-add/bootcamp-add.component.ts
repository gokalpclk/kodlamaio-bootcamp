import { InstructorService } from 'src/app/services/instructor/instructor.service';
import { IInstructorAllModel } from 'src/app/models/instructor/request/InstructorAllModel';
import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
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
  instructors: IInstructorAllModel[];
  constructor(
    private bootcampService: BootcampService,
    private formBuilder: FormBuilder,
    private router: Router,
    private toastrService: ToastrService,
    private instructorService: InstructorService
  ) {}

  ngOnInit(): void {
    this.createAddBootcampForm();
    this.getAllInstructors();
  }

  getAllInstructors() {
    this.instructorService.getAllInstructors().subscribe((data) => {
      this.instructors = data;
    });
  }

  getInstructorById(id:number) {
    this.instructorService.getInstructorById(id).subscribe((data) => {
      return data.firstName
    });
  }

  createAddBootcampForm() {
    this.addBootcampForm = this.formBuilder.group({
      instructorId: ['', Validators.required],
      name: ['', Validators.required],
      dateStart: ['', Validators.required],
      dateEnd: ['', Validators.required],
      state: ['', Validators.required],
      explanation: ['', Validators.required]
    });
  }

  addBootcamp() {
    if (this.addBootcampForm.valid) {
      let bootcampModel:IBootcampAllModel = Object.assign({}, this.addBootcampForm.value);
      this.instructorService.getInstructorById(bootcampModel.instructorId).subscribe((data) => {
        bootcampModel.instructorName = data.firstName + " " + data.lastName
        console.log(bootcampModel.instructorName)
        this.bootcampService.addBootcamp(bootcampModel).subscribe((data) => {
          console.log(data)
          this.addBootcampForm.reset();
          this.router.navigate(['admin-panel/bootcamp-list']);
          this.toastrService.success('Ekleme İşlemi Başarılı');
        });
      });
      

    } else {
      this.toastrService.error('Formunuz Eksik', 'Dikkat');
    }
  }
}
