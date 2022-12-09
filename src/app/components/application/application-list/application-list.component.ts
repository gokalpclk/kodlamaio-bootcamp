import { IApplicantAllModel } from './../../../models/applicant/request/ApplicantAllModel';
import { ApplicantService } from './../../../services/applicant/applicant.service';
import { AuthGuard } from './../../../guards/auth.guard';
import { IApplicationAllModel } from './../../../models/application/request/ApplicationAllModel';
import { ApplicationService } from './../../../services/application/application.service';
import { Component, OnInit } from '@angular/core';
import { ApplicationStates } from './../../../enums/applicationState';

@Component({
  selector: 'app-application-list',
  templateUrl: './application-list.component.html',
  styleUrls: ['./application-list.component.css'],
})
export class ApplicationListComponent implements OnInit {
  allApplicationList: IApplicationAllModel[] = [];
  applicationByIdList: IApplicationAllModel[] = [];
  applicant: IApplicantAllModel;
  constructor(
    private applicationService: ApplicationService,
    public authGuard: AuthGuard,
    private applicantService:ApplicantService
  ) {}

  ngOnInit(): void {
    this.getAllApplication();
    this.getApplicationByApplicantId(localStorage.getItem('id'))
  }

  getAllApplication() {
    this.applicationService.getAllApplication().subscribe((data) => {
      this.allApplicationList = data;
    });
  }

  getApplicantById(id:number){
    this.applicantService.getApplicantById(id).subscribe(data=>{
      this.applicant=data
    })
  }

  getApplicationByApplicantId(id:any){
    this.applicationService.getApplicationByApplicantId(id).subscribe(data=>{
      this.applicationByIdList=data
    })
  }

}
