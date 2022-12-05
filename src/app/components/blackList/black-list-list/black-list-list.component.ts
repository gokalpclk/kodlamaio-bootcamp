import { AuthGuard } from 'src/app/guards/auth.guard';
import { ApplicantService } from './../../../services/applicant/applicant.service';
import { IBlackListAllModel } from './../../../models/blackList/request/BlackListAllModel';
import { BlackListService } from './../../../services/blackList/black-list.service';
import { Component, OnInit } from '@angular/core';
import { ToastrModule, ToastrService } from 'ngx-toastr';
import { ActivatedRoute, Router } from '@angular/router';

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
    public authGuard: AuthGuard,
    private toastrService: ToastrService,
    private router:Router
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
      this.toastrService.error('Aplicant deleted from black list');
      this.applicantService.updateApplicantState(applicantId, 1).subscribe();
      this.toastrService.success('Black list updated');
      this.router.navigate(['admin-panel/applicant-list']);
    });
  }
}
