import { CurrentUserService } from './../../../services/current-user/current-user.service';
import { IApplicantAllModel } from 'src/app/models/applicant/request/ApplicantAllModel';
import { ToastrService } from 'ngx-toastr';
import { ActivatedRoute, Router } from '@angular/router';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-update-current-user',
  templateUrl: './update-current-user.component.html',
  styleUrls: ['./update-current-user.component.css'],
})
export class UpdateCurrentUserComponent implements OnInit {
  userUpdateForm: FormGroup;
  getUser: IApplicantAllModel;
  constructor(
    private currentUserService: CurrentUserService,
    private formBuilder: FormBuilder,
    private activatedRoute: ActivatedRoute,
    private toastrService: ToastrService,
    private router: Router
  ) {}

  ngOnInit(): void {
    this.getUserById();
  }

  getUserById() {
    this.currentUserService
      .getUserById(this.activatedRoute.snapshot.params['id'])
      .subscribe((data) => {
        this.getUser = data;
        this.createUpdateUserForm();
      });
  }
  createUpdateUserForm() {
    this.userUpdateForm = this.formBuilder.group({
      firstName: [this.getUser.firstName, Validators.required],
      lastName: [this.getUser.lastName, Validators.required],
      email: [this.getUser.email, Validators.required],
      password: [this.getUser.password, Validators.required],
      nationalIdentity: [this.getUser.nationalIdentity, Validators.required],
      dateOfBirth: [this.getUser.dateOfBirth, Validators.required],
      about: [this.getUser.about, Validators.required],
      state: [1],
    });
  }

  updateApplicant() {
    if (this.userUpdateForm.valid) {
      let getUserInfos = Object.assign({}, this.userUpdateForm.value);
      this.currentUserService
        .updateUser(this.getUser.id, getUserInfos)
        .subscribe((data) => {
          // this.router.navigate(['admin-panel/applicant-list']);
          this.toastrService.success('Update succesfull');
        });
    } else {
      this.toastrService.error('Form not valid', 'Error');
    }
  }

  deleteApplicant() {
    this.currentUserService.deleteUser(this.getUser.id).subscribe((data) => {
      this.router.navigate(['admin-panel/applicant-list']);
      this.toastrService.error('Aplicant deleted');
    });
  }
}
