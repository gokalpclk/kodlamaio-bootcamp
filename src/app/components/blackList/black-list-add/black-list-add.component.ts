import { IApplicantUpdateRequestModel } from './../../../models/applicant/request/ApplicantUpdateRequestModel';
import { ApplicantService } from './../../../services/applicant/applicant.service';
import { ToastrService } from 'ngx-toastr';
import { ActivatedRoute, Router } from '@angular/router';
import { IBlackListAddRequestModel } from './../../../models/blackList/request/BlacklistAddRequestModel';
import { BlackListService } from './../../../services/blackList/black-list.service';
import { Form, FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-black-list-add',
  templateUrl: './black-list-add.component.html',
  styleUrls: ['./black-list-add.component.css'],
})
export class BlackListAddComponent implements OnInit {
  addBlackListForm: FormGroup;
  today: Date = new Date();
  date: any =
    this.today.getDate() +
    '/' +
    this.today.getMonth() +
    '/' +
    this.today.getFullYear();
  constructor(
    private blackListService: BlackListService,
    private formBuilder: FormBuilder,
    private activatedRoute: ActivatedRoute,
    private router: Router,
    private toastrService: ToastrService,
    private applicantService: ApplicantService
  ) {}

  getApplicant: IApplicantUpdateRequestModel;
  ngOnInit(): void {
    this.createAddBlackListForm();
  }
  id: number;

  createAddBlackListForm() {
    this.addBlackListForm = this.formBuilder.group({
      reason: ['', [Validators.required]],
      date: [this.date],
    });
  }
  getAplicantById(id: number) {
    this.applicantService.getApplicantById(id).subscribe((data) => {
      console.log(data.firstName);
    });
  }

  addBlackList() {
    if (this.addBlackListForm.valid) {
      let blackListAddRequest: IBlackListAddRequestModel = Object.assign(
        {},
        this.addBlackListForm.value
      );
      this.activatedRoute.params.subscribe((params) => {
        blackListAddRequest.applicantId = params['id'];
        this.id = params['id'];
      });
      this.applicantService
        .getApplicantById(blackListAddRequest.applicantId)
        .subscribe((data) => {
          blackListAddRequest.applicantName =
            data.firstName + ' ' + data.lastName;

          this.blackListService
            .addBlackList(blackListAddRequest)
            .subscribe((data) => {
              this.router.navigate(['admin-panel/blacklist']);
              this.toastrService.success('Aplicant added black list');
            });
        });

      this.updateApplicantState();
    } else {
      this.toastrService.error('Form not valid', 'Error');
    }
  }

  updateApplicantState() {
    this.applicantService.updateApplicantState(this.id, 0).subscribe((val) => {
      this.toastrService.success('Aplicant updated');
    });
  }
}
