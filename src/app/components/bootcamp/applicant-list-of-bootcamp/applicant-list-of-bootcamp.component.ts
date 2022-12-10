import { ApplicantService } from './../../../services/applicant/applicant.service';
import { IApplicationAllModel } from './../../../models/application/request/ApplicationAllModel';
import { ApplicationService } from './../../../services/application/application.service';
import { IApplicantAllModel } from 'src/app/models/applicant/request/ApplicantAllModel';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { BootcampService } from 'src/app/services/bootcamp/bootcamp.service';
import { data } from 'jquery';
import { AuthGuard } from 'src/app/guards/auth.guard';

declare const $: any;
@Component({
  selector: 'app-applicant-list-of-bootcamp',
  templateUrl: './applicant-list-of-bootcamp.component.html',
  styleUrls: ['./applicant-list-of-bootcamp.component.css'],
})
export class ApplicantListOfBootcampComponent implements OnInit {
  bootcampId;
  applicationAllModel: IApplicationAllModel[] = [];
  applicantAllModel: IApplicantAllModel[] = [];
  constructor(
    private applicationService: ApplicationService,
    private applicantService:ApplicantService,
    private activatedRoute: ActivatedRoute,
    public authGuard: AuthGuard
  ) {}

  ngOnInit(): void {
    this.getApplicationListByBootcampId();
  }
  getApplicationListByBootcampId() {
    this.activatedRoute.params.subscribe((param)=>{
      this.bootcampId=param["id"]
      this.applicationService.getApplicationListByBootcampId(this.bootcampId).subscribe((data)=>{
        this.applicationAllModel=data;
        this.getAplicantListByBootcamp(this.applicationAllModel)
      })
    })
    
  }

  getAplicantListByBootcamp(applicationAllModel: IApplicationAllModel[]){
    for(let application of applicationAllModel){
      this.applicantService.getApplicantById(application.applicantId).subscribe((usr)=>{
        this.applicantAllModel.push(usr)
      })
    }
    setTimeout(() => {
      $('#applicantlist').DataTable({
        dom: 'Blfrtip',
        buttons: ['copy', 'csv', 'excel', 'pdf', 'print'],
        pageLenght: 5,
        processing: true,
        order: [[1, 'desc']],
      });
    }, 10);
  }
}
