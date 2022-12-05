import { AuthGuard } from 'src/app/guards/auth.guard';
import { BlackListService } from './../../../services/blackList/black-list.service';
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
  blackListAddComponent: BlackListAddComponent;
  constructor(
    private applicantService: ApplicantService,
    private blackListService: BlackListService,
    public authGuard: AuthGuard
  ) {}

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
