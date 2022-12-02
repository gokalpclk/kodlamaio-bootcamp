import { IBlackListUpdateRequestModel } from './../../../models/blackList/request/BlacklistUpdateRequestModel';
import { ActivatedRoute } from '@angular/router';
import { BlackListService } from './../../../services/blackList/black-list.service';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-black-list-update',
  templateUrl: './black-list-update.component.html',
  styleUrls: ['./black-list-update.component.css'],
})
export class BlackListUpdateComponent implements OnInit {
  blackListUpdateForm: FormGroup;
  getBlackList: IBlackListUpdateRequestModel;
  constructor(
    private blackListService: BlackListService,
    private formBuilder: FormBuilder,
    private activatedRoute: ActivatedRoute
  ) {}

  ngOnInit(): void {
    this.getBlackListById();
  }
  getBlackListById() {
    this.blackListService
      .getBlackListById(this.activatedRoute.snapshot.params['id'])
      .subscribe((data) => {
        this.getBlackList = data;
        this.createUpdateBlackListForm();
      });
  }

  createUpdateBlackListForm() {
    this.blackListUpdateForm = this.formBuilder.group({
      id: [this.getBlackList.id, Validators.required],
      applicantId: [this.getBlackList.applicantId, Validators.required],
      date: [this.getBlackList.date, Validators.required],
      reason: [this.getBlackList.reason, Validators.required],
    });
  }

  updateBlackList(id: number) {
    if (this.blackListUpdateForm.valid) {
      let blackListModel = Object.assign({}, this.blackListUpdateForm.value);
      this.blackListService.updateBlackList(id, blackListModel);
    }
  }
}
