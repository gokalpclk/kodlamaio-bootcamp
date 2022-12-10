import { IBootcampAllModel } from 'src/app/models/bootcamp/request/BootcampAllModel';
import { ApplicantService } from './../../../services/applicant/applicant.service';
import { ApplicationStates } from 'src/app/enums/applicationState';
import { ToastrService } from 'ngx-toastr';
import { ApplicationService } from './../../../services/application/application.service';
import { InstructorService } from 'src/app/services/instructor/instructor.service';
import { AuthGuard } from 'src/app/guards/auth.guard';
import { BootcampService } from './../../../services/bootcamp/bootcamp.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-bootcamp-list',
  templateUrl: './bootcamp-list.component.html',
  styleUrls: ['./bootcamp-list.component.css'],
})
export class BootcampListComponent implements OnInit {
  allBootcampsList: IBootcampAllModel[] = [];
  bootcampListByInstructorId: IBootcampAllModel[] = [];
  bootcampModel: IBootcampAllModel;
  selectedBootcamp: IBootcampAllModel;

  constructor(
    private bootcampService: BootcampService,
    public authGuard: AuthGuard,
    private instructorService: InstructorService,
    private applicationService: ApplicationService,
    private toastrService: ToastrService,
    private applicantService: ApplicantService
  ) {}

  ngOnInit(): void {
    this.getAllBootcamps();
  }

  getAllBootcamps() {
    this.bootcampService.getAllBootcamps().subscribe((data) => {
      this.allBootcampsList = data;
    });
  }
  getInstructorById(id: number) {
    this.instructorService.getInstructorById(id).subscribe((data) => {
      console.log(data.firstName);
    });
  }

  getBootcamp(data: any) {
    this.bootcampModel = data;
    this.addApplicantion();
  }
  getBootcampsByInstructorId() {
    this.bootcampService
      .getBootcampsByInstructorId(parseInt(localStorage.getItem('id')))
      .subscribe((data) => {
        this.bootcampListByInstructorId = data;
      });
  }

  addApplicantion() {
    let applicationData = Object.assign({});
    applicationData.bootcampId = this.bootcampModel.id;
    applicationData.bootcampName = this.bootcampModel.name;

    this.applicantService
      .getApplicantById(parseInt(localStorage.getItem('id')))
      .subscribe((data) => {
        applicationData.applicantName = data.firstName + ' ' + data.lastName;

        console.log(applicationData.applicantName);

        applicationData.applicantId = localStorage.getItem('id');
        applicationData.applicationState = ApplicationStates.PENDING;

        console.log(applicationData, 'Application Data');
        this.applicationService
          .addApplication(applicationData)
          .subscribe((data) => {
            this.toastrService.success('Application');
          });
      });
  }

  changeSelected(model) {
    if (this.bootcampModel.state == 1) {
      this.selectedBootcamp = model;
    } else {
      this.toastrService.warning('Application is not active');
    }
  }

  detail(bootcamp: any) {
    console.log('bootcamp detay', bootcamp);
  }
}
