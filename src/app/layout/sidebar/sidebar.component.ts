import { IApplicantUpdateRequestModel } from './../../models/applicant/request/ApplicantUpdateRequestModel';
import { Component, OnInit } from '@angular/core';
import { AuthGuard } from 'src/app/guards/auth.guard';

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.css'],
})
export class SidebarComponent implements OnInit {
  getApplicant = '';

  constructor(public authGuard: AuthGuard) {}

  ngOnInit(): void {
    this.getApplicant = localStorage.getItem('id');
    console.log(this.getApplicant);
  }
}
