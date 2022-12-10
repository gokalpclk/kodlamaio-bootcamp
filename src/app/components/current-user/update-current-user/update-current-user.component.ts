import { ApplicantService } from './../../../services/applicant/applicant.service';
import { IApplicantAllModel } from 'src/app/models/applicant/request/ApplicantAllModel';
import { ToastrService } from 'ngx-toastr';
import { ActivatedRoute, Router } from '@angular/router';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { Logout } from 'src/app/store/actions/user-actions';

@Component({
  selector: 'app-update-current-user',
  templateUrl: './update-current-user.component.html',
  styleUrls: ['./update-current-user.component.css'],
})
export class UpdateCurrentUserComponent implements OnInit {
  userUpdateForm: FormGroup;
  getUser: IApplicantAllModel;
  constructor(
    private applicantService: ApplicantService,
    private formBuilder: FormBuilder,
    private activatedRoute: ActivatedRoute,
    private toastrService: ToastrService,
    private router: Router,
    private store: Store<any>
  ) {}

  ngOnInit(): void {
    this.getUserById();
  }

  getUserById() {
    this.applicantService
      .getApplicantById(this.activatedRoute.snapshot.params['id'])
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
      token: [this.getUser.token],
      role: [this.getUser.role],
      expiration: [this.getUser.expiration],
    });
  }

  updateUser() {
    if (this.userUpdateForm.valid) {
      let getUserInfos = Object.assign({}, this.userUpdateForm.value);
      this.applicantService
        .updateApplicant(this.getUser.id, getUserInfos)
        .subscribe((data) => {
          // this.router.navigate(['admin-panel/applicant-list']);
          this.toastrService.success('Update succesfull');
        });
    } else {
      this.toastrService.error('Form not valid', 'Error');
    }
  }

  deleteUser() {
    this.applicantService.deleteApplicant(this.getUser.id).subscribe((data) => {
      this.toastrService.error('Your Account Deleted!');
      this.store.dispatch(new Logout());
      localStorage.clear();
      this.router.navigate(['']);
    });
  }
}
