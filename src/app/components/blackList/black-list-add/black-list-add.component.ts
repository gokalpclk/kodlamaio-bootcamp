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
  constructor(
    private blackListService: BlackListService,
    private formBuilder: FormBuilder,
    private activatedRoute: ActivatedRoute,
    private router: Router,
    private toastrService: ToastrService
  ) {}

  ngOnInit(): void {
    this.createAddBlackListForm();
  }

  createAddBlackListForm() {
    this.addBlackListForm = this.formBuilder.group({
      reason: ['', [Validators.required]],
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
      });
      this.blackListService
        .addBlackList(blackListAddRequest)
        .subscribe((data) => {
          this.router.navigate(['admin-panel/blacklist']);
          this.toastrService.success('Aplicant added black list');
        });
    } else {
      this.toastrService.error('Form not valid', 'Error');
    }
  }
}
