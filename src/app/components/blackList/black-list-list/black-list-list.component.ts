import { AuthGuard } from 'src/app/guards/auth.guard';
import { ApplicantService } from './../../../services/applicant/applicant.service';
import { IBlackListAllModel } from './../../../models/blackList/request/BlackListAllModel';
import { BlackListService } from './../../../services/blackList/black-list.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-black-list-list',
  templateUrl: './black-list-list.component.html',
  styleUrls: ['./black-list-list.component.css'],
})
export class BlackListListComponent implements OnInit {
  allBlackListList: IBlackListAllModel[] = [];
  constructor(
    private blackListService: BlackListService,
    private applicantService: ApplicantService,
    public authGuard: AuthGuard
  ) {}

  ngOnInit(): void {
    this.getAllBlackList();
  }

  getAllBlackList() {
    this.blackListService.getAllBlackLists().subscribe((response) => {
      this.allBlackListList = response;
    });
  }

  removeApplicant(id: number, applicantId: number) {
    this.blackListService.removeApplicant(id).subscribe((response) => {
      console.log(response, ' applicant blacklistten silindi');
      this.applicantService.addApplicant(applicantId).subscribe((response) => {
        console.log(response, ' Applicant geri eklendi');
      });
    });
  }
}
