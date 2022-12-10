import { ApplicantService } from './../../services/applicant/applicant.service';
import { IInstructorAllModel } from 'src/app/models/instructor/request/InstructorAllModel';
import { ApplicationService } from './../../services/application/application.service';
import { IApplicationAllModel } from './../../models/application/request/ApplicationAllModel';
import { AuthGuard } from 'src/app/guards/auth.guard';
import { Store } from '@ngrx/store';
import { CurrentUserService } from './../../services/current-user/current-user.service';
import { DashboardService } from './../../services/dashboard/dashboard.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css'],
})
export class HomeComponent implements OnInit {

  allApplicationList: IApplicationAllModel[] = []
  allInstructorList: IInstructorAllModel[] = []
  applicationByIdList: IApplicationAllModel[] = [];
  totalApplicants = 0;
  totalEmployee = 0;
  totalInstructors = 0;
  totalBootcamps = 0;
  currentUserId = 0;
  userInfo: string;

  today: Date = new Date();
  date: any =
    this.today.getDate() +
    '/' +
    this.today.getMonth() +
    '/' +
    this.today.getFullYear();

  constructor(
    private dashboardService: DashboardService,
    private currentUserService: CurrentUserService,
    private applicationService: ApplicationService,
    private applicantService: ApplicantService,
    public authGuard: AuthGuard
  ) {}

  ngOnInit(): void {
    this.getAllApplicants();
    this.getTotalEmployee();
    this.getTotalInstructors();
    this.getTotalBootcamps();
    this.getUser();
    this.getAllApplication();
    this.getApplicationByApplicantId(localStorage.getItem('id'));
  }
  getAllApplicants() {
    this.dashboardService.getTotalApplicants().subscribe((data: any) => {
      this.totalApplicants = data.length;
    });
  }
  getTotalEmployee() {
    this.dashboardService.getTotalEmployee().subscribe((data: any) => {
      this.totalEmployee = data.length;
    });
  }
  getTotalInstructors() {
    this.dashboardService.getTotalInstructors().subscribe((data: any) => {
      this.totalInstructors = data.length;
    });
  }
  getTotalBootcamps() {
    this.dashboardService.getTotalBootcamps().subscribe((data: any) => {
      this.totalBootcamps = data.length;
    });
  }
  getAllApplication(){
    this.applicationService.getAllApplication().subscribe(data=>{
      this.allApplicationList = data
    })
  }
  getApplicationByApplicantId(id:any){
    this.applicationService.getApplicationByApplicantId(id).subscribe(data=>{
      this.applicationByIdList=data
    })
  }
  getUser() {
    this.currentUserId = JSON.parse(localStorage.getItem('id'));
    this.applicantService
      .getApplicantById(this.currentUserId)
      .subscribe((data) => {
        console.log(data, ' Bu data');
        this.userInfo = `${data.firstName} ${data.lastName}`;
      });
  }
}
