import { ToastrModule, ToastrService } from 'ngx-toastr';
import { ActivatedRoute } from '@angular/router';
import { ApplicationService } from './../../../services/application/application.service';
import { AdminAddComponent } from './../../admin/admin-add/admin-add/admin-add.component';
import { ApplicantService } from './../../../services/applicant/applicant.service';
import { InstructorService } from 'src/app/services/instructor/instructor.service';
import { AuthGuard } from 'src/app/guards/auth.guard';
import { IBootcampAllModel } from './../../../models/bootcamp/request/BootcampAllModel';
import { BootcampService } from './../../../services/bootcamp/bootcamp.service';
import { Component, OnInit } from '@angular/core';
import { map, VirtualTimeScheduler, Observable } from 'rxjs';

@Component({
  selector: 'app-bootcamp-list',
  templateUrl: './bootcamp-list.component.html',
  styleUrls: ['./bootcamp-list.component.css'],
})
export class BootcampListComponent implements OnInit {
  allBootcampsList: IBootcampAllModel[] = [];
  bootcampModal: any;

  constructor(
    private bootcampService: BootcampService,
    public authGuard: AuthGuard,
    private instructorService: InstructorService,
    private applicationService: ApplicationService,
    private activatedRoute: ActivatedRoute,
    private toastrService:ToastrService
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
    this.bootcampModal = data;
    this.addApplicantion();
  }

  addApplicantion() {

    let applicationData = Object.assign({});
    applicationData.bootcampId = this.bootcampModal.id;
    applicationData.applicantId = localStorage.getItem('id');
    applicationData.state=this.bootcampModal.state;
    if (this.bootcampModal.state==1) {
      console.log(applicationData,'Application Data')  
      this.applicationService.addApplication(applicationData).subscribe((data) => {
        this.toastrService.success("Application")
      });
    }
    else{
      this.toastrService.warning("aktif değil")
    }
    
   
  }
}
