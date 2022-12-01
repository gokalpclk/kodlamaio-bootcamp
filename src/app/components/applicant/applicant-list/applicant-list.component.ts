import { BlackListAddComponent } from './../../blackList/black-list-add/black-list-add.component';
import { ApplicantService } from './../../../services/applicant/applicant.service';
import { Component, OnInit } from '@angular/core';
import { IApplicantAllModel } from 'src/app/models/applicant/request/ApplicantAllModel';

@Component({
  selector: 'app-applicant-list',
  templateUrl: './applicant-list.component.html',
  styleUrls: ['./applicant-list.component.css'],
})
export class ApplicantListComponent implements OnInit {
  allApplicantsList: IApplicantAllModel[] = [];
  blackListAddComponent:BlackListAddComponent
  constructor(private applicantService: ApplicantService) {}

  ngOnInit(): void {
    this.getAllApplicants();
    console.log(this.allApplicantsList);
  }

  getAllApplicants() {
    this.applicantService.getAllApplicants().subscribe((data) => {
      this.allApplicantsList = data;
    });
  }
}
