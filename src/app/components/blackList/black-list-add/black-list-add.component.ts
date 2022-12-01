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
    private formBuilder: FormBuilder
  ) {}

  ngOnInit(): void {
    this.createAddBlackListForm();
  }

  createAddBlackListForm() {
    this.addBlackListForm = this.formBuilder.group({
      applicantId: [[''], Validators.required],
      date: [[''], Validators.required],
      reason: [[''], Validators.required],
    });
  }

  addBlackList() {
    if (this.addBlackListForm.valid) {
      let blackListModel = Object.assign({}, this.addBlackListForm.value);
      this.blackListService.addBlackList(blackListModel);
    }
  }
}
