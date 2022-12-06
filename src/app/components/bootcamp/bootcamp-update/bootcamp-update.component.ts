import { ToastrService } from 'ngx-toastr';
import { BootcampService } from './../../../services/bootcamp/bootcamp.service';
import { IInstructorAllModel } from 'src/app/models/instructor/request/InstructorAllModel';
import { IBootcampAllModel } from 'src/app/models/bootcamp/request/BootcampAllModel';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { InstructorService } from 'src/app/services/instructor/instructor.service';

@Component({
  selector: 'app-bootcamp-update',
  templateUrl: './bootcamp-update.component.html',
  styleUrls: ['./bootcamp-update.component.css'],
})
export class BootcampUpdateComponent implements OnInit {
  bootcampUpdateForm: FormGroup;
  getBootcamp: IBootcampAllModel;
  bootcamps: IBootcampAllModel[] = [];
  instructors: IInstructorAllModel[];

  constructor(
    private bootcampService: BootcampService,
    private formBuilder: FormBuilder,
    private activatedRoute: ActivatedRoute,
    private instructorService: InstructorService,
    private toastrService: ToastrService,
    private router: Router
  ) {}

  ngOnInit(): void {
    this.getBootcampById();
    this.getAllInstructors();
  }

  getAllInstructors() {
    this.instructorService.getAllInstructors().subscribe((data) => {
      this.instructors = data;
    });
  }

  getBootcampById() {
    this.bootcampService
      .getBootcampById(this.activatedRoute.snapshot.params['id'])
      .subscribe((data) => {
        this.getBootcamp = data;
        this.createUpdateBootcampForm();
      });
  }

  createUpdateBootcampForm() {
    this.bootcampUpdateForm = this.formBuilder.group({
      instructorId: [this.getBootcamp.instructorId, Validators.required],
      name: [this.getBootcamp.name, Validators.required],
      dateStart: [this.getBootcamp.dateStart, Validators.required],
      dateEnd: [this.getBootcamp.dateEnd, Validators.required],
      state: [this.getBootcamp.state, Validators.required],
      instructorName: [this.getBootcamp.instructorName, Validators.required],
    });
  }

  updateBootcamp() {
    if (this.bootcampUpdateForm.valid) {
      let bootcampModel = Object.assign({}, this.bootcampUpdateForm.value);
      this.instructorService.getInstructorById(bootcampModel.instructorId).subscribe(data=>{
        bootcampModel.instructorName=data.firstName+" "+data.lastName
        console.log("instructorId"+bootcampModel.instructorName)
        this.bootcampUpdateForm.reset();
       this.bootcampService
        .updateBootcamp(this.getBootcamp.id, bootcampModel)
        .subscribe((data) => {
          this.router.navigate(['admin-panel/bootcamp-list']);
          this.toastrService.success('Bootcamp updated');
          console.log(data, ' güncellendi');
        });
      })
      
    } else {
      this.toastrService.error('Form not valid', 'Error');
    }
  }

  deleteBootcamp() {
    this.bootcampService
      .deleteBootcamp(this.getBootcamp.id)
      .subscribe((data) => {
        this.router.navigate(['admin-panel/bootcamp-list']);
        this.toastrService.info('Silme Başarılı');
      });
  }
}
