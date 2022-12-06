import { IApplicantUpdateRequestModel } from './../../models/applicant/request/ApplicantUpdateRequestModel';
import { ITokenModel } from './../../models/token/TokenModel';
import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { LoginService } from './../../services/login/login.service';
import { IEmployeeLoginModel } from './../../models/employee/request/EmployeeLoginModel';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { Component, OnInit } from '@angular/core';

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
    private router: Router
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
            localStorage.setItem('token', data[0].token);
            localStorage.setItem('id', data[0].id.toString());
            localStorage.setItem('role', data[0].role);
          } else {
            this.toastr.error('Giriş Başarısız');
          }
        });
    } else {
      this.toastr.error('Bilgilerinizi Doğru Girdiğinizden Emin Olun');
    }
  }
}
