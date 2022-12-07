import { IUser } from './../../models/users/user';
import { IApplicantUpdateRequestModel } from './../../models/applicant/request/ApplicantUpdateRequestModel';
import { ITokenModel } from './../../models/token/TokenModel';
import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { LoginService } from './../../services/login/login.service';
import { IEmployeeLoginModel } from './../../models/employee/request/EmployeeLoginModel';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { Login } from 'src/app/store/actions/user-actions';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'],
})
export class LoginComponent implements OnInit {
  employeeLoginForm: FormGroup;
  employee: IEmployeeLoginModel[] = [];
  currentApplicant: IApplicantUpdateRequestModel;
  // tokenModel: ITokenModel;
  constructor(
    private formBuilder: FormBuilder,
    private loginService: LoginService,
    private toastr: ToastrService,
    private router: Router,
    // private store: Store<any>,
  ) {}
  ngOnInit(): void {
    this.creatEmployeeLoginForm();
  }

  creatEmployeeLoginForm() {
    this.employeeLoginForm = this.formBuilder.group({
      email: ['', Validators.required],
      password: ['', Validators.required],
    });
  }

  employeeLogin() {
    if (this.employeeLoginForm.valid) {
      this.loginService
        .employeeLogin(this.employeeLoginForm.value)
        .subscribe((data) => {
          console.log(data, ' data');
          if (data.length > 0) {
            this.toastr.success('Giriş Başarılı');
            data[0].role == 'ROLE_INSTRUCTOR'
              ? this.router.navigate(['instructor-panel'])
              : data[0].role == 'ROLE_EMPLOYEE'
              ? this.router.navigate(['admin-panel'])
              : this.router.navigate(['applicant-panel']);
              // redux
              // let user:IUser;
              // user.id=data[0].id.toString();
              // user.role=data[0].role;
              // user.token=data[0].token;
              // this.store.dispatch(new Login(user));
              // redux

            localStorage.setItem('token', data[0].token);
            localStorage.setItem('id', data[0].id.toString());
            localStorage.setItem('role', data[0].role);
          } else {
            this.toastr.error('Make Sure You Enter Your Information Correctly!');
          }
        });
    } else {
      this.toastr.warning('Cannot be blank! Please fill in all fields.');
    }
  }
}
