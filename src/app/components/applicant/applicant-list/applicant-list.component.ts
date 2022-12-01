import { ApplicantService } from './../../../services/applicant/applicant.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-applicant-list',
  templateUrl: './applicant-list.component.html',
  styleUrls: ['./applicant-list.component.css'],
})
export class ApplicantListComponent implements OnInit {
  allApplicantsList = this.applicantService.allApplicants;
  constructor(private applicantService: ApplicantService) {}

  ngOnInit(): void {
    this.getAllApplicants();
  }

  getAllApplicants() {
    this.applicantService.getAllApplicants();
  }
}
